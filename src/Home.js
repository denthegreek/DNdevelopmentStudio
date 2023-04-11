import React, {useState} from 'react';
import NavItem from "./NavItem.js";

import './Home.css';

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
function Home(props) {
	const toTop = () =>{
		document.getElementById('container').scrollTop=0;
	};
	const slideInto = (id) =>{
		toTop();
		document.getElementById(id).style.visibility="visible"
	    document.getElementById(id).style.top=0;
	};
	const slideOut = (id) =>{
	    document.getElementById(id).style.top="-100vh";
	    delay(1000).then(() =>
	    	document.getElementById(id).style.visibility="hidden"
		);
	};
	
	return (
		<div>
			<div id="NYpopUp" className="popUpTab">
				<div className="popUpTabBody">
					<div>
						<div className="closeBtn" onClick={() => {slideOut("NYpopUp");}}>X</div>
						<img className="popUpTabBodyCover" src="./assets/newYorkCover.jpg" />
						<img className="popUpTabBodyCoverLogo" src="./assets/statueOfLib.png"/>
						<div className="popUpTabTextContainer">
							<div className="popUpTabTextCards">
								<div>
									<h2>Me & New York</h2>
									<p>
										<br/>My base of operations is the New York Metropolitan area.
										I have been living, working, and studying, in the area since 2011.
										Frank Sinatra once sang in one of his songs the lyrics <color style={{color:"#4d0d08",fontWeight:"bold"}}>"If you can make it there, you can make it anywhere"</color>, and these words have motivated me a great deal and still drive me. 
										It is a tough and beautiful place to live a life and make a living at.
										<br/><br/>However challenging it may be, to be here and compete with its large population is worth it. There are many opportunities that one can find; thus, it is a great place to pursue a career at.
										<br/><br/>Moreover, it is a multicultural place and you have to adapt to dealing with different people every day. This is something that helps you keep your mind open and search for new answers to satisfy the different needs that everyone has.									</p>
									</div>
							</div>
							<div className="popUpTabTextCards">
								<div>
									<a href="https://www.google.com/maps/@40.7201808,-73.9848946,11z" target="_blank"><img className="popUpTabTextCardsImage" src="./assets/nyMap.png"/></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="NJITpopUp" className="popUpTab">
				<div className="popUpTabBody">
					<div>
						<div className="closeBtn" onClick={() => {slideOut("NJITpopUp");}}>X</div>
						<img className="popUpTabBodyCover" src="./assets/njitCampus.png" />
						<img className="popUpTabBodyCoverLogo" src="./assets/njitLogo.png"/>
						<div className="popUpTabTextContainer">
							<div className="popUpTabTextCards">
								<div>
									<h2>Me & New Jersey Institute of Tech</h2>
									<p>
										<br/>My studies at NJIT began, in the year 2017. 
										My area of study was Computer Science, which is a field of study that was and still is my passion.
										At NJIT, I aced all classes related to Web Development and, while studying in these classes, I realized that this is what I want to do.
										<br/><br/>NJIT is a great university, having some of the best instructors that one could possibly ask for. The classes, really, help its students to move forward and have a successful career start.
										<br/><br/>I graduated from NJIT with a <color style={{color:"#4d0d08",fontWeight:"bold"}}>Bachelor of Science in Computer Science</color> degree, in May 2021.
									</p>
									</div>
							</div>
							<div className="popUpTabTextCards">
								<div>
									<a href="https://www.google.com/maps/place/New+Jersey+Institute+of+Technology/@40.7422145,-74.1856369,15z/data=!4m6!3m5!1s0x89c2537d98c396f9:0xb97c287a2ef95f43!8m2!3d40.7423462!4d-74.1793225!16zL20vMDFwczFr" target="_blank"><img className="popUpTabTextCardsImage" src="./assets/njitMap.png"/></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="homeContainer">
				<div className="smallScreenOnly">
					<img src="./assets/myselfLogo1.png" className="homeLogo" />
				</div>
				<div className="homeItem">
					<div className="leftHandItems" onClick={() => {slideInto("NJITpopUp");}}>
						<div className="leftHandSubDivLeft"><img src="./assets/njitLogo.png"  /></div>
						<div className="leftHandSubDivRight"><img src="./assets/njitBuilding.png" className="leftHandSubDivRightImg"/></div>
					</div>
					<div className="leftHandItems" onClick={() => {slideInto("NYpopUp");}}>
						<div className="leftHandSubDivLeft"><img src="./assets/statueOfLib.png"  /></div>
						<div className="leftHandSubDivRight"><img src="./assets/nyc.png" className="leftHandSubDivRightImg"/></div>
					</div>
				</div>
				<div className="bigScreenOnly">
					<img src="./assets/myselfLogo1.png" className="homeLogo" />
				</div>
				<div className="homeItem">
					<a href="https://github.com/denthegreek?tab=repositories" target="_blank" className="squareItem"><img src="./assets/social/github.png" className="socialLink"/></a>
					<a href="https://www.youtube.com/channel/UCrXUptg1qQ9styLQZJK_zNQ" target="_blank" className="squareItem"><img src="./assets/social/youtube.png" className="socialLink"/></a>
					<a href="https://www.linkedin.com/in/dimos-nikolakopoulos" target="_blank" className="squareItem"><img src="./assets/social/linkedin.png" className="socialLink"/></a>
					<a className="squareItem" onClick={() => {props.onClick("aboutme",1);toTop();}}><img src="./assets/social/aboutMe.png" className="socialLink" /></a>
				</div>
			</div>
			<button className="servicetBtn" onClick={() => {props.onClick("service",4);toTop();}}>Do you want a new website?</button>
		</div>
	);
}

export default Home;