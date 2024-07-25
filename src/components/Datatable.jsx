import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useSelector } from 'react-redux';
import { mockUsers } from '../utils/MockUsers';
import { Link } from "react-router-dom";


import {
    useCallback,
    useMemo,
    useRef,
    useState,
    StrictMode,
} from 'react';



export default function Datatable() {

    const users = useSelector(state => state.userList.users)

    console.log("datatable userlist",users)

    console.log("Mock users ",mockUsers)

    let employeeList;

    let usingMock=false;

    if(users.length!==0)
    {
        employeeList=users
    }
    else{
        employeeList=mockUsers
        usingMock=true
    }


const rowData = employeeList;

 

    const colDef=[
        { field: "firstName", width: 150 },                      //can be customized with headerName and valueGetter function
        { field: "lastName", width: 150 },
        { field: "startDate", width: 130 },                     //valueFormatter: p => p.value.toLocaleString ?
        { field: "department", width: 150 },
        { field: "dob", width: 130 },                       //valueFormatter: p => p.value.toLocaleString ?
        { field: "street", width: 150 },
        { field: "city", width: 130 },
        { field: "state", width: 130 },
        { field: "zipCode", width: 110 }                //valueFormatter: p => p.value.toLocaleString ?
    ]


        
   



    return (
        <div className="DTbody">
            <div className="ontopoftable">
                <p>show
                    <select className='selectshow'>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>entries</p>
                    {usingMock && <span>Using mock data!</span>}
                <p>Search <input type='text'></input> </p>
            </div>
            <div className='datatable ag-
            
            theme-quartz' style={{ height: 500,width: '100%'}} >
                <AgGridReact rowData={rowData} columnDefs={colDef} />
                
            </div><Link className="homelink" to="/">Home</Link>
        </div>
    )
}