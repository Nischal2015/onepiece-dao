import { useAddress, useMetamask } from "@thirdweb-dev/react";
import "./App.css";

const App = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();

  /*
  This is the case where the user hasn't connected their wallet
  to your web app. Let them call connectWallet.
  */
  if (!address) {
    return (
      <div className='landing'>
        <h1>Welcome to OnePiece DAO</h1>
        <button className='btn-hero' onClick={connectWithMetamask}>
          Connect your Wallet
        </button>
      </div>
    );
  }
  return (
    <div className='landing'>
      <h1>Wallet Connected</h1>
      <h2>Wallet Address: {address}</h2>
    </div>
  );
};

export default App;
