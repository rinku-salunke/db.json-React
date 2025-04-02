import axios from "axios";
import { useState } from "react";

function ViewCourses(){

const [courses, setCourses]=useState([]);

function getAllCourses(){
    axios.get("http://localhost:5000/course")
    .then(response=>{
        if(response.status===200){
            setCourses(response.data)
        }
    }).catch()
}

    return<>
<h1>Courses List</h1>
<button onClick={getAllCourses}>Show Courses</button>


<table border={1} width={"500px"}>
    <thead>
        <tr>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Course Type</th>
            <th>Course Duration</th>
            <th>Course Fees</th>
        </tr>
    </thead>
    <tbody>
        {
            courses.map(course=>
            <tr>
            <td>{course.id}</td>
            <td>{course.courseName}</td>
            <td>{course.courseType}</td>
            <td>{course.courseDuration}</td>
            <td>{course.courseFees}</td>
            </tr>
            )
        }
    </tbody>
</table>
</>
}

export default ViewCourses;

