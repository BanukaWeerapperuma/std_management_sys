 //import router fun.
 const router = require("express").Router();
//import Student model
 let Student = require("../models/Student");

 //create student http://localhost:5000/student/add
router.route("/add").post((req,res)=>{
    //get data from req body from front end
    const name =req.body.name;
    const age = Number(req.body.age); //casting
    const gender = req.body.gender;

    //make object
    const newStudent = new Student ({
        name,
        age,
        gender
    })

    //pass the obj to mongodb
    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })

})


//------------------------------------------------

router.route("/").get((req, res)=>{
    Student.find
})


module.exports = router;





