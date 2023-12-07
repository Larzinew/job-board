const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const Comment = require('../models/comment');
const Like = require('../models/job');
const Share = require('../models/job');

// Route to render job listings
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.render('jobs/index', { jobs });
  } catch (error) {
    res.render('error', { error });
  }
});

// Route to render a specific job's details
router.get('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    const comments = await Comment.find({ job: req.params.id });
    const likes = await Like.find({ job: req.params.id });
    const shares = await Share.find({ job: req.params.id });
    
    res.render('jobs/show', { job, comments, likes, shares });
  } catch (error) {
    res.render('error', { error });
  }
});

// Route to create a new job listing
router.post('/jobs', async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.redirect(`/jobs/${newJob._id}`);
  } catch (error) {
    res.render('error', { error });
  }
});

// Route to add a comment to a job listing
router.post('/jobs/:id/comments', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.redirect(`/jobs/${req.params.id}`);
  } catch (error) {
    res.render('error', { error });
  }
});

// Route to add a like to a job listing
router.post('/jobs/:id/likes', async (req, res) => {
  try {
    const newLike = await Like.create(req.body);
    res.redirect(`/jobs/${req.params.id}`);
  } catch (error) {
    res.render('error', { error });
  }
});

// Route to share a job listing
router.post('/jobs/:id/shares', async (req, res) => {
  try {
    const newShare = await Share.create(req.body);
    res.redirect(`/jobs/${req.params.id}`);
  } catch (error) {
    res.render('error', { error });
  }
});

module.exports = router;
