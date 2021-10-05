// eslint-disable-next-line
import {ListSearchFunction, MouseMove} from './Select'
import KeyMove from "./KeyMove";
import { Helmet } from "react-helmet"
import './Reports.css' // eslint-disable-next-line
import { useState } from "react";
import React, { useEffect } from 'react'; // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Reports = () => {
    // for mouse movement
    // MouseMove()
    useEffect(() => {
        document.title = 'Reports';
    });
    // KeyMove()
    
    function scrollAction() {
        // const currentElement = document.getElementsByClassName('selected_item')[0]  
        let x = document.getElementsByClassName("filter_list_data")[0].getBoundingClientRect().top
        const itemPos = Math.round(document.getElementsByClassName('selected_item')[0].getBoundingClientRect().top - x);
        const itemTopSpace = document.getElementsByClassName("filter_list_data")[0].clientHeight - 40; //document.getElementsByClassName("filter_list_data")[0]
        const itemBottomSpace = document.getElementsByClassName("filter_list_data")[0].clientHeight - itemPos
        if (itemPos > itemTopSpace) {
            console.log(11111)
            document.getElementsByClassName("filter_list_data")[0].scrollBy(0, (itemPos - itemTopSpace) + 5); //+ currentElement.clientHeight
        }
        if (itemPos < itemBottomSpace) {
            console.log(222222)
            document.getElementsByClassName("filter_list_data")[0].scrollBy(0, -20 + itemPos);
        }
    }


    function enter() {
        let x = 0
        let li = document.getElementsByClassName("list_item")
        let i
        for (i of li) {
            if (i.classList.contains('selected_item')) {
                console.log(x)
                // x++
                if (i.classList.contains('collapsible')) {
                    if (i.getElementsByTagName('img')[0].src === chev_up_icon) {
                        i.getElementsByTagName('img')[0].src = chev_down_icon
                        while (!(li[x+1].classList.contains('collapsible'))) {
                            li[x+1].style.display = 'block'
                            x++
                            if (x+2 > li.length) break
                        }    
                    }
                    else if (i.getElementsByTagName('img')[0].src === chev_down_icon) {
                        i.getElementsByTagName('img')[0].src = chev_up_icon
                        console.log('doin')
                        while (!(li[x+1].classList.contains('collapsible'))) {
                            li[x+1].style.display = 'none'
                            x++
                            if (x+2 > li.length) break
                        }    
                    }    
                }
                break
            }
            x ++
        }
    }

    document.addEventListener('keydown', function (event) {
        let li = document.getElementsByClassName("list_item")
        let i, x
        console.log(event.key)
        if (event.key === 'Control') {
            x = 0
            for (i of li) {
                if (i.style.display === 'block') x++
            }
            if (x === li.length) {
                for (i of li) {
                    if ( !(i.classList.contains('collapsible'))) {
                        i.style.display = 'none'
                    }
                    else {
                        i.getElementsByTagName('img')[0].src = chev_down_icon
                    }
                }
            }
            else {
                for (i of li) {
                    i.style.display = 'block'
                    if (i.classList.contains('collapsible')) {
                        i.getElementsByTagName('img')[0].src = chev_up_icon
                    }
                }
            }
        }
        if (event.key === 'ArrowDown') {
            x = 0
            for (i of li) {
                if (i.classList.contains('selected_item')) {
                    while (x + 1 < li.length) {
                        if (li[x+1].style.display !== 'none') {
                            i.classList.remove('selected_item')
                            li[x+1].classList.add('selected_item')
                            break
                        }
                        x++
                    }
                    break
                }
                x ++
            }
            const itemBottomSpace = document.getElementsByClassName("filter_list_data")[0].clientHeight - Math.round(document.getElementsByClassName('selected_item')[0].getBoundingClientRect().top - document.getElementsByClassName("filter_list_data")[0].getBoundingClientRect().top); 
            if (itemBottomSpace < 30) {
                document.getElementsByClassName("filter_list_data")[0].scrollBy(0, 20)
            }
        }
        else if (event.key === "ArrowUp") {
            x = 0
            for (i of li) {
                if (i.classList.contains('selected_item')) {
                    while (x > 0) {
                        if (li[x-1].style.display !== 'none') {
                            i.classList.remove('selected_item')
                            li[x-1].classList.add('selected_item')
                            break
                        }
                        x--
                    }
                    break
                }
                x ++
            }
            const itemPos = Math.round(document.getElementsByClassName('selected_item')[0].getBoundingClientRect().top - document.getElementsByClassName("filter_list_data")[0].getBoundingClientRect().top);
            if (itemPos < 10) {
                document.getElementsByClassName("filter_list_data")[0].scrollBy(0, -20)
            }
        }
        else if (event.key === "Enter") {
            enter()
            // x = 0
            // for (i of li) {
            //     if (i.classList.contains('selected_item')) {
            //         console.log(x)
            //         // x++
            //         if (i.classList.contains('collapsible')) {
            //             if (i.getElementsByTagName('img')[0].src === chev_up_icon) {
            //                 i.getElementsByTagName('img')[0].src = chev_down_icon
            //                 while (!(li[x+1].classList.contains('collapsible'))) {
            //                     li[x+1].style.display = 'block'
            //                     x++
            //                     if (x+2 > li.length) break
            //                 }    
            //             }
            //             else if (i.getElementsByTagName('img')[0].src === chev_down_icon) {
            //                 i.getElementsByTagName('img')[0].src = chev_up_icon
            //                 console.log('doin')
            //                 while (!(li[x+1].classList.contains('collapsible'))) {
            //                     li[x+1].style.display = 'none'
            //                     x++
            //                     if (x+2 > li.length) break
            //                 }    
            //             }    
            //         }
            //         break
            //     }
            //     x ++
            // }            
        }
        else if (event.key === "Home") {
            document.getElementsByClassName('selected_item')[0].classList.remove('selected_item')
            li[0].classList.add('selected_item')
            document.getElementsByClassName("filter_list_data")[0].scrollTo(0, 0)
        }
        else if (event.key === "End") {
            document.getElementsByClassName('selected_item')[0].classList.remove('selected_item')
            li[li.length-1].classList.add('selected_item')
            document.getElementsByClassName("filter_list_data")[0].scrollTo(0, document.getElementsByClassName("filter_list_data")[0].clientHeight)
        }
    }, false)


    const s = ' let list_items, list_item; list_items = document.getElementsByClassName("list_item"); if (list_items.length > 0) { for (list_item of list_items) { list_item.addEventListener("mousemove", function () { document.getElementsByClassName("selected_item")[0].classList.remove("selected_item"); this.classList.add("selected_item"); }) } }'

    let reports_list = {
        "Common Reports" : ["Balance Sheeet", "Profit & Loss A/c", "Cash/Bank Book", "Ratio Analysis", "Daybook", "Ledger Vouchers", "Trial Balance"],
        "Final Accounts Reports" : ["Balance Sheeet", "Profit & Loss A/c", "Ratio Analysis", "Trial Balance", "Cash Flow", "Funds Flow"],
        "Receivable & Payable Reports" : ["Bills Receivable", "Bills Payable","Ledger Outstandings", "Group Outstangings", "Ledger Payment Performance"],
        "Cash/Funds Flow Reports" : ["Cash Flow", "Funds Flow", "Cash Flow Summary", "Funds Flow Summary"],
        "Ledger Reports" : ["Ledger Vouchers", "Ledger Outstandings", "Ledger Payment Performance"],
        "Group Reports" : ["Group Vouchers", "Group Outstangings", "Group Payment Performance"],
        "Voucher Reports" : ["Day Book", "Ledger Vouchers"],
        "Registers" : ["Ledger Monthly Summary", "Sales Register", "Purchase Register", "Journal Regiser", "Debit Note Register", "Credit Note Register"]
    }
    var chev_up_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZNdDYUwDIWPBCRUwhxxHVwc3Em4DpCABCQgYRKQACPpEn5KGWE8QPYl5wW6fqFlQCbzBH6cW/n6DJwKN1HOJCElEmMESYhBIsinV0R9Chn5OEUS4rg2qcQpzwknoZ1mrU/B77ursmKnyV+otUJdxz0OWUumZWt3xkL+cpUa21HE/FEG21HX2oEKyxEQ4qGV7HN0wELeRwzTbpoYSSbzIkYz/V/horb9xgAAAABJRU5ErkJggg==";
    var chev_down_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgB7ZPBDcIwDEU/YoGOkBG6Ed2AbsCVW1foBoyAuHHLCB0hI4AtJVIIqZNUReLgJ/1L9O2vOA6gKP/AiXQjddjGRLqUTBzy8lpIBvWw10b1o2SeI2MI61Gm9964di4V3ZMCljSKM8klfosKOnyOQAqbMj6Lhvc1+B5FaGJ8o9zNW99VDFuEc4ONmJWmu4YEeKOcEOL2CInD1oJq1r+JIRMy4EeMqPz5KUe08SQdSA/SFYqiMG/2pGD1acxVzwAAAABJRU5ErkJggg==";

    let list = []
    let j = 0
    for (const [key, value] of Object.entries(reports_list)) {
        list.push( 
            <li className= { j === 0 ? 'list_item collapsible selected_item' : 'list_item collapsible'} style= {{ display: 'block' }} onClick= { enter } >
                <div>
                    {key}
                    <span className="expand-btn"> <img src={ j === 0 ? chev_down_icon : chev_up_icon} width={14} height={14} alt='' /></span>
                </div>
            </li>
        )
        j++
        for (let i=0; i<value.length; i++) {
            if (j < 2 ){
                list.push(<li className="list_item" style= {{ display: 'block' }}>{value[i]}</li>)
            }
            else {
                list.push(<li className="list_item" style={{ display:'none' }}>{value[i]}</li>)
            }
        }
        
    }
    return (
        <>
            <Helmet>
                <script>
                    {s}
                </script>
            </Helmet>
            <div className="filter_div">
                <div>
                    <div className=" filter_title_div">
                        <div className=" filter_input_box">
                        <p id="mv_title" className=" bold" style={{margin: '5px 1px'}}>Name of Report</p>
                        <input type="text" id="searchBox" autoComplete="off" autoFocus="autofocus" onBlur={({ target }) => target.focus()} onInput={() => {ListSearchFunction()}} placeholder="Search here.." title="Type in a name" style={{borderStyle: 'solid', borderColor: '#FEC530', outline: 'none'}} />
                        </div>
                        <div className=" list-header"> List of Reports
                        </div>
                    </div>
                    <div className=" filter_body_div">
                        <ul id="selectList" className=" filter_list_data">
                        {list}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reports;