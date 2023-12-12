const Job = require('../models/job');

module.exports = {
  create
};

async function create(req, res) {
  try {
    // Find the job by its ID
    const job = await Job.findById(req.params.id);

    // Add user-centric info to req.body (the new comment)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // Push the comment into the job's comments array
    job.comments.push(req.body);
    // console.log(req.body),
  

    // Save the changes made to the job document
    await job.save();

    // Respond to the request by redirecting to the job's details page
    res.redirect(`/jobs/${job._id}`);
  } catch (err) {
    // Handle errors appropriately
    console.error(err);
    res.render('error', { error: err });
  }
}