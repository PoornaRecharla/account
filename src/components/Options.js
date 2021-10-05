import './Options.css' // eslint-disable-next-line
import {Helmet} from "react-helmet" // eslint-disable-next-line
import { Link } from "react-router-dom";
import KeyMove from "./KeyMove";

const Options = () => {

    // KeyMove()
    return (
        <>
            <div className="options">
                <ul>
                    <li>
                        <p className="f">F2:</p> Date
                    </li>
                    <li>
                        <p className="f"><u>F2:</u></p> Period
                    </li>
                    <li>
                        <p className="f">F3:</p> Company
                    </li>
                    <li>
                        <a href="/reports"> Reports </a>
                    </li>
                    <li>
                        {/* <Link to="/">Home page</Link> */}
                        <a href="/home"> Home </a>
                        <a href="/display"> Display </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Options;