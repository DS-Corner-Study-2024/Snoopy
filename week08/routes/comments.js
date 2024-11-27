/* 댓글에 관련된 CRUD 작업을 하는 라우터 */

const express = require('express');
const { Comment } = require('../models');

const router = express.Router();

// POST /comments : 댓글을 생성하는 라우터
router.post('/', async (req, res, next) => {
  try {
    // commenter 속성에 사용자 아이디를 넣어 사용자와 댓글을 연결
    const comment = await Comment.create({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route('/:id')
  // PATCH /comments/:id : 댓글을 수정하는 라우터 
  .patch(async (req, res, next) => {
    try { // update 메서드 
      const result = await Comment.update({ 
        comment: req.body.comment,
      }, {
        where: { id: req.params.id },
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  // DELETE /comments/:id : 댓글을 삭제하는 라우터 
  .delete(async (req, res, next) => {
    try {   // destroy 메서드 
      const result = await Comment.destroy({ where: { id: req.params.id } });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;