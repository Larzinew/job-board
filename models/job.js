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
      timestamps: true

//   postDate: {
//     type: Date,
//    default: function () {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth();
//     const day = today.getDate();
//     const finalDate = new Date(year, month, day + 365);
//     return finalDate;
//    }
// },

// comments:[commentSchema],


})


module.exports = mongoose.model('job', jobSchema);
