import React from "react";
import Navbar from "./Navbar";
import "./Tokenomics.css";
import chart from "./chart.png";

import summary from "./summary.png";

import supply2 from "./supply2.png";
function Tokenomics() {
  return (
    <>
      <h1 id="tok" style={{ color: "white", textAlign: "center" }}>
        Tokenomics
      </h1>
      <div className="tokenomics">
        <div className="chart">
          <img src={chart} alt="" />
        </div>

        <div>
          <h2 id="sum">Summary</h2>
          <img id="summary" src={summary} alt="" />

          <div className="supply">
            <img src={supply2} alt="" />
          </div>
        </div>
      </div>
      <div className="contract-details"> 
        <ul>
          <li>* Token Standard: Bep-20</li>
          <li> * Blockchain: Binance</li>
          <li> * Symbol: SLO</li>
          <li> * Total Supply: 10,000,000,000</li>
          <li> * Contact Address : <span> 0xC3C740a5d09f101E80194BFaD0B06830fdc97562</span> </li>
        </ul>
      </div>
    </>
  );
}

export default Tokenomics;
