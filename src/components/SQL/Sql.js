const SQL = () => {
  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "poorna",
    password: "poorna"
  });
  // con.connect()

  // con.connect(function (err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  // });

  // con.connect(function (err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   con.query("CREATE DATABASE mydb", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });
  // });

  return (
    <>
      <div>
        <p>this is the sql page</p>
      </div>
    </>
  )
}

export default SQL