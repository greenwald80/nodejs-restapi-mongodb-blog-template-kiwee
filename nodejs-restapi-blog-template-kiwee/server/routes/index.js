const express = require('express');
const PostCtrl = require('../controllers/post.controller');
const router = express.Router();
//localhost:3000/api
router.get('/', PostCtrl.list);
//localhost:3000/api/610d02bf1128b55a48b5bde2
router.get('/:id', PostCtrl.get);
router.post('/', PostCtrl.create);
router.put('/:id', PostCtrl.update);
router.delete('/:id', PostCtrl.delete);
module.exports = router;