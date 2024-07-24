import {States} from "../utils/States";
import { useSelector,useDispatch } from "react-redux";
import { setError, clearError, clearAllErrors } from '../redux/ErrorMsgSlice';
import { addUser } from '../redux/UserListSlice';
import { updateField, resetForm } from '../redux/FormSlice';



 export default function  EmployeeForm () {

    const dispatch = useDispatch();
    const formData = useSelector(state => state.form.formData);
    const errors = useSelector(state => state.errors.errors);

    const validate = () => {
        let isValid = true;
        if (!formData.name) {
          dispatch(setError({ field: 'name', message: 'Name is required' }));
          isValid = false;
        } else {
          dispatch(clearError({ field: 'name' }));
        }
    
        if (!formData.email) {
          dispatch(setError({ field: 'email', message: 'Email is required' }));
          isValid = false;
        } else {
          dispatch(clearError({ field: 'email' }));
        }
    
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          dispatch(addUser(formData));
          dispatch(clearAllErrors());
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
                        <option>Human REsources</option>
                        <option>Legal</option>

                    </select>
                </label>
            </form>
        </div>)
            }

//     <Form
//     onSubmit={onSubmit}
//     validate={validate}
//     render={({ handleSubmit }) => (
//       <form onSubmit={handleSubmit}>
//         <h2>Simple Default Input</h2>
//         <div>
//           <label>First Name</label>
//           <Field name="firstName" component="input" placeholder="First Name" />
//         </div>

//         <h2>An Arbitrary Reusable Input Component</h2>
//         <div>
//           <label>Interests</label>
//           <Field name="interests" component={InterestPicker} />
//         </div>

//         <h2>Render Function</h2>
//         <Field
//           name="bio"
//           render={({ input, meta }) => (
//             <div>
//               <label>Bio</label>
//               <textarea {...input} />
//               {meta.touched && meta.error && <span>{meta.error}</span>}
//             </div>
//           )}
//         />

//         <h2>Render Function as Children</h2>
//         <Field name="phone">
//           {({ input, meta }) => (
//             <div>
//               <label>Phone</label>
//               <input type="text" {...input} placeholder="Phone" />
//               {meta.touched && meta.error && <span>{meta.error}</span>}
//             </div>
//           )}
//         </Field>

//         <button type="submit">Submit</button>
//       </form>
//     )}
//   />
// )


