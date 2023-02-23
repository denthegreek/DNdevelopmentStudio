import React, {useState, useEffect} from 'react';
import NavItem from "./NavItem.js";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Video from "./Video.js";
import Code from "./Code.js";
import Service from "./Service.js";
import './App.css';

import {AiOutlineArrowUp} from "react-icons/ai";


function App() {
  const [navButtons, setNavButtons] = useState(["activeNavItem","navItem","navItem","navItem","navItem"]);
  const [currentTab, setCurrentTab] = useState("home");
  const [currentProfileSet, setProfileSet] = useState(0);
  const [containerOffset, setOffset] = useState(0);

  const toTop = () =>{
    document.getElementById('container').scrollTop=0;
  };
  const updateOffset = event =>{
    console.log(containerOffset);
    setOffset(document.getElementById('container').scrollTop);
  }
  const changeCurrentTab = (currentTab,currentNav) =>{
    toTop();
    //This changes the current tab:
    setCurrentTab(currentTab);
    //This changes the active nav icon:
    var temp=["navItem","navItem","navItem","navItem","navItem"];
    temp[currentNav]="activeNavItem";
    setNavButtons(temp);
  }

  return (
    <div className="App">
      <div className="header-nav">
        <div style={{maxWidth : "20%", display: "flex", flexDirection: "row"}}>
          <img src="./assets/logoCircle.png" className="cornerLogo"/>
          <button onClick={() => {changeCurrentTab("home",0)}}><NavItem icon="BiHome" class={navButtons[0]}/></button>
          <button onClick={() => {changeCurrentTab("aboutme",1)}}><NavItem icon="BiUserCircle" class={navButtons[1]}/></button>
          <button onClick={() => {changeCurrentTab("youtube",2)}}><NavItem icon="FaYoutube" class={navButtons[2]} /></button>
          <button onClick={() => {changeCurrentTab("github",3)}}><NavItem icon="FaGithub" class={navButtons[3]}/></button>
          <button onClick={() => {changeCurrentTab("service",4)}}><NavItem icon="BiBriefcase" class={navButtons[4]}/></button>
          <img src="./assets/reactText.png" className="reactText"/>
          <img src="./assets/reactLogo.png" className="reactLogo"/>
        </div>
      </div>
      <div id="container" className="mainPartition" onScroll={updateOffset}>
        { currentTab == "home" && <Home onClick={changeCurrentTab}/> }
        { currentTab == "aboutme" && <Profile currentSet={0} />}
        { currentTab == "youtube" && <Video currentSet={0} />}
        { currentTab == "github" && <Code currentSet={0} />}
        { currentTab == "service" && <Service currentSet={0} />}
      </div>
      <div className="footer">
        <img  src="./assets/DNlogoLong.png" />
      </div>
      { containerOffset > 200 && <div className="backToTopBtn" onClick={() => {toTop()}}><AiOutlineArrowUp /></div> }
    </div>
  );
}

export default App;
