const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
   jobTitle: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    requirements: {
      type: String,
      required: true
    },
    salary: {
      type: String,
      enum: ['0 - 20k', '20k - 40k', '40k - 60k', '60k - 80k', '80k - 100k', '100k - 120k', '120k -140k','140k - 160k','160k - 180k', '200k+'],
    },
    applyLink: {
      type: String,
      required: true
    },
    postedAt: {
      type: Date,
      default: Date.now
    }
   });




module.exports = mongoose.model('job', jobSchema);
