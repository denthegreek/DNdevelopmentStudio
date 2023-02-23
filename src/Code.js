import React, {useState, useEffect} from 'react';
import NavItem from "./NavItem.js";

import { FaGithub, FaBookOpen } from "react-icons/fa";

import './Code.css';

function Code(props) {
	return (
		<div>
			<div id="bigContainer" className="bigContainer">
				<h1 id="title"><FaGithub/> GitHub Library</h1>
				<div className="linkContainer">
					<a href="https://github.com/denthegreek/stohosShootingClub" target="_blank" className="gitLink">
						<div className="linkTopSegment">
							<img src="./assets/github/stohos_logo.png"/>
						</div>
						<div className="linkBottomSegment">
							<img src="./assets/github/stohos.png" className="bottomImg" />
						</div>
					</a>
					<a href="https://github.com/denthegreek/TaskManager" target="_blank" className="gitLink">
						<div className="linkTopSegment">
							<img src="./assets/github/taskManager_logo.png"/>
						</div>
						<div className="linkBottomSegment">
							<img src="./assets/github/taskManager.png" className="bottomImg" />
						</div>
					</a>
					<a href="https://github.com/denthegreek/myWebApp" target="_blank" className="gitLink">
						<div className="linkTopSegment">
							<img src="./assets/github/thisWebSite_logo.png"/>
						</div>
						<div className="linkBottomSegment">
							<img src="./assets/github/thisWebSite.png" className="bottomImg" />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Code;