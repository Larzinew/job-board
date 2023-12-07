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

   const commentSchema = new Schema({
      user: {
         type: Schema.Types.ObjectId,
         ref: 'User',
         required: true
       },
       userName: String,
       userAvatar: String
     }, {
       timestamps: true
     });   


comments:[commentSchema],


module.exports = mongoose.model('job', jobSchema);
