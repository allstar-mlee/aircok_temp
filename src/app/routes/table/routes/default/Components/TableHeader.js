import React from 'react';

function TableHeader(props) {
    return (
        <table className="w3-center w3-round-large w3-card-4" style={{width:"100%", background:"#001c58", color: '#fff'}}>
            <thead>
                <tr className="w3-padding-10">
                    <th style={{width:"16%", fontSize: "2rem"}}>구분</th>
                    <th style={{width:"12%", fontSize: "2rem"}}>초미세먼지<br/><div style={{fontSize: "1.5rem"}}>(PM2.5)</div></th>
                    <th style={{width:"12%", fontSize: "2rem"}}>미세먼지<br/><div style={{fontSize: "1.5rem"}}>(PM10)</div></th>
                    <th style={{width:"12%", fontSize: "2rem"}}>휘발성유기화합물<br/><div style={{fontSize: "1.5rem"}}>(VOCs)</div></th>
                    <th style={{width:"12%", fontSize: "2rem"}}>포름알데히드<br/><div style={{fontSize: "1.5rem"}}>(HCHO)</div></th>
                    <th style={{width:"12%", fontSize: "2rem"}}>이산화탄소<br/><div style={{fontSize: "1.5rem"}}>(C02)</div></th>
                    <th style={{width:"12%", fontSize: "2rem"}}>온도<br/><div style={{fontSize: "1.5rem"}}>(℃)</div></th>
                    <th style={{width:"12%", fontSize: "2rem"}}>습도<br/><div style={{fontSize: "1.5rem"}}>(%)</div></th>
                </tr>
            </thead>
        </table>
    );
}

export default TableHeader;