const Home_left = () => {
    return (
        <div className="home_left">
            <div className="info">
                <div className="cur_per">
                    <p className="a">Current Period</p>
                    <br></br>
                    <b>1-Apr-21 to 31-Mar-22</b>
                </div>
                <div className="cur_dt">
                    <p className="a">Current Date</p>
                    <br></br>
                    <b>Thursday, 1-Apr-2021</b>
                </div>
            </div>
            <div className="title">
                <p>Name  of the Company</p>
                <p>Date of Last Entry</p>
            </div>
            <div className="cmp_list">
                <div className="names">
                    <ul>
                        <li>Poorna_1</li>
                        <li>Poorna_2</li>
                    </ul>
                </div>
                <div className="dates">
                    <ul>
                        <li>1-Apr-2021</li>
                        <li>No Vouchers Entered</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home_left;