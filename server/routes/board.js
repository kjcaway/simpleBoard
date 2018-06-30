var express = require('express');
var Board = require('../models/board');
var mongoose = require('mongoose');

const router = express.Router();

// 게시물 입력
router.post('/', (req, res) => {
  if (req.body.username === "") {
    return res.status(400).json({
      error: "EMPTY USERNAME",
      code: 2
    });
  }

  if (req.body.contents === "") {
    return res.status(400).json({
      error: "EMPTY CONTENTS",
      code: 2
    });
  }

  let board = new Board({
    writer: req.body.username,
    contents: req.body.contents
  });

  board.save(err => {
    if (err) throw err;
    return res.json({ success: true });
  });
});

// 게시물 조회
router.get('/', (req, res) => {
  Board.find()
  .sort({"_id": -1})
  .exec((err, boards) => {
      if(err) throw err;
      res.json(boards);
  });
});

module.exports = router;