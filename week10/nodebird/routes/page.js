const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('../middlewares');  // 추가 
const {renderProfile, renderJoin, renderMain} = require('../controllers/page');

const router = express.Router();

// 라우터용 미들웨어, 모든 템플릿 엔진에서 공통으로 사용하기 때문에 변수를 res.lacals로 설정 
router.use((req, res, next) => {
    res.locals.user = req.user; //추가 
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followingIdList = [];
    next();
});

// 페이지 3개로 구성 
router.get('/profile', isLoggedIn, renderProfile);  // 추가
router.get('/join', isNotLoggedIn, renderJoin);     // 추가 
router.get('/', renderMain);

module.exports = router;