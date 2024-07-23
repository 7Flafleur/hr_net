import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";


export default function CreateEmployeePage() {

    const onClickSave =() =>{}

    return (
        <div className="CEbody">
            <h1>HRNet</h1>
            <Link to="/employee-list">View Current Employees </Link>
            <h2> Create  Employee</h2>
            <EmployeeForm />
            <button onClick={onClickSave}>Save</button>
        </div>
    )


}