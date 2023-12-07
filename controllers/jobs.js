const Job = require('../models/job');
const Comment = require('../models/comment');
const Like = require('../models/job');
const Share = require('../models/job');

const jobsController = {
  index: async (req, res) => {
    try {
      const jobs = await Job.find();
      res.render('jobs/index', { jobs });
    } catch (error) {
      res.render('error', { error });
    }
  },

  show: async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      const comments = await Comment.find({ job: req.params.id });
      const likes = await Like.find({ job: req.params.id });
      const shares = await Share.find({ job: req.params.id });
      
      res.render('jobs/show', { job, comments, likes, shares });
    } catch (error) {
      res.render('error', { error });
    }
  },

  create: async (req, res) => {
    try {
      const newJob = await Job.create(req.body);
      res.redirect(`/jobs/${newJob._id}`);
    } catch (error) {
      res.render('error', { error });
    }
  },

  addComment: async (req, res) => {
    try {
      const newComment = await Comment.create(req.body);
      res.redirect(`/jobs/${req.params.id}`);
    } catch (error) {
      res.render('error', { error });
    }
  },

  addLike: async (req, res) => {
    try {
      const newLike = await Like.create(req.body);
      res.redirect(`/jobs/${req.params.id}`);
    } catch (error) {
      res.render('error', { error });
    }
  },

  share: async (req, res) => {
    try {
      const newShare = await Share.create(req.body);
      res.redirect(`/jobs/${req.params.id}`);
    } catch (error) {
      res.render('error', { error });
    }
  }
};



