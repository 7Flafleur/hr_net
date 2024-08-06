import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useSelector } from 'react-redux';
import { mockUsers } from '../utils/MockUsers';
import { Link } from "react-router-dom";
import { useState, useMemo } from 'react';

export default function Datatable() {
    const [filteredList, setFilteredList] = useState([]);
    const users = useSelector(state => state.userList.users);

    console.log("datatable userlist", users);
    console.log("Mock users ", mockUsers);

    const employeeList = users.length !== 0 ? users : mockUsers;
    const usingMock = users.length === 0;

    const colDef = [
        { field: "firstName", width: 150 },
        { field: "lastName", width: 150 },
        { field: "startDate", width: 130 },
        { field: "department", width: 150 },
        { field: "dob", width: 130 },
        { field: "street", width: 150 },
        { field: "city", width: 130 },
        { field: "state", width: 130 },
        { field: "zipCode", width: 110 }
    ];

    const searchList = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = employeeList.filter(employee =>
            Object.values(employee).some(value =>
                value.toString().toLowerCase().includes(searchTerm)
            )
        );
        setFilteredList(filtered);
    };

    const rowData = filteredList.length > 0 ? filteredList : employeeList;

    return (
        <div className="DTbody">
            <div className="ontopoftable">
                <p>show
                    <select className='selectshow'>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries
                </p>
                {usingMock && <span>Using mock data!</span>}
                <p>Search <input type='text' onChange={searchList}></input> </p>
            </div>
            <div className='datatable ag-theme-quartz' style={{ height: 500, width: '100%' }}>
                <AgGridReact rowData={rowData} columnDefs={colDef} />
            </div>
            <Link className="homelink" to="/">Home</Link>
        </div>
    );
}
