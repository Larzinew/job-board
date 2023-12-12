const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// POST /jobs/:id/jobs (create review for a job)
router.post('/jobs/:id', commentsCtrl.create);

module.exports = router;