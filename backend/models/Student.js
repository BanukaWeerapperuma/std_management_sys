const mongoose = require("mongoose");
const Schema = mongoose.Schema;  

//table / document template
const studentSchema = new Schema ({

    name : {
        type : String,
        required : true
    } , 

    age :{
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    }

})

//data send data base via model
//collection name , schema name
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;