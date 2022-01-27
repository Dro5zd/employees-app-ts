import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

type DataType = {
    name: string
    salary: number
    increase: boolean
}
type EmployeesListTypeProps = {
    data: Array<DataType>
}

const EmployeesList = (props:EmployeesListTypeProps) => {
    return (
        <ul className='app-list list-group'>
            <EmployeesListItem name={props.data[0].name} salary={props.data[0].salary} increase={props.data[0].increase}/>
            <EmployeesListItem name={props.data[1].name} salary={props.data[1].salary} increase={props.data[1].increase}/>
            <EmployeesListItem name={props.data[2].name} salary={props.data[2].salary} increase={props.data[2].increase}/>
        </ul>

    )
}

// const EmployeesList = () => {
//     return (
//         <ul className='app-list list-group'>
//             <EmployeesListItem name='Homer S.' salary={500} increase={true}/>
//             <EmployeesListItem name='Lisa S.' salary={5000} increase={false}/>
//             <EmployeesListItem name='Bart S.' salary={100} increase={true}/>
//         </ul>
//
//     )
// }
export default EmployeesList;