import './App.css';
import './Home';
import './Reports'
import Home from './Home';
import Reports from './Reports';
import BalanceSheet from './Reports/BalanceSheet'
// import Options from './Options'
// import PrivateRoute from "./PrivateRoute"
import Test from './Test' // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Display from './Display';



const App = () => {
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
                    </Switch>
            </Router>
        </>
    );
}

export default App;