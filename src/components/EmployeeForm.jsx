
import { Form, Field } from 'react-final-form';
import {States} from "../utils/States";

 const  EmployeeForm = () =>(

        <div className="employeeform">
            <p>Form</p>
            <form className='outer form'>
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
        </div>
    )

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


export default EmployeeForm;
