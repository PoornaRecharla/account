import './BalanceSheet.css'
import Numeral, { validate } from "numeral"
import { BS } from './testbs'
import React, { useEffect } from 'react'; // eslint-disable-next-line

const BalanceSheet = () => {

    useEffect(() => {
        document.title = 'Balance Sheet';
    });

    const date = '17-May-2021'
    const CmpName = "Poorna_1"

    let Assets = []
    let Liabilities = []
    let count = 0
    function BSRead(key, value, list) {
        let amount = Numeral(value[0]).format('0,0.00')
        if (count > 0) {
            list.push(
                <tr className={count != 2 ? 'bold' : '' }>
                    <td className="ledger">{ key }</td>
                    {count == 2 ? <><td className="amount1">{ amount }</td> <td className="amount2"></td></> : <><td className="amount1"></td> <td className="amount2">{ amount }</td></>}
                </tr>
            )
        }
        if (Object.entries(value[1]).length == 0) {
            return
        }
        else {
            for (const [k2, v2] of Object.entries(value[1])) {
                count ++
                BSRead(k2, v2, list)
                count --
            }
        }
    }


    // BSRead("BS", BS["BS"], 0)
    BSRead("Assets", BS["BS"][1]["Assets"], Assets)
    count = 0
    BSRead("Liabilities", BS["BS"][1]["Liabilities"], Liabilities)

    let diff = Liabilities.length - Assets.length
    if (diff > 0) {
        for (let a = 0; a < diff; a++) {
            Assets.push(<tr><td>&nbsp;</td><td></td><td></td></tr>)
        }    
    }
    else {
        for (let a = 0; a < -diff; a++) {
            Liabilities.push(<tr>&nbsp; <td></td><td></td><td></td></tr>)
        }
    }

    function getPath(obj, search) {
        for (let [key, value] of Object.entries(obj)) {
            if (key === search) {
                return [key];
            } else if (value[1] && typeof value === 'object') {
                let path = getPath(value[1], search);
                if (path) return [key, ...path];
            }
        }
    }

    let path = getPath(BS, 'Input CGST')
    console.log(path)
    // console.log(BS.BS[1].Liabilities[1].Capital[1])
    // console.log(BS[path[0]][1][path[1]][1][path[2]][1][path[3]][0])


    // function nestedObjectGetUpdate(data, field, value) {
    //     let schema = data; // a moving reference to internal objects within obj
    //     const pList = field.split('.');
    //     const len = pList.length;
    //     for (var i = 0; i < len - 1; i++) {
    //         var elem = pList[i];
    //         if (!schema[elem]) schema[elem] = {}
    //         schema = schema[elem];
    //     }
    //     if (!value) {
    //         return schema[pList[len - 1]];
    //     }
    //     schema[pList[len - 1]] = value;
    //     console.log(value)
    // }

    // console.log(nestedObjectGetUpdate(BS, 'Input CGST', 0))
    // console.log(BS)
    // let a = BS["BS"][1]
    // let b = a["Assets"]
    // console.log('b', b)
    let b = BS
    for (let a of path) {
        console.log(b[a][0])
        b[a][0] += 1
        console.log(b[a][0])
        b = b[a][1]
    }
    console.log(BS)

    function validate(array) {
        let amount = -array[0]
        if (Object.entries(array[1]).length == 0 ) {
            return 'not a group'
        }
        else {
            for (const [k2, v2] of Object.entries(array[1])) {
                amount += v2[0]
            }
        }
        return Math.round(amount) === 0
    }

    function loop(array) {
        if (Object.entries(array).length !== 0) {
            for (const [key, value] of Object.entries(array)) {
                if (value[1] !== {}) {
                    let res = validate(value)
                    if (!res) console.log(key, value)
                }
                loop(value[1])
            }
        }
        function validate(array) {
            let amount = array[0]
            if (Object.entries(array[1]).length == 0 ) {
                return true
            }
            else {
                for (const [k2, v2] of Object.entries(array[1])) {
                    amount -= v2[0]
                }
            }
            return Math.round(amount) === 0
        }
    }
    loop(BS)

    return (
        <div id="BalanceSheet">
            <table id="liabilities">
                <tr>
                    <th>Liabilities</th>
                    <th className='CmpName' colSpan='2'>{CmpName}<br /><p className='notbold'>As at 31st March 2021</p></th>
                </tr>
                { Liabilities }
                <tr>
                    <th>Total</th>
                    <th colSpan='2' style={{ paddingRight : '2ch', textAlign : 'right' }}>{ Numeral(BS["BS"][1]["Liabilities"][0]).format('0,0.00')}</th>
                </tr>
            </table>
            <table id="assets">
                <tr>
                    <th>Assets</th>
                    <th className='CmpName' colSpan='2'>{CmpName}<br /><p className='notbold'>As at 31st March 2021</p></th>
                </tr>
                { Assets }
                <tr>
                    <th>Total</th>
                    <th colSpan='2' style={{ paddingRight : '2ch', textAlign : 'right' }}>{ Numeral(BS["BS"][1]["Assets"][0]).format('0,0.00')}</th>
                </tr>
            </table>
        </div>
    )
}

export default BalanceSheet