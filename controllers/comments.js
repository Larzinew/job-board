const Job = require('../models/job');

module.exports = {
  create
};

async function create(req, res) {
  const job= await Job.findById(req.params.id);

   // Add the user-centric info to req.body (the new review)
   req.body.user = req.user._id;
   req.body.userName = req.user.name;
   req.body.userAvatar = req.user.avatar;

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