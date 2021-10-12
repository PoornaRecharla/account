import react, { useState } from "react";

const Test = () => {
    const [returnedData, setReturnedData] = useState(['hi thereee'])
    const [employee, setEmployee] = useState({EmployeeID: 0, FirstName: '', LastName: '', Age: 0, Gender: ''})
    const [SQL1, setSQL1] = useState([''])

    const setInput = (e) => {
        const {name, value} = e.target;
        console.log(value);
        if (name === 'EmployeeID' || name === 'Age') {
            setEmployee(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }));
            return;
        }
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const setSQL = async (e) => {
        const {name, value} = e.target;
        await setSQL1(value)
        console.log(SQL1)
    }

    const getData = async () => {
        // console.log(employee);
        const newData = await fetch('/get', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: employee.FirstName
            })
        })
        .then(res => res.json());
        console.log(newData);
        setReturnedData(newData[0])
    }

    const createEmployee = async () => {
        const newData = await fetch('/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                ...employee
            })
        })
        .then(res => res.json());
        console.log(newData);
        setReturnedData(newData[0])
    }

    const deleteEmployee = async () => {
        const newData = await fetch('/delete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                ...employee
            })
        })
        .then(res => res.json());
        console.log(newData);
        setReturnedData(newData[0])
    }

    const sql = async () => {
        console.log(SQL1);
        const newData = await fetch('/sql', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: SQL1
            })
        })
        .then(res => res.json());
        console.log('SQL1: ', SQL1);
        console.log(newData);
        // setReturnedData(newData[0])
    }
    
    return(
        <>
            <div className="list">
                <input type="number" name="EmployeeID" placeholder="Employee ID" onChange={setInput} />
                <input name="FirstName" placeholder="First Name" onChange={setInput} />
                <input name="LastName" placeholder="Last Name" onChange={setInput} />
                <input type="number" name="Age" placeholder="Age" onChange={setInput} />
                <input name="Position" placeholder="Position" onChange={setInput} />
                <br/>
                <button onClick= {() => getData()}> Get Data </button>
                <button onClick= {() => createEmployee()}> Create </button>
                <button onClick= {() => deleteEmployee()}> Delete </button>
                <br/>
                <p> EmployeeID: {returnedData.EmployeeID} </p>
                <p> First Name: {returnedData.FirstName} </p>
                <p> Last Name: {returnedData.LastName} </p>
                <p> Age: {returnedData.Age} </p>
                <p> Position: {returnedData.Position} </p>
                <br/>
                <input name="sql" placeholder="sql code" onChange={setSQL} />
                <button onClick= {() => sql()}> SQL Query </button>
            </div>
        </>
    )
}

export default Test

    // let reports_list = {
    //     "Common Reports" : ["Balance Sheet", "Profit & Loss A/c", "Trial Balance", "Day Book", "Ratio Analysis", "Ledger Vouchers"],
    //     "Final Accounts Reports" : ["Balance Sheet", "Profit & Loss A/c", "Trial Balance", "Cash Flow", "Ratio Analysis", "Funds Flow"]
    // }
    // let list = []
    // for (const [key, value] of Object.entries(reports_list)) {
    //     // console.log(key)
    //     list.push(<li>{key}</li>)
    //     for (let i=0; i<value.length; i++) {
    //         list.push(<li>{value[i]}</li>)
    //         // console.log(value[i])
    //     }
    // }
    // // console.log(people.map(person => ( person.name )) )
    // // const listItems = reports_list.map((d) => <li key={d.name}>{d.name}</li>);
    // // for (const [key, value] of Object.entries(reports_list)) {
    // //     for (const i of value) {
    // //         console.log(key, i);
    // //     }
    // // }
