import React from "react";

const CompletedMinting = () => {
  const viewOpenSea = () => {
    // Step 13: View your collection on Testnet OpenSea
    const url = "https://testnets.opensea.io/collection/jsworldconf-devbots";

    // Step 14: In case you DON'T SEE your collection on Testnet OpenSea
    const nftURL =
      "https://testnets.opensea.io/assets/goerli/<contractAddress>/0";

    window.open(url, "_blank");
  };

  return (
    <div className="minting-success">
      <div>All set! Your NFT has been minted.</div>
      <div className="button open-sea" onClick={viewOpenSea}>
        VIEW AT OPENSEA
      </div>
    </div>
  );
};

export default CompletedMinting;
