const Test = () => {
    let reports_list = {
        "Common Reports" : ["Balance Sheet", "Profit & Loss A/c", "Trial Balance", "Day Book", "Ratio Analysis", "Ledger Vouchers"],
        "Final Accounts Reports" : ["Balance Sheet", "Profit & Loss A/c", "Trial Balance", "Cash Flow", "Ratio Analysis", "Funds Flow"]
    }
    let list = []
    for (const [key, value] of Object.entries(reports_list)) {
        console.log(key)
        list.push(<li>{key}</li>)
        for (let i=0; i<value.length; i++) {
            list.push(<li>{value[i]}</li>)
            console.log(value[i])
        }
    }
    // console.log(people.map(person => ( person.name )) )
    // const listItems = reports_list.map((d) => <li key={d.name}>{d.name}</li>);
    // for (const [key, value] of Object.entries(reports_list)) {
    //     for (const i of value) {
    //         console.log(key, i);
    //     }
    // }
    return(
        <>
            <div className="list">
                { list }
            </div>
        </>
    )
}

export default Test