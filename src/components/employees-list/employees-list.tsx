import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className='app-list list-group'>
            <EmployeesListItem name= 'Homer S.' salary={500} increase={true}/>
            <EmployeesListItem name= 'Lisa S.' salary= {5000} increase={false}/>
            <EmployeesListItem name= 'Bart S.' salary= {100} increase={true} />
        </ul>

)
}
export default EmployeesList;