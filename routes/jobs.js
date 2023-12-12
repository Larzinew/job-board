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
// // DELETE /jobs/:id (delete functionality)
router.delete('/:id', jobsCtrl.delete);
// Update /posts/:id (update functionality)
router.put('/:id', jobsCtrl.update);
// Edit /jobs/:id/edit
router.get('/:id/edit', jobsCtrl.edit);

// // Routes for liking and sharing
// router.post('/:id/like', jobsCtrl.likeJob);
// router.post('/:id/share', jobsCtrl.shareJob);

// // GET /jobs/:id/edit (edit functionality)
// router.get('/:id/edit', jobsCtrl.edit);
// // PUT /jobs/:id (update functionality)
// router.put('/:id', jobsCtrl.update);

  
module.exports = router;
