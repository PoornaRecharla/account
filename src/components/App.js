import './App.css';
import './Home';
import './Reports'
import Home from './Home';
import Reports from './Reports';
import BalanceSheet from './Reports/BalanceSheet'
import SQL from './SQL/Sql'
// import Options from './Options'
// import PrivateRoute from "./PrivateRoute"
import Test from './Test' // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Display from './Display';
import CreateLedger from './Reports/CreateLedger';



const App = () => {
    // const getData = async (url) => {
    //     const newData = await fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //             'Accept': 'application/json',
    //         }
    //     })
    //     .then(res => res.json());
    //     console.log(newData);
    // }
    // getData('./api');
    return (
        <>
            <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/reports" component={Reports} />
                        <Route path="/test" component={Test} />
                        <Route path="/display" component={Display} />
                        <Route path="/bs" component={BalanceSheet} />
                        <Route path="/SQL" component={SQL} />
                        <Route path="/CreateLedger" component={CreateLedger} />
                    </Switch>
            </Router>
        </>
    );
}

export default App;