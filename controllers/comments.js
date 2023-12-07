const Job = require('../models/job');

module.exports = {
  create
};

async function create(req, res) {
  const job= await job.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  job.comments.push(req.body);
  try {
    // Save any changes made to the movie doc
    await comment.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/jobs/${job._id}`);
}