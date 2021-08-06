const express = require('express');
const PostCtrl = require('../controllers/post.controller');
const router = express.Router();

//localhost:3000/api/posts => POST => Body => raw => JSON
// {
//     "data": {
//         "title": "title",
//         "body": "body",
//         "author": "author"
//     }
// }
router.post('/', PostCtrl.create);
module.exports = router;