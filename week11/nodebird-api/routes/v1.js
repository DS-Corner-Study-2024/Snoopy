const express = require('express');

const { verifyToken, deprecated } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag } = require('../controllers/v1');

const router = express.Router();

router.use(deprecated);

// POST /v1/token
router.post('/token', createToken);

// POST /v1/test
router.get('/test', verifyToken, tokenTest);

// GET /v1/posts/my : 내가 올린 포스트를 가져오는 라우터 
router.get('/posts/my', verifyToken, getMyPosts);

// GET /v1/posts/hashtag/:title : 해시태그 검색 결과를 가져오는 라우터 
router.get('/posts/hashtag/:title', verifyToken, getPostsByHashtag);

module.exports = router;