// eslint-disable-next-line
import keyMoveSetUp from './Select' // eslint-disable-next-line
import {Helmet} from 'react-helmet'
import Home_left from './Home_left';
import "./Home.css"
import react, { useEffect } from 'react';

const Display = () => {
    // keyMoveSetUp()
    // const s = 'let drillDownAll, drillDownElement, currentElement, box; box = document.getElementById("box"); drillDownAll = box.getElementsByTagName("li"); if (drillDownAll.length > 0) { currentElement = drillDownAll[0]; for (drillDownElement of drillDownAll) { drillDownElement.addEventListener("mousemove", function () { currentElement.classList.remove("highlightedElement"); currentElement = this; currentElement.classList.add("highlightedElement"); }) } }'
    useEffect(() => {
        document.title = 'Display';
    });
    return (
        <>
            <Home_left />
            <div className="head">Dispay More Reports</div>
            {/* <Helmet>
                <script>
                    {s}
                </script>
            </Helmet> */}
            <ul id="list">
                <li className='a'>Accounting</li>
                <li><p className="h">T</p>rial Balance</li>
                <li><p className="h">D</p>aybook</li>
                <li><p className="h">C</p>ash Flow</li>
                <li><p className="h">F</p>und Flow</li>
                <br/>
                <li><p className="h">A</p>ccount Books</li>
                <li><p className="h">S</p>tatistics</li>
                <br/>
                <li className="a">Exception</li>
                <li>E<p className="h">X</p>ception Reports</li>
                <li>Analysis & <p className="h">V</p>erivication</li>
                <br/>
                <li><p className="h">Q</p>uit</li>
            </ul>
            <script>
            </script>
        </>
    );
}

export default Display;