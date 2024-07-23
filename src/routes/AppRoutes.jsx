import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployeePage from '../pages/CreateEmployeePage';
import EmplyoeeList from '../pages/EmployeeList';


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>         
                <Route path="/" element={<CreateEmployeePage />} />
                <Route path="/employee-list" element={<EmplyoeeList />} />
            </Routes>
        </Router>
    );
}