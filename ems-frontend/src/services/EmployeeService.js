import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (empId) => axios.get(REST_API_BASE_URL+'/'+empId);

export const updateEmployee = (empId, emp) => axios.put(REST_API_BASE_URL+'/'+empId, emp);

export const deleteEmployee = (empId) => axios.delete(REST_API_BASE_URL+'/'+empId);