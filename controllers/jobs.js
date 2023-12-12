const Job = require('../models/job');

module.exports = {
  index,
  show,
  new: newJob,
  create,
  delete : deleteJob,
  // likeJob,
  // shareJob,
  update, 
  edit, 
  
};
// Render job listings
async function index(req, res) {
  const jobs = await Job.find({});
  console.log(jobs)
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
  // console.log(job);
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
async function deleteJob(req, res) {
  const job = req.params.id;
try {
  const deletedJob = await Job.findByIdAndDelete(job);

  if (!deletedJob){
    return res.status(404).send('Job not found');
  } 
    res.redirect('/jobs');
} catch (err) {
    console.error(err);
    res.render('jobs', {errorMsg: err.message});
  }
}

async function update(req, res) {
  const jobId = req.params.id;
  
  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, req.body, { new: true });
    
    if (!updatedJob) {
      return res.status(404).send('Job not found');
    }

    res.redirect(`/jobs/${jobId}`);
  } catch (err) {
    console.error(err);
    res.render('error', { error: err.message });
  }
}

async function edit(req,res) {
  const job = await Job.findById(req.params.id)
  res.render('jobs/edit',{job})
}


// async function likeJob(req, res) {
//   const jobId = req.params.id;
//   try {
//     const job = await Job.findById(jobId);
//     job.likes.push({ user: req.user._id });
//     await job.save();
//     res.redirect(`/jobs/${jobId}`);
//   } catch (err) {
//     console.log(err);
//     res.render('error', { error: err });
//   }
// }

// async function shareJob(req, res) {
//   const jobId = req.params.id;
//   try {
//     const job = await Job.findById(jobId);
//     job.shares.push({ user: req.user._id });
//     await job.save();
//     res.redirect(`/jobs/${jobId}`);
//   } catch (err) {
//     console.log(err);
//     res.render('error', { error: err });
//   }
// }
 
