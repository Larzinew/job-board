const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
   title: {
    type: String,
   },

   description: {
    type: String,
   },
    
   company: {
    type: String,
   },

   jobID: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
   }, 
   
   });




module.exports = mongoose.model('job', jobSchema);
