const axios = require('axios');

const URL = process.env.API_URL;
// 요청의 헤더 origin 값을 localhost:4000으로 설정 
axios.defaults.headers.origin = process.env.ORIGIN; 

// request 함수 : NodeBird API에 요청을 보내는 함수 
const request = async (req, api) => {
    try {
        // 세션에 토큰이 없으면 clientSecret을 사용해 토큰 발급 요청을 보낸다. 
        if (!req.session.jwt) { 
        const tokenResult = await axios.post(`${URL}/token`, {
            clientSecret: process.env.CLIENT_SECRET,
        });
        req.session.jwt = tokenResult.data.token; // 토큰은 세션에 저장 
        }
        // 발급받은 후에는 토큰을 이용해 API 요청을 보낸다. 
        return await axios.get(`${URL}${api}`, {
        headers: { authorization: req.session.jwt },
        }); 
    } catch (error) {
        // 토큰이 만료되면 419 에러 -> 토큰 지우고 재발급 
        if (error.response?.status === 419) { 
            delete req.session.jwt;
            return request(req, api);
        } // 419 외의 다른 에러면
        throw error;
    }
};

// GET /myposts : API를 사용해 자신이 작성한 포스트를 JSON 형식으로 가져오는 라우터 
exports.getMyPosts = async (req, res, next) => {
    try {
        const result = await request(req, '/posts/my');
        res.json(result.data);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// GET /search/:hashtag : API를 사용해 해시태그를 검색하는 라우터 
exports.searchByHashtag = async (req, res, next) => {
    try {
        const result = await request(
        req, `/posts/hashtag/${encodeURIComponent(req.params.hashtag)}`,
        );
        res.json(result.data);
    } catch (error) {
        if (error.code) {
        console.error(error);
        next(error);
        }
    }
};

exports.renderMain = (req, res) => {
    res.render('main', {key: process.env.CLIENT_SECRET});
};