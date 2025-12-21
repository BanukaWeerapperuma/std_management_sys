 //import router fun.
 const router = require("express").Router();
const { response } = require("express");
//import Student model
 let Student = require("../models/Student");

 //-----------------add data--------------------------
 //create student http://localhost:5000/student/add
router.route("/add").post((req,res)=>{
    //get data from req body from front end
    const name =req.body.name;
    const age = Number(req.body.age); //casting
    const gender = req.body.gender;

    //make object
    const newStudent = new Student ({name,age,gender})

    //pass the obj to mongodb
    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//-----------------get all data-------------------------------

router.route("/").get((req, res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);       
    })
})


//-----------------updata data-------------------------------------
//async await (ompotent)
router.route("/update/:id").put(async(req , res) =>{
     let userId =req.params.id;
    //destructur for after updated details
     const {name , age , gender} =req.body;

    const updateStudent = {name ,age ,gender}

    const update = await Student.findByIdAndUpdate(userId , updateStudent).then (()=>{
        //optional .. updated user name
        res.status(200).send({status : "User Updated" })
    }).catch((err)=>{
        //show in frontend
        res.status(500).send({status : "Error with updating data" , error:err.message});       
    })   
})


//----------------delete student-------------------

router.route("/delete/:id").delete(async(req , res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status : "user Deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with delete user" , error:err.message})    
    })
})


//-----------show onlu one student------------------

router.route("/get/:id").get(async(req ,res)=>{
    let userId = req.params.id;

    //findOne(email)
    const user = await Student.findById(userId).then((student)=>{
        res.status(200).send({status :"user fetched" , student})
    }).catch((err)=>{
        res.status(500).send({status :"Error with get user" , error : err.message})
    })
})

module.exports = router;