import React from "react";
import Navbar from "./Navbar";
import "./Roadmap.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import line from "./line.png";

function Roadmap() {
  return (
    <>
      <div className="roadmap">
        <h1>Roadmap</h1>
        <Accordion className="accord">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>Q 1</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accord">
            <div className="roadmap_in">
              {/* <h3>Q1</h3> */}
              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 1</p>
                <li>Idea</li>
                <li>Research</li>
                <li>Team forming</li>
                <li>Website launched</li>
                <li>Social media setup</li>
              </ul>

              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 2</p>
                <li>Create NFT's</li>
                <li>NFT's List On Opensea Plateform</li>
                <li>Airdrop NFT's for early users</li>
                <li> Public NFT minting On Opensea</li>
                <li> Snapshot (Early Nft Holder's)</li>
              </ul>

              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 3</p>
                <li>Smart contract launched</li>
                <li>Create Token for Early Supporter's</li>
                <li>Second Token Airdrops</li>
                <li>Token distribution</li>
                <li>NFT's holders</li>
                <li>New User's</li>
              </ul>

              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 4</p>

                <li>Pre-sales(Total Sale = 10,000,000,000)</li>
                <li>Cap Min. $100</li>
                <li>Max. $500</li>
                <li>Token Price = 0.001$</li>
                <li>Whitelisted Sale</li>
                <li>Public Sale</li>

                <li>Token Distribution</li>
              </ul>
              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 5</p>
                <li> (List On Coinmarket Cap Coingecko) </li>
                <li>Token list on Exchange</li>
                <li>Gate.io</li>
                <li>Mexc Global</li>
                <li>L bank</li>
                <li>Hotbit</li>
                <li>OkX</li>
                <li>More Exchange Will Be Announced Soon</li>
                <img className="line" src={line} alt="" />
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accord">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>Q 2</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accord">
            <div className="roadmap_in">
              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 1</p>
                <li>Create Premium NFT's</li>
                <li>List On Opensea Second NFT</li>
                <li>
                  Airdrops Public Minting For NFT's <li></li>
                  <li>Airdrops distribution</li>
                </li>
                <li>Snapshot For Premium Nft Holder's</li>
              </ul>

              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 2</p>

                <li>Smart Contract Goverance</li>

                <li>Second Token Airdrops</li>

                <li>Airdrops Distribution </li>

                <li>Premium NFT's holder's</li>
              </ul>

              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 3</p>
                <li>Pre sale</li>
                <li>(Total Amount=1,000,000,000)</li>
                <li>Whitelisted Sale</li>
                <li>Public Sales</li>
                <li>Token Distribution</li>
              </ul>
              <ul>
                <img className="line" src={line} alt="" />
                <p>Phase 4</p>
                <li>List on Exchanges</li>

                <li>Gate Io</li>
                <li>Mexc Global</li>
                <li>L-bank</li>
                <li>Hotbit</li>
                <li>OkX</li>
                <li>Kucoin</li>
                <li>Huobi Global</li>
                <li>Binance</li>
                <li>List on Coinmarket Cap and Coingecko</li>
                <img className="line" src={line} alt="" />
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accord">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h1>Q 3</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accord">
            <div className="roadmap_in">
              <ul>
                <img className="line" src={line} alt="" />
                <p>(Game's Quarter)</p>

                <li>Idea</li>

                <li>Research</li>

                <li>Game List</li>
                <li>PVP Battle Game</li>

                <li>Multiplayer MMO Strategy game</li>
                <li>Land Based NFT Games</li>
                <li>Second PvP Game</li>

                <img className="line" src={line} alt="" />
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Roadmap;
