import React from 'react'
import logo from "../Shivamswap logo.png";
import Eth from "../eth.svg";
import { Link } from 'react-router-dom';

function Header(props) {
  const { address, isConnected, connect } = props;

  return (
    <header className="header">
      <div className="leftH">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" style={{ cursor: "pointer" }} />
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem no-hover">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
  {isConnected ? (address.slice(0, 4) + "..." + address.slice(38)) : "Connect"}
</div>
      </div>
    </header>
  )
}

export default Header;