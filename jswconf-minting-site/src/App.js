import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import nftImage from "./assets/DevBot.png";
import StartMinting from "./components/StartMinting";
import InProgressMinting from "./components/InProgressMinting";
import CompletedMinting from "./components/CompletedMinting";

// Step 1: Run the app

function App() {
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [supply, setSupply] = useState(0);
  const [hash, setHash] = useState();

  const mint = async () => {
    // Step 6: Write the mint function
    //
    // Step 9: Set the variables for progress and completed
    // setInProgress(true)
    //  await transaction.wait()
    //  setInProgress(false)
    //  setCompleted(true)
  };

  const getTotalSupply = async () => {
    // Step 5: Contract => getTotalSupply()
  };

  // Step 5: Contract => getTotalSupply()

  const login = async () => {
    // Step 2: Connect wallet (check Metamask + accounts)
    // Step 4: Wire up contract (provider, signer, NFTContract)
  };

  const getState = () => {
    if (inProgress) {
      // Step 10: Pass in the transaction hash to InProgressMinting Component and check this component
      return <InProgressMinting />;
    }

    if (completed) {
      // Step 12: Check this component
      return <CompletedMinting />;
    }

    // Step 8: Pass mint as props
    return <StartMinting />;
  };

  return (
    <div className="app">
      <Header />
      <div className="hero">
        <img src="https://images.jsworldconference.com/jsworld_stage_1a70f71469.webp" />
        <div className="overlay"></div>
        <div className="card">
          <div className="main">
            <div className="details-section">
              <div className="details-header">
                <h1> JSWorldConference's 1st NFT Collection:</h1>
              </div>
              <div className="details-description">
                <h1>DevBots</h1>
              </div>
              <div className="details-actions">
                <p> 0 / 13 minted </p>
                {/* // Step 3: Render a mint button conditionally */}
                {/* // Step 7: insert getState() */}
                <div className="button connect" onClick={login}>
                  Connect Wallet
                </div>
              </div>
            </div>
            <div className="nft-section">
              <img className="nft-image" src={nftImage} alt="image" />
            </div>
          </div>
          <div className="footer">
            <h3> Mint a NFT from JSWorldConference now!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
