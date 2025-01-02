const express = require('express');
const { renderLogin, createDomain } = require('../controllers');
const { isLoggedIn } = require('../middlewares');

const router = express.Router();

// GET / 라우터 : 접속 시 로그인 화면을 보여준다. 
router.get('/', renderLogin);

// 도메인 등록 라우터 (POST /domain) : 폼으로부터 온 데이터를 도메인 모델에 저장한다. 
router.post('/domain', isLoggedIn, createDomain);

module.exports = router;