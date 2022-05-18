const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const postRouter = require('./postRouter');
const commentRouter = require('./commentRouter');

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/post', postRouter);
router.use('/comment', commentRouter);

module.exports = router;
