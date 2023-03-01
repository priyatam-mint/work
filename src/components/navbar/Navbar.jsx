import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [expandOpt, setExpandOpt] = useState(false);

  const isActive = () => {
    window.scrollY>0 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.addEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id : 1,
    username : "Alex",
    isSeller : true
  }

  return (
    <div className={scroll ? "navbar scroll" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setExpandOpt(!expandOpt)}>
                <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
                <span>{currentUser?.username}</span>
                {expandOpt && <div className="options">
                    {currentUser?.isSeller && (
                    <>
                    <Link to="/mygigs" className="link">Gigs</Link>
                    <Link to="/add" className="link">Add New Gigs</Link>
                    </>
                    )}
                    <Link to="/orders" className="link">orders</Link>
                    <Link to="messages" className="link">Mesaages</Link>
                    <Link to="/" className="link">Logout</Link>
                </div>}
            </div>
          ) :
          (<>
          <span>Sign in</span>
          <button>Join</button>
          </>)
          }
        </div>
      </div>
      
      { scroll && (
        <>
        <hr />
        <div className="menu">
        <span className="link menuLink" to="/">
          Graphics & Design
        </span>
        <span className="link menuLink" to="/">
          Video & Animation
        </span>
        <span className="link menuLink" to="/">
          Writing & Translation
        </span>
        <span className="link menuLink" to="/">
          AI Services
        </span>
        <span className="link menuLink" to="/">
          Digital Marketing
        </span>
        <span className="link menuLink" to="/">
          Music & Audio
        </span>
        <span className="link menuLink" to="/">
          Programming & Tech
        </span>
        <span className="link menuLink" to="/">
          Business
        </span>
        <span className="link menuLink" to="/">
          Lifestyle
        </span>
      </div>
      <hr />
      </>
      )}
    </div>
  );
};

export default Navbar;
