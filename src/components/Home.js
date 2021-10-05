import './Home.css'
import './Options'
import React, { useEffect } from 'react'; // eslint-disable-next-line
// import Create from './Create';
import Home_left from './Home_left';
import Home_right from './Home_right';

const Home = () => {
    // const list1 = ['Create', 'Alter', 'Chart of Accounts', 'Vouchers', 'Daybook', 'Balance Sheet', 'Profit and Loss Account', 'Ratio Analysis', 'Display More Reports', 'Quit']
    useEffect(() => {
        document.title = 'Home';
    });
    return (
        <>
            <div className="home">
                <Home_left />
                <Home_right />
            </div>
        </>
    );
}

export default Home;