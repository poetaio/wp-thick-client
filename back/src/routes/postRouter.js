const express = require('express');
const {postController} = require("../controllers");
const {authMiddleware} = require("../middleware");
const {UserRoleEnum} = require("../utils");
const router = express.Router();

router.post('/', authMiddleware(), postController.create);
router.get('/', postController.getAllPaginated);
router.get('/:postId', postController.getOne);
router.put('/:postId', authMiddleware(), postController.update);
router.delete('/:postId', authMiddleware(), postController.delete);
router.get('/all', postController.getAll);

module.exports = router;
