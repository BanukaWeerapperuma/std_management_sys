import React, { useState } from "react";
import axios, { all } from "axios";


function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");


    function sendData(e){

        e.preventDefault();
            alert("sendData!");

            const newStudent ={name , age , gender }
            console.log(newStudent);

            //object send to Backend url , pass obj
            axios
              .post("http://localhost:5000/student/add" , newStudent)
              .then(() => {alert ("add student")})
              .catch(err => console.error(err));

    }


    return (

        <div className="container">
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label for="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name"

                        
                                //e.target.value is we type value , this is set to setName
                               onChange={(e) => { setName(e.target.value)}} />

                </div>

                <div className="mb-3">
                    <label for="age" className="form-label">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Your Age"
                        
                        onChange={(e) => { setAge(e.target.value)}} />

                </div>

                <div className="mb-3">
                    <label for="gender" className="form-label">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Your Gender"

                        onChange={(e) => { setGender(e.target.value)}} />

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )

}


export default AddStudent;
