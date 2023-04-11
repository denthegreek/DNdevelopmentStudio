import React, {useState, useEffect} from 'react';
import NavItem from "./NavItem.js";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";

import './Video.css';

function Video(props) {

	const descriptions=[
			"This is a website for Stohos Shooting Club that I have created. There has been used Angular (which includes HTML, CSS, Typescript), NodeJS (which includes Javascript and tools such as the Nodemailer.",
			"This is a website that allows you to create tasks and keep track of their status. It has been created with Angular, NodeJS , and stores the date into a MongoDB non-relational database.",
			"This is a mock website created for one of my classes. It represents an inventory-based buying and selling system. It has been created using HTML, CSS (Vanilla and Bootstrap), Javascript, PHP, and SQL. (The database used is a phpMyAdmin.)"
		];
	const currentVideo=[
			"Stohos Shooting Club",
			"Task Manager",
			"Yfansis Garment LTD"
		];

	const changeVideo = (selection,index) => {
		document.getElementById('videoPlayer').src = selection;
		document.getElementById('description').innerHTML =descriptions[index];
		document.getElementById('title').innerHTML =currentVideo[index];
	}
	return (
		<div>
			<div className="sideBtnsPannel">
				<div className="videoBtn" onClick={() => {changeVideo("https://www.youtube.com/embed/YrigaGXr--E",0)}}><img src="./assets/projects/stohos_logo.png"/></div>
				<div className="videoBtn" onClick={() => {changeVideo("https://www.youtube.com/embed/kT4uMlV05Cw",1)}}><img src="./assets/projects/taskManager_logo.png"/></div>
				<div className="videoBtn" onClick={() => {changeVideo("https://www.youtube.com/embed/smRr8co_qEQ",2)}}><img src="./assets/projects/yfansis_logo.png"/></div>
			</div>
			<div id="grandContainer" className="greatContainer">
				<h1 id="title">{currentVideo[0]}</h1>
				<iframe id="videoPlayer" className="videoContainer" src="https://www.youtube.com/embed/YrigaGXr--E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<div className="sideDescPannel"><div><h3 style={{color : "#87a8b0"}}>Description:</h3><p id="description" style={{color : "#7ac4a5"}}>{descriptions[0]}</p></div></div>
		</div>
	);
}

export default Video;