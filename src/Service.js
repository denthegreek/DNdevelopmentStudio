import React, {useState} from 'react';
import NavItem from "./NavItem.js";

import './Service.css';
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
function Service() {
	const leftCard= [
			["Your Project Matters to Me","Your project matters to me because I will be putting effort and investing time in making it. More importantly, it is my work, and my reputation is on the line, determined by the product that I produce. I take pride in what I do and I am here to help you. If you hire my services, we are together in this for as long as our partnership lasts. My promise is to give you what you paid for, if not more. <br/><br/>I'm attempting to assist businesses, particularly small businesses, in showing up and growing. This is why I want to produce the best quality and try to keep my small business minimum price as low as possible. I come from a family that owned a small business and I understand, more than most, how important it is to have a website to show what you offer to the public."],
			["Code Ownership","After I have received the last payment, you will own the website, and you are free to do as you please with it. If you choose to let someone alter it in any way, which is your right, I will bear no responsibility and any maintenance arrangements will be nullified without return of money. How will I know that it has been altered? I keep archives of my work, so I would compare it with my archive. <br/><br/>You may have at that point acquired ownership of the code, but I also retain ownership of my own code. That means that I can recycle code that I have produced in other projects. Therefore, you should know that I retain full ownership and usage of my own code, even if you also own it, to do as you please. After all, it is your website."],
			["Pricing & Negotiating","We may negotiate prices, but there are some lines that I will not allow to be crossed. Please keep in mind that pricing has been formed with certain criteria based on the time and effort certain components need so they can be developed. The minimum price is the minimum price. I am not going to discuss cheap alternatives as they already exist here and there. I do not make quality cuts, and therefore my minimum is set where it is set. With that being said, I am willing to hear your needs and your approach and will try to keep prices as close to the minimum as possible. I want you, at the end of the process, to be satisfied both in quality and monitary terms. Therefore, I will discuss with you as much as needed to negotiate the price."],
			["Payments & Money Back","There will be a payment in advance which is half the amount that we agree that the website will cost you. This amount is not refundable; thus, if you have a change of heart, I won't be able to return it. <br/><br/>After I show you the final product and you agree that it is well made (before the deployment phase, which is the last stage), I will ask you for the rest of the amount. Only after receiving it, will I proceed with deploying your website and hand you over the code and everything related. "],
			["Maintenance Rules","The maintenance annual plan covers two (2) service rounds, one (1) every six (6) months approximately. Those service rounds include updates on content (such as the addition of images or displayed products) and fixes on misbehaving components. The service is concerned only with existing components and elements. Thus, adding new functionalities is not included in this annual plan. <br/><br/>Anyone other than me altering the code will result in nulification of the annual plan and no refund will be given to you. <br/><br/>If your aim is to add functionality, you will have to pay for the development and you will have to negotiate a price for that."]
		];
	const rigthCard= [
			["Basic Small Business Website","A small business website requires a minimum level of complexity. It cannot have login or registering mechanisms, neither can it have a connection with a database. Also, you cannot get email notifications from this website. Other features are negotiable. Less complexity means that you get a cheaper price. My promise to you is that you will get what you paid for, if not more.","1500$ minimum"],
			["Annual Maintenance","The above pricing is subject to change as the years advance and you can renew, negotiate, or stop requiring this service at any year. It is optional. What does it include? It includes two (2) major maintenance sevice rounds, one (1) in approximatly every six (6) months. Those maintenance rounds include change of content or fixes upon the existing components. If you want to add functionalities that do not already exist or require more maintance rounds, you will be needing to negotiate a price. If the website has been altered by anyone other than me, this option is not available anymore.","200$ per year"],
			["Time of Development","The time that we estimate that it will take for a standard website is six (6) months. However, you might need it to be ready in a shorter timeframe. We can discuss the option of shortening the development process. That will require me to increase my effort and fit the extra work into my schedule. If we agree that it can be done in a shorter timeframe, you will have to pay 500$ for every month under the six (6). There is a chance that some projects will be ready much sooner than six (6) months. In that case, I will give it to you when it is done and you will NOT have to pay for the shorter timeframe. You will pay extra only if you have asked, beforehand, to shorten the initial period.","500$ per month less"],
			["Deployment","This will be determined by the cost of aquiring a domain for your website and for the expenses of hosting it. I am asking for this because I will deploy it for you and that will cover the first year. Afterwards the deployment cost will become your responsibility. I will explain to you personaly how you can take care of them. I will show you the price of both domain and hosting and we will find out the details together. I will only proceed to deploy your website after we have agreed on the terms and details of the deployment.","Less than 60$ (once)"],
			["Additional Complexity"," If you need something more than the basics, such as a database connection or other complex functionality, we can work out a price. The higher the level of complexity, the more work is needed; therefore, it will be more expensive. <br/><br/> Do you want to add content by yourself? Do you want to keep records and much more without needing maintenance and keeping up with the deployment costs? <br/><br/> We can make for you a server machine and provide the programming for it.","Negotiable"]
		];
	const slideInto = (id) =>{
	    document.getElementById(id).style.top=0;
	};
	const slideOut = (id) =>{
	    document.getElementById(id).style.top="-100vh";
	};
	const contactFadeIn = () =>{
	    document.getElementById("contactPannel").style.visibility="visible";
	    document.getElementById("contactCard").style.visibility="visible";
	    document.getElementById("contactPannel").style.opacity="0.5";
	    document.getElementById("contactCard").style.opacity="1";
	    rightCardOutro();
	    leftCardOutro();
	};
	const contactFadeOut = () =>{
	    document.getElementById("contactPannel").style.opacity="0";
	    document.getElementById("contactCard").style.opacity="0";
	    delay(500).then(() =>
		    document.getElementById("contactPannel").style.visibility="hidden",
		    document.getElementById("contactCard").style.visibility="hidden"
		    );
	};
	const leftCardEntrance = (index) =>{
		document.getElementById("leftCardOverlayTitle").innerHTML=leftCard[index][0];
		document.getElementById("leftCardOverlayBody").innerHTML=leftCard[index][1];
	    document.getElementById("leftCardOverlay").style.visibility="visible";
	    document.getElementById("leftCardOverlay").style.opacity="1";
	    rightCardOutro();
	};
	const leftCardOutro = () =>{
	    document.getElementById("leftCardOverlay").style.opacity="0";
	    delay(500).then(() =>
		    document.getElementById("leftCardOverlay").style.visibility="hidden"
		    );
	};
	const rightCardEntrance = (index) =>{
		document.getElementById("rightCardOverlayTitle").innerHTML=rigthCard[index][0];
		document.getElementById("rightCardOverlayBody").innerHTML=rigthCard[index][1];
		document.getElementById("priceValue").innerHTML=rigthCard[index][2];
	    document.getElementById("rightCardOverlay").style.visibility="visible";
	    document.getElementById("rightCardOverlay").style.opacity="1";
	    leftCardOutro();
	};
	const rightCardOutro = () =>{
	    document.getElementById("rightCardOverlay").style.opacity="0";
	    delay(500).then(() =>
		    document.getElementById("rightCardOverlay").style.visibility="hidden"
		    );
	};
	
	return (
		<div>
			<div id="contactPannel" className="contactPannel" onClick={() => {contactFadeOut()}}></div>
			<div id="contactCard" className="contactInfo">
				<div className="contactInfoTop">
					<button className="closeContactBtn" onClick={() => {contactFadeOut()}}><p style={{width : "100%"}}>X</p></button>
					<img src="./assets/contactMe.png" />
				</div>
				<div className="contactInfoBottom">
					<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
						<p className="contactInfoBottomLeft">Surname:</p>
						<p className="contactInfoBottomRight">Dimostenis</p>
					</div>
					<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
						<p className="contactInfoBottomLeft">Last Name:</p>
						<p className="contactInfoBottomRight">Nikolakopoulos</p>
					</div>
					<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
						<p className="contactInfoBottomLeft">Email:</p>
						<p className="contactInfoBottomRight">dnikolas1993@yahoo.com</p>
					</div>
					<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
						<p className="contactInfoBottomLeft">Mail Address:</p>
						<p className="contactInfoBottomRight">PO BOX 118, Bayonne, NJ</p>
					</div>
					<div style={{display:"flex",flexDirection:"row",width:"100%"}}>
						<p className="contactInfoBottomLeft">Home Address:</p>
						<p className="contactInfoBottomRight">17E 16th Street, Bayonne, NJ</p>
					</div>
					<p style={{color : "#47677a",fontSize:"60%"}}>(more information only through email)</p>
				</div>
			</div>
			<div className="serviceContainer">
				<div  className="smallScreenOnly">
					<img className="serviceImage" src="./assets/meOnACircle.png" />
					<h1>How may I serve you?</h1>
					<p>Let's create, together, a website tailored for your needs.</p>
					<button className="contactBtn" onClick={() => {contactFadeIn()}}>Contact Info</button>
				</div>
				<div className="serviceCard">
					<div id="leftCardOverlay" className="cardOverlay">
						<div className="cardTitle">
							<h1 id="leftCardOverlayTitle"></h1>
							<button className="backBtn" onClick={() => {leftCardOutro()}}><p style={{width : "100%"}}>X</p></button>
						</div>
						<div id="leftCardOverlayBody" className="cardOverlayBody"></div>
					</div>
					<div className="cardTitle">
						<h1>Policies</h1>
					</div>
					<div className="cardItem" onClick={() => {leftCardEntrance(0)}}>Your Project Matters to Me</div>
					<div className="cardItem" onClick={() => {leftCardEntrance(1)}}>Code Ownership</div>
					<div className="cardItem" onClick={() => {leftCardEntrance(2)}}>Pricing & Negotiating</div>
					<div className="cardItem" onClick={() => {leftCardEntrance(3)}}>Payments & Money Back</div>
					<div className="cardItem" onClick={() => {leftCardEntrance(4)}}>Maintenance Rules</div>
				</div>
				<div  className="bigScreenOnly">
					<img className="serviceImage" src="./assets/meOnACircle.png" />
					<h1>How may I serve you?</h1>
					<p>Let's create, together, a website tailored for your needs.</p>
					<button className="contactBtn" onClick={() => {contactFadeIn()}}>Contact Info</button>
				</div>
				<div className="serviceCard">
					<div id="rightCardOverlay" className="cardOverlay">
						<div className="cardTitle">
							<h1 id="rightCardOverlayTitle"></h1>
							<button className="backBtn" onClick={() => {rightCardOutro()}}><p style={{width : "100%"}}>X</p></button>
						</div>
						<div>
							<p className="priceTag">Price:</p>
							<p className="priceValue" id="priceValue"></p>
						</div>
						<div id="rightCardOverlayBody" className="cardOverlayBody"></div>
					</div>
					<div className="cardTitle">
						<h1>Pricing Structure</h1>
					</div>
					<div className="cardItem" onClick={() => {rightCardEntrance(0)}}>Basic Small Business Website</div>
					<div className="cardItem" onClick={() => {rightCardEntrance(1)}}>Annual Maintenance</div>
					<div className="cardItem" onClick={() => {rightCardEntrance(2)}}>Time of Development</div>
					<div className="cardItem" onClick={() => {rightCardEntrance(3)}}>Deployment</div>
					<div className="cardItem" onClick={() => {rightCardEntrance(4)}}>Additional Complexity</div>
				</div>
			</div>
		</div>
	);
}

export default Service;