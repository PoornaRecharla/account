// eslint-disable-next-line
import Display from "./Display";
import Gateway_of_tally from "./Gatewat_of_tally";
import { Helmet } from 'react-helmet'

const Home_right = () => {
	const script = document.createElement('script')
	script.type = 'text/javascript';
    script.async = true;
	// script.src = './Select.js'
	const s = 'let drillDownAll, drillDownElement, currentElement, box; box = document.getElementById("box"); drillDownAll = box.getElementsByTagName("li"); if (drillDownAll.length > 0) { currentElement = drillDownAll[0]; for (drillDownElement of drillDownAll) { drillDownElement.addEventListener("mousemove", function () { currentElement.classList.remove("highlightedElement"); currentElement = this; currentElement.classList.add("highlightedElement"); }) } }'
    script.innerHTML = s
	return (
        <div className="home_right">
			<Helmet>
				<script>{s}</script>
			</Helmet>
            <div className="box" id='box'>
                <Gateway_of_tally />
                {/* <Display /> */}
            </div>
        </div>
    );
}

export default Home_right;