import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { connectWallet, getCurrentWalletConnected } from "./util/interact.js";  

const Header = () => {

    const [walletAddress, setWallet] = useState("");
    const [ , setStatus] = useState("");

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
                setWallet(accounts[0]);
                setStatus("👆🏽 Write a message in the text-field above.");
            } else {
                setWallet("");
                setStatus("🦊 Connect to Metamask using the top right button.");
            }
            });
        } else {
            setStatus(
            <p>
                {" "}
                🦊{" "}
                <a href={`https://metamask.io/download.html`} rel="noreferrer" target="_blank">
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
                </a>
            </p>
            );
        }
    }

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };  
    
    useEffect(() => {
        async function fetchCurrentWatlletConnected() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
            addWalletListener();
        }
        fetchCurrentWatlletConnected();
    }, [])

    return(
        <Router>
            <header>
                <div className="header-wrapper">
                    <div className="left-nabvar">
                        <Link to="roadmap" spy={true} smooth={true} className="navbar-left-item text-capitalize">
                            roadmap
                        </Link>
                        <Link to="mission" spy={true} smooth={true} className="navbar-left-item text-capitalize">
                            Mission
                        </Link>
                        <Link to="team" spy={true} smooth={true} className="navbar-left-item text-capitalize">
                            Team
                        </Link>
                    </div>
                    <div className="right-nabvar">
                        <Link to="#" spy={true} smooth={true} className="btn rounded-pill btn-dark mint-btn">
                            Mint
                        </Link>
                        <Link href="https://twitter.com/pst_apocalypse" target="_blank" spy={true} smooth={true} className="navbar-right-item">
                            <img src="./icons/twitter.svg" alt="twitter_image" className="social-icon" />
                        </Link>
                        <Link href="https://discord.gg/z9y8BE2znv" target="_blank" spy={true} smooth={true} className="navbar-right-item">
                            <img src="./icons/discord.svg" alt="discord_image" className="social-icon" />
                        </Link>
                        <Link to="#" spy={true} smooth={true} className="navbar-right-item">
                            <img src="./icons/frame.svg" alt="frame_image" className="social-icon" />
                        </Link>
                    </div>
                </div>
                {/* <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon className="text-white" icon={faBars} />
                        </button>

                        <div id="navBar">
                            <div className="navbar-nav">
                                <Link to="gallery" spy={true} smooth={true} className="nav-link-text">
                                    Roadmap
                                </Link>
                                
                                <Link to="story" spy={true} smooth={true} className="nav-link-text">
                                    Mission
                                </Link>

                                <Link to="team" spy={true} smooth={true} className="nav-link-text">
                                    Team
                                </Link> 

                            </div>
                            
                            <div>
                                <button id="walletButton" onClick={connectWalletPressed}>
                                    {walletAddress.length > 0 ? (
                                    "Connected: " +
                                    String(walletAddress).substring(0, 6) +
                                    "..." +
                                    String(walletAddress).substring(38)
                                    ) : (
                                    <span>Mint</span>
                                    )}
                                </button>
                            </div>

                        </div>
                    </nav>
                </div> */}
            </header>
        </Router>
    );
}

export default Header;