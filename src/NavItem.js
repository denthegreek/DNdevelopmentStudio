import React, {useState} from 'react';
import { BiHome , BiUserCircle ,BiBriefcase } from "react-icons/bi";
import { FaYoutube , FaGithub } from "react-icons/fa";

import './App.css';



function NavItem(props){
	if(props.icon == "BiHome"){
		return (
			<BiHome className={props.class}/>
		);
	}
	else if(props.icon == "BiUserCircle"){
		return (
			<BiUserCircle  className={props.class}/>
		);
	}
	else if(props.icon == "FaYoutube"){
		return (
			<FaYoutube  className={props.class}/>
		);
	}
	else if(props.icon == "FaGithub"){
		return (
			<FaGithub  className={props.class}/>
		);
	}
	else if(props.icon == "BiBriefcase"){
		return (
			<BiBriefcase  className={props.class}/>
		);
	}
}

export default NavItem;