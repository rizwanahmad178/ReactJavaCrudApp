import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();
    useEffect(()=>{
        getAllEmployees();
    },[]);


    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error =>{
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee');
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((res)=> {
            getAllEmployees();
        }).catch(err=>console.error(err));
    }

  return (
    <div className='container'>
      <h2 className='text-center'>List of all Employees</h2>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered text-center'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
            employees.map(emp=>
                <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.email}</td>
                    <td>
                        <button className='btn btn-info' onClick={()=>updateEmployee(emp.id)}>Update</button>
                        <button className='btn btn-danger' onClick={()=>removeEmployee(emp.id)}
                            style={{marginLeft:'10px'}}
                        >Delete</button>
                    </td>
                </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployee



// const dummyData = [
//     {
//         "id" : 1,
//         "firstName" : "Rizwan",
//         "lastName" : "Ahmad",
//         "email" : "rizwan@gmail.com"
//     },
//     {
//         "id" : 2,
//         "firstName" : "Ravi",
//         "lastName" : "Pal",
//         "email" : "ravi@gmail.com"
//     },
//     {
//         "id" : 3,
//         "firstName" : "Nikhil",
//         "lastName" : "Kumar",
//         "email" : "nikhil@gmail.com"
//     },
//     {
//         "id" : 4,
//         "firstName" : "Amit",
//         "lastName" : "Singh",
//         "email" : "amit@gmail.com"
//     },
//     {
//         "id" : 5,
//         "firstName" : "Abhishek",
//         "lastName" : "Singh",
//         "email" : "abhishek@gmail.com"
//     },
//     {
//         "id" : 6,
//         "firstName" : "Ankit",
//         "lastName" : "Singh",
//         "email" : "ankit@gmail.com"
//     },
// ];