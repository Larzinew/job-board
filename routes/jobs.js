var express = require('express');
var router = express.Router();

// You'll be creating this controller module next
const jobsCtrl = require('../controllers/jobs');
  
// GET /jobs
router.get('/', jobsCtrl.index);
// GET /jobs/new
router.get('/new', jobsCtrl.new);
// // GET job/:id (show functionality) MUST be below new route
router.get('/:id', jobsCtrl.show);
// // POST jobs
router.post('/', jobsCtrl.create);
  
module.exports = router;
