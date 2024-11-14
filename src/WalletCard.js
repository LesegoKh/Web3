import { formatEther } from 'ethers';
import React, { useState } from 'react';

const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [backgroundColor, setBackgroundColor] = useState('white'); // State for background color

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChangeHandler(result[0]);
            })
        } else {
            setErrorMessage('Install Metamask');
        }
    }

    const accountChangeHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount);
        setBackgroundColor('#d3f8e2'); // Change background color after wallet connection (you can pick any color)
    }

    const getUserBalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
        .then(balance => {
            setUserBalance(formatEther(balance));
        })
    }

    return (
        <div className='walletCard' style={{ backgroundColor: backgroundColor }}> {/* Apply background color */}
            <h4> {"Connection to Metamask using window.ethereum methods"} </h4>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            <div className='accountDisplay'>
                <h3>Address: {defaultAccount}</h3>
            </div>
            <div className='balanceDisplay'>
                <h3>Balance: {userBalance}</h3>
            </div>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>} {/* Show error if any */}
        </div>
    )
}

export default WalletCard;
