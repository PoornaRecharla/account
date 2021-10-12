const   config          = require('./dbConfig'),
        sql             = require('mssql');

        const getEmployees = async(firstName) => {
            try{
                let pool = await sql.connect(config);
                let employees = await pool.request().query(`SELECT * FROM Employee WHERE FirstName = '${firstName}'`)
                // let employees = await pool.request().query(`delete from employee where employeeid = 0`)
                console.log(employees);
                return employees;
            }
            catch(error) {
                console.log(error);
            }
        }
        const createEmployees = async(Employee) => {
            try{
                let pool = await sql.connect(config);
                // await pool.request().query(`DELETE FROM Employee WHERE FirstName = 'pam' `)
                let employees = await pool.request().query(`INSERT INTO Employee VALUES 
                (${Employee.EmployeeID},'${Employee.FirstName}', '${Employee.LastName}', ${Employee.Age}, '${Employee.Position}') `)
                console.log(employees);
                return employees;
            }
            catch(error) {
                console.log(error);
            }
        }
        
        const deleteEmployees = async(Employee) => {
            try{
                let pool = await sql.connect(config);
                const res = await pool.request().query(`DELETE FROM Employee WHERE FirstName = '${Employee.FirstName}' `)
                console.log(res)
            }
            catch(error) {
                console.log(error);
            }
        }
        
        const sqlCode = async(Code) => {
            console.log(Code);
            try{
                let pool = await sql.connect(config);
                await pool.request().query(`${Code}`)
                // await pool.request().query('${Code}')
            }
            catch(error) {
                console.log(error);
            }
        }
        
        // const sqlCode = async(sql) => {
        //     try{
        //         let pool = await sql.connect(config);
        //         let employees = await pool.request().query(sql)
        //         console.log(employees);
        //         return employees;
        //     }
        //     catch(error) {
        //         console.log(error);
        //     }
        // }
        
module.exports = {
    createEmployees,
    getEmployees,
    sqlCode,
    deleteEmployees
}
