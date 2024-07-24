import { Link } from "react-router-dom";
import Datatable from "../components/Datatable";
import { useSelector } from "react-redux";

export default function EmplyoeeList() {

    return (
        <div className="ELbody">
            <h1 className="titre"> Current Employees </h1>
            <Datatable />
            <Link to="/">Home</Link>
        </div>
    )
}