import ListSearchFunction from './Search'
import keyMoveSetUp from './Select'
import {Helmet} from "react-helmet"

const Reports = () => {
    // keyMoveSetUp()
    // document.querySelector(".drilldown").hover(function() {
    //     document.querySelector(".highlightedElement").removeClass("highlightedElement");
    //     document.querySelector(this).classList.add("highlightedElement");
    // });
    const s = 'let drillDownAll, drillDownElement, currentElement; drillDownAll = document.getElementsByClassName("drilldown"); if (drillDownAll.length > 0) { console.log(currentElement); currentElement = drillDownAll[0]; for (drillDownElement of drillDownAll) { drillDownElement.addEventListener("mousemove", function () { currentElement.classList.remove("highlightedElement"); currentElement = this; currentElement.classList.add("highlightedElement"); }) } }'
    // const s = 'let drillDownAll, drillDownElement, currentElement; drillDownAll = document.getElementsByClassName("drilldown"); if (drillDownAll.length > 0) { currentElement = drillDownAll[0]; for (drillDownElement of drillDownAll) { drillDownElement.addEventListener("mousemove", function () { currentElement.classList.remove("highlightedElement"); currentElement = this; currentElement.classList.add("highlightedElement"); }) } }'
    return (
        <>
            <Helmet>
                <script>
                    {s}
                </script>
            </Helmet>
            <div className=" filter_div" style={{width: '50ch'}}>
                <div className=" filter_title_div">
                    <div className=" filter_input_box">
                    <p id="mv_title" className=" bold" style={{margin: '5px 1px'}}>Name of Report</p>
                    <input type="text" id="searchBox" autoComplete="off" autoFocus="autofocus" onKeyUp={(e) => {ListSearchFunction(e)}} placeholder="Search here.." title="Type in a name" style={{borderStyle: 'solid', borderColor: '#FEC530', outline: 'none'}} />
                    </div>
                    <div className=" list-header"> List of Reports
                    </div>
                    <div> &nbsp;
                    </div>
                </div>
                <div className=" filter_body_div">
                    <ul id="selectList" className=" filter_list_data">
                    <li className="drilldown collapsible highlightedElement" xy-crd="339,159">
                        <div className=" desktop_style bold" style={{padding: '0.5ch'}}> Common Reports
                        <span className=" explode-btn exploded"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==" width={14} height={14} /> </span>
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,182" value="Balance Sheet">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Balance Sheet
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className=" drilldown groupelement" xy-crd="339,205" value="Profit and Loss">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Profit &amp; Loss A/c
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,228" value="Bank Group Summary">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Cash/Bank Book
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,251" value="Ratio Analysis">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Ratio Analysis
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,274" value="Day Book">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Day Book
                        </div>
                    </li>
                    <li onClick="drillDown (this, 1)" className="drilldown groupelement" xy-crd="339,297" value="Monthly Ledger Extract Browser">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Ledger Vouchers
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,320" value="Trial Balance">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Trial Balance
                        </div>
                    </li>
                    <li className="drilldown collapsible" xy-crd="339,711">
                        <div className=" desktop_style bold" style={{padding: '0.5ch'}}> Final Accounts
                        Reports
                        <span className="explode-btn exploded"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==" width={14} height={14} /> </span>
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,734" style={{display: 'none'}} value="Balance Sheet">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Balance Sheet
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,757" style={{display: 'none'}} value="Profit and Loss">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Profit &amp; Loss A/c
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,780" style={{display: 'none'}} value="Ratio Analysis">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Ratio Analysis
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,803" style={{display: 'none'}} value="Trial Balance">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Trial Balance
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,826" style={{display: 'none'}} value="Cash Flow">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Cash Flow
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,849" style={{display: 'none'}} value="Funds Flow">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Funds Flow
                        </div>
                    </li>
                    <li className="drilldown collapsible" xy-crd="339,1148">
                        <div className=" desktop_style bold" style={{padding: '0.5ch'}}> Receivable &amp;
                        Payable Reports
                        <span className="explode-btn exploded"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==" width={14} height={14} /> </span>
                        </div>
                    </li>
                    <li onClick="drillDown (this, 1)" className="drilldown groupelement" xy-crd="339,1171" style={{display: 'none'}} value="Goto Ledger Payment Performance">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Ledger Payment Performance
                        </div>
                    </li>
                    <li className="drilldown collapsible" xy-crd="339,1194">
                        <div className=" desktop_style bold" style={{padding: '0.5ch'}}> Cash/Fund Flow
                        Reports
                        <span className="explode-btn exploded"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==" width={14} height={14} /> </span>
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1217" style={{display: 'none'}} value="Cash Flow">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Cash Flow
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1240" style={{display: 'none'}} value="Funds Flow">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Funds Flow
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1263" style={{display: 'none'}} value="Cash Flow Breakup">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Cash Flow Summary
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1286" style={{display: 'none'}} value="Funds Flow Breakup">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Funds Flow Summary
                        </div>
                    </li>
                    <li className="drilldown collapsible" xy-crd="339,1378">
                        <div className=" desktop_style bold" style={{padding: '0.5ch'}}> Ledger Reports
                        <span className="explode-btn exploded"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==" width={14} height={14} /> </span>
                        </div>
                    </li>
                    <li onClick="drillDown (this, 1)" className="drilldown groupelement" xy-crd="339,1401" style={{display: 'none'}} value="Monthly Ledger Extract Browser">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Ledger Vouchers
                        </div>
                    </li>
                    <li onClick="drillDown (this, 1)" className="drilldown groupelement" xy-crd="339,1424" style={{display: 'none'}} value="Goto Ledger Payment Performance">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Ledger Payment Performance
                        </div>
                    </li>
                    <li className="drilldown collapsible" xy-crd="339,1539">
                        <div className=" desktop_style bold" style={{padding: '0.5ch'}}> Group Reports
                        <span className="explode-btn exploded"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==" width={14} height={14} /> </span>
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1562" style={{display: 'none'}} value="Bank Group Summary">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Cash/Bank Book
                        </div>
                    </li>
                    <li onClick="drillDown (this, 1)" className="drilldown groupelement" xy-crd="339,1585" style={{display: 'none'}} value="Goto Group Payment Performance">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Group Payment Performance
                        </div>
                    </li>
                    <li className="drilldown collapsible" xy-crd="339,1631">
                        <div className=" desktop_style bold" style={{padding: '0.5ch'}}> Voucher Reports
                        <span className="explode-btn exploded"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==" width={14} height={14} /> </span>
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1654" style={{display: 'none'}} value="Day Book">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Day Book
                        </div>
                    </li>
                    <li onClick="drillDown (this, 1)" className="drilldown groupelement" xy-crd="339,1677" style={{display: 'none'}} value="Monthly Ledger Extract Browser">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Ledger Vouchers
                        </div>
                    </li>
                    <li className="drilldown collapsible" xy-crd="339,1815">
                        <div className=" desktop_style bold" style={{padding: '0.5ch'}}> Registers
                        <span className="explode-btn exploded"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==" width={14} height={14} /> </span>
                        </div>
                    </li>
                    <li onClick="drillDown (this, 1)" className="drilldown groupelement" xy-crd="339,1838" style={{display: 'none'}} value="Goto Ledger Monthly Summary">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Ledger Monthly Summary
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1861" style={{display: 'none'}} value="Sales Register">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Sales Register
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1884" style={{display: 'none'}} value="Purchase Register">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Purchase Register
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1907" style={{display: 'none'}} value="Journal Register">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Journal Register
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1930" style={{display: 'none'}} value="Debit Note Register">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Debit Note Register
                        </div>
                    </li>
                    <li onClick="drillDown (this, 0)" className="drilldown groupelement" xy-crd="339,1953" style={{display: 'none'}} value="Credit Note Register">
                        <div className=" field desktop_style" style={{padding: '0.5ch', paddingLeft: '2ch'}}>
                        Credit Note Register
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Reports;