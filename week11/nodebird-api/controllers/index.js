// 패키지의 함수나 변수를 불러올 때 이름을 v4에서 uuidv4로 변경 
const { v4: uuidv4 } = require('uuid'); 

const { User, Domain } = require('../models');

exports.renderLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({
        
        // 시퀄라이즈 where에는 undefined가 들어가면 안 되므로 req.user?.id||null을 사용 
        where: { id: req.user?.id || null }, 
        
        include: { model: Domain },
        });
        res.render('login', {
        user,
        domains: user?.Domains,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.createDomain = async (req, res, next) => {
    try {
        await Domain.create({
        UserId: req.user.id,
        host: req.body.host,
        type: req.body.type,
        
        // 도메인 등록 라우터에서는 clientSecret 값을 uuid 패키지 버전 4를 통해 생성
        clientSecret: uuidv4(),	
        
        });
        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
};