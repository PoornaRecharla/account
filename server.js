const express = require('express'),
    Employee = require('./dbFiles/employee'),
    dbOperation = require('./dbFiles/dbOperation')
cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let session;
let cient;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/get', async (req,res) => {
    console.log('Called get');
    const result = await dbOperation.getEmployees(req.body.name)
    res.send(result.recordset)
})

app.post('/create', async (req,res) => {
    await dbOperation.createEmployees(req.body);
    const result = await dbOperation.getEmployees(req.body.FirstName)
    console.log('Called create');
    res.send(result.recordset)
})

app.post('/delete', async (req,res) => {
    await dbOperation.deleteEmployees(req.body)
    console.log('Called delete');
})

app.post('/sql', async (req,res) => {
    const result = await dbOperation.sqlCode(req.body.name)
    console.log('Called sql');
    res.send(result.recordset)
})



app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));