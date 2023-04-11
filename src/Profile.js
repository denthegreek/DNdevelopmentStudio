import React, {useState, useEffect} from 'react';
import NavItem from "./NavItem.js";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineArrowUp} from "react-icons/ai";

import './Profile.css';

function Profile(props) {
	const elements=[
		["// my introduction //"],
		["./assets/dnCard.png","An effort started, in the summer of 2022, to brand my code and videos. It was a measure necessary to consistently showcase my material. Thus, ΔΝ Dev Studios came into existence. Delta Nhi is the initials of my name in Greek. (Δημοσθένης Νικολακόπουλος) My main goal is to show others pieces of my code and to give people inspiration from my own work."],
		["./assets/army.png","I served as an officer (Second Lieutenant) in the Greek Military, which is a NATO army with modern equipment. I was in charge of the Tech Department of the XXV Armored Brigade, and later on, of the IV Infantry Division. (Officer Director of Research & Computing) I commanded soldiers specialized in Server Handling and Website Deployment. Additionally, we were responsible for all IT-related maintenance and handling."],
		["./assets/njit.png","  I graduated with a Bachelors of Science degree in Computer Science, on May 2021, from NJIT. While I was still attending classes, I already had decided to follow a web developer career. Hence, I took courses towards that career path and I managed to ace most of them."],
		["// recent work experience //"],
		["./assets/armyWork.png"," Officer Director of the Brigade’s Computing Department (Second Lieutenant)","March 2021 – May 2022"],
		["./assets/oneNineAI.png"," Front-end Web Developer","August 2020 – December 2020","Newark, NJ, USA"],
		["./assets/amazon.png"," Associate","September 2019 – January 2020","Edison, NJ, USA"],
		["// personal information //"],
		["./assets/myStory.png","I was born an American Citizen; although, my parents who had Greek origins moved us back to Greece. Therefore, I was raised overseas, only to return at the age of 18, in 2011. As my parents did not ever attend college, I made entirely my own new footsteps. I studied, worked, and lived in the US until I decided to complete a term of military service in the Greek Army. (2021-2022) Afterwards, I returned to the US to continue my career."],
		["./assets/contactMe.png",""],
		["./assets/programmingSkills.png",""],
	];

	const [scroll, setScroll] = useState(1);
	var scroller=1;
	let currentSet="set1";

	const MoveToNextSet = (direction) =>{
		
		if(direction=="left"){
			setScroll(scroll-1)
			currentSet="set".concat(scroll);
		}
		else if(direction=="right"){
			setScroll(scroll+1)
			currentSet="set".concat(scroll);
		}
		else{
			console.log("WTF?");
		}
		//document.getElementById(currentSet).scrollIntoView();
	};
	useEffect(()=>{
		if(window.screen.width>=window.screen.height){
			document.getElementById("set".concat(scroll)).scrollIntoView();
		}
	});

	return (
		<div id="grandContainer" className="generalContainer">
			<div id="container" >
				{ scroll > 1 && <button className="leftArrow"  onClick={() => {MoveToNextSet("left")}}><AiOutlineDoubleLeft /></button> }
				<div id="set1" className="profileContainer">
					<div className="profileTitle">{elements[0][0]}</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[1][0]} />
						</div>
						<div className="profileItemBottom">
							{elements[1][1]}
						</div>
					</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[2][0]} />
						</div>
						<div className="profileItemBottom">
							{elements[2][1]}
						</div>
					</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[3][0]} />
						</div>
						<div className="profileItemBottom">
							{elements[3][1]}
						</div>
					</div>
				</div>
				<div id="set2" className="profileContainer">
					<div className="profileTitle">{elements[4][0]}</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[5][0]} />
						</div>
						<div className="profileItemBottomSet2">
							<h5 style={{color : "#60a5b5", marginTop :"2vh"}}>{elements[5][1]}</h5>
							<p style={{color : "#438a9c"}}>{elements[5][2]}</p>
							<p style={{color : "#87a8b0"}}>{elements[5][3]}</p>
							<br/>
							<p style={{color : "#7ac4a5"}}>Coordinating specialized personel<br/>Windows Server Administrator<br/>IT Support<br/>Bilingual Communication<br/>Web Design</p>
						</div>
					</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[6][0]} />
						</div>
						<div className="profileItemBottomSet2">
							<h5 style={{color : "#60a5b5", marginTop :"2vh"}}>{elements[6][1]}</h5>
							<p style={{color : "#438a9c"}}>{elements[6][2]}</p>
							<p style={{color : "#87a8b0"}}>{elements[6][3]}</p>
							<br/>
							<p style={{color : "#7ac4a5"}}> HTML<br/>Python<br/>Django<br/>JavaScript<br/>Red Hat Linux<br/>Shell Script </p>
						</div>
					</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[7][0]} />
						</div>
						<div className="profileItemBottomSet2">
							<h5 style={{color : "#60a5b5", marginTop :"2vh"}}>{elements[7][1]}</h5>
							<p style={{color : "#438a9c"}}>{elements[7][2]}</p>
							<p style={{color : "#87a8b0"}}>{elements[7][3]}</p>
							<br/>
							<p style={{color : "#7ac4a5"}}>Organizing inventory, as a member of a team trained to handle expensive and modern robotic technology.<br/><br/>AWS Technology </p>
						</div>
					</div>
				</div>
				<div id="set3" className="profileContainer">
					<div className="profileTitle">{elements[8][0]}</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[9][0]} />
						</div>
						<div className="profileItemBottom">
							{elements[9][1]}
						</div>
					</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[10][0]} />
						</div>
						<div className="profileItemBottom">
							<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
								<p className="para1">Surname:</p>
								<p className="para2">Dimostenis</p>
							</div>
							<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
								<p className="para1">Last Name:</p>
								<p className="para2">Nikolakopoulos</p>
							</div>
							<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
								<p className="para1">Email:</p>
								<p className="para2">dnikolas1993@yahoo.com</p>
							</div>
							<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
								<p className="para1">Mail Address:</p>
								<p className="para2">PO BOX 118, Bayonne, NJ</p>
							</div>
							<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
								<p className="para1">Home Address:</p>
								<p className="para2">17E 16th Street, Bayonne, NJ</p>
							</div>
							<p style={{color : "#87a8b0",fontSize:"60%"}}>(more information only through email)</p>
						</div>
					</div>
					<div className="profileItem">
						<div className="profileItemTop">
							<img src={elements[11][0]} />
						</div>
						<div className="profileItemBottom">
							<h5 style={{color : "#60a5b5", marginTop :"2vh"}}>LANGUAGES</h5>
							<p style={{color : "#7ac4a5"}}>HTML<br/>Javascript & Typescript<br/>PHP<br/>SQL<br/>Python</p>
							<h5 style={{color : "#60a5b5", marginTop :"2vh"}}>FRAMEWORKS</h5>
							<p style={{color : "#7ac4a5"}}>Angular<br/>React<br/>Django</p>
							<br/>
						</div>
					</div>
				</div>
			</div>
			{ scroll < 3 && <button className="rightArrow"  onClick={() => {MoveToNextSet("right")}}><AiOutlineDoubleRight /></button> }
		</div>

	);
}

export default Profile;