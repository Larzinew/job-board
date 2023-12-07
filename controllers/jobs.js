const Jobs = require('../models/jobs');

module.exports = {
    index,
    show,
    new: newJob,
    create
  };
  
  async function index(req, res) {
    const jobs = await Jobs.find({});
    res.render('jobs/index', { title: 'Jobs', jobs });
  }
  
  async function show(req, res) {
    const job = await job.findById(req.params.id);
    res.render('jobs/show', { title: 'Job Detail', job });
  }
  
  function newJob(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('jobs/new', { title: 'Add Job', errorMsg: '' });
  }
  
  async function create(req, res) {
    try {
      const job = await Jobs.create(req.body);
      console.log(job);
      res.redirect(`/jobs/${job._id}`);
    } catch(err) {
      console.log(err);
      res.render('jobs/new', { errorMsg: err.message });
    }
  }