import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useSelector } from 'react-redux';

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



    const [rowData, setRowdata] = useState([
        { firstname: 'TestEmployee', lastname: '1', startdate: '01/01/2020', department: 'Human Resources', dob: '31/01/2000', street: 'Bstreet', city: 'Asity', state: 'B', zipcode: '02' },
        { firstname: 'TestEmployee', lastname: '2', startdate: '31/12/2020', department: 'Sales', dob: '01/01/2000', street: 'Astreet', city: 'Bsity', state: 'A', zipcode: '01' }
    ])

    const [colDef, setcoldef] = useState([
        { field: "firstname", width: 110 },                      //can be customized with headerName and valueGetter function
        { field: "lastname", width: 100 },
        { field: "startdate", width: 110 },                     //valueFormatter: p => p.value.toLocaleString ?
        { field: "department", width: 120 },
        { field: "dob", width: 110 },                       //valueFormatter: p => p.value.toLocaleString ?
        { field: "street", width: 120 },
        { field: "city", width: 110 },
        { field: "state", width: 110 },
        { field: "zipcode", width: 100 }                //valueFormatter: p => p.value.toLocaleString ?
    ])



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
                <p>Search <input type='text'></input> </p>
            </div>
            <div className='datatable ag-theme-quartz' style={{ height: 500}} >
                <AgGridReact rowData={rowData} columnDefs={colDef} />
            </div>
        </div>
    )
}