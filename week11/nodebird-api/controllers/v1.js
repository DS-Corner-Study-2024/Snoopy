const jwt = require('jsonwebtoken');
const { Domain, User, Post, Hashtag } = require('../models');

exports.createToken = async (req, res) => {
    const { clientSecret } = req.body;
    try {
        const domain = await Domain.findOne({
            where: { clientSecret },
            include: {
                model: User,
                attribute: ['nick', 'id'],
            },
        });

        // 클라이언트 비밀 키로 등록된 도메인인지 확인 
        if (!domain) {

            // 등록되지 않은 도메인이라면 에러 메시지 
            return res.status(401).json({
                code: 401,
                message: '등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요',
            });
            }

            // 등록된 도메인이라면 토큰 발급 
            const token = jwt.sign({        // jwt.sign 메서드 
                id: domain.User.id,         // 1. 토큰의 내용 - 사용자의 아이디
                nick: domain.User.nick,     // 1. 토큰의 내용 - 사용자의 닉네임 
            }, process.env.JWT_SECRET, {    // 2. 토큰의 비밀 키 
                expiresIn: '1m', // 1분     // 3. 토큰의 설정 - 유효 기간 1분 
                issuer: 'nodebird',         // 3. 토큰의 설정 - 발급자 nodebird 
            });
            return res.json({
                code: 200,
                message: '토큰이 발급되었습니다',
                token,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
};

// 검증에 성공하면 토큰의 내용물을 응답으로 보낸다. 
exports.tokenTest = (req, res) => {
    res.json(res.locals.decoded);
};

exports.getMyPosts = (req, res) => {
    Post.findAll({ where: { userId: res.locals.decoded.id } })
    .then((posts) => {
        console.log(posts);
        res.json({
            code: 200,
            payload: posts,
        });
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    });
};

exports.getPostsByHashtag = async (req, res) => {
    try {
        const hashtag = await Hashtag.findOne({ where: { title: req.params.title } });
        if (!hashtag) {
            return res.status(404).json({
                code: 404,
                message: '검색 결과가 없습니다',
            });
        }
        const posts = await hashtag.getPosts();
        return res.json({
            code: 200,
            payload: posts,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
};