import {States} from "../utils/States";
import { useSelector,useDispatch } from "react-redux";

import { addUser } from '../redux/UserListSlice';
import { updateField, resetForm } from '../redux/FormSlice';
import { useState } from "react";



 export default function  EmployeeForm () {

    const [formData ,setFormdata] = useState({
      "firstName":'',
      "lastName":"",
      "dob":'',
      "startDate":'',
      "street":'',
      "city":'',
      "state":'',
      "zipCode":'',
      "department":''
        
    })

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();


    const validate = () => {
 
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          dispatch(addUser(formData));
          dispatch(resetForm());
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateField({ field: name, value }));
      };

       return (<div className="employeeform">
            <p>Form</p>
            <form className='outer form' onSubmit={handleSubmit}>
                <label>First name: 
                    <input type="text" />
                </label>
                <label>Last name: 
                    <input type="text" />
                </label>
                <label>Date of Birth: 
                    <input type="date" /> 
                </label>
                <label>Start Date: 
                    <input type="date" /> 
                </label>

                {/* Address Section */}
                <p>Address</p>
                <label>Street: 
                    <input type="text" />
                </label>
                <label>City: 
                    <input type="text" />
                </label>
                <label>State: 
                    <select>
{                       States.map((state)=>(
<option key={state.abbreviation} value={state.name}>{state.name}</option>
                       ))
              }
                    </select>
                </label>
                <label>Zip Code: 
                    <input type="text" />
                </label>

                
                <label>Department: 
                    <select>
                      
                        <option value="dept1">Sales</option>
                        <option value="dept2">Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>

                    </select>
                </label>
                <button className="save" type="submit">Save</button>
            </form>
        </div>)
            }




