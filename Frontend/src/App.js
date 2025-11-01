import "./App.css";
import Header from "./components/Header";
import Swap from "./components/Swap";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { message } from "antd";

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector()
  });

  const handleConnect = async () => {
  if (typeof window.ethereum === 'undefined') {
    message.error(
      <span>
        MetaMask not detected!{" "}
        <a
          href="https://metamask.io/download/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1890ff' }}
        >
          Install MetaMask
        </a>
      </span>
    );
    return;
  }

  try {
    await connect();
  } catch (error) {
    console.error(error);
    message.error("Connection failed. Please try again.");
  }
};

  return (
    <div className="App">
      <Header connect={handleConnect} isConnected={isConnected} address={address} />
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap isConnected={isConnected} address={address} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
