const Job = require('../models/job');

module.exports = {
  index,
  show,
  new: newJob,
  create, 
  
 
};
// Render job listings
async function index(req, res) {
  const jobs = await Job.find({});
 res.render('jobs/index', { title: 'Jobs', jobs })

}
function newJob(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('jobs/new', { title: 'Add Role', errorMsg: '' });
}

async function show(req, res) {
  const job = await Job.findById(req.params.id)
  res.render('jobs/show', { title: 'Role Details', job });
  console.log(job);
}

async function create(req, res) {
  try {
    const job = await Job.create(req.body);
    res.redirect(`/jobs/${job._id}`);
  } catch(err) {
    console.log(err);
    res.render('jobs/new', { title:'Create',errorMsg: err.message });
  }
}

 
