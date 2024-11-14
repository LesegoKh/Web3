import './App.css';
import WalletCard from './WalletCard';

function App() {
  return (
    <><div className="App">
      <div>
        <h2>Web3 Wallet checker React.js DApp</h2>
        <h5>Created by Lesego Khunou</h5>
        <p>This App demonstrates Web3 intergration into React.js Web App, allowing an App front End to connect to the blockchain via your MetaMask wallet!</p>
      </div>
      <WalletCard />
    </div>
    <div>What is Blockchain?</div>
     
    <p>Blockchain is an immutable digital ledger that enables secure transactions across a peer-to-peer network. It records, stores and verifies data using decentralized techniques to eliminate the need for third parties, like <u>banks or governments</u>. Every transaction is recorded, then stored in a block on the blockchain. Each block is encrypted for protection and chained to the preceding block — hence, “blockchain” — establishing a code-based chronological order. This means that, without consensus of a network, data stored on a blockchain cannot be deleted or modified. These new-age databases act as a single source of truth and, among an interconnected network of computers, facilitate trustless and transparent data exchange.</p></>
  );
}

export default App;
