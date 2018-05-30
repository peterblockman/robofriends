import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ""
		}
	}
	componentDidMount(){
		fetch("http://www.json-generator.com/api/json/get/bVwMvcNtwy?indent=2")
		.then(response => response.json())
		.then(users => this.setState({ robots: users })); 
	}
	onSearchChange =(event)=>{
		this.setState({searchfield: event.target.value })//value of input into searchbox
	}
	render(){
		const { robots, searchfield} = this.state;
		//If searchfield empty => return entire robot
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})// comunicate search input and robot's list
		return !robots.length ?
		<h1 class="tc">Loading</h1>:
		(
			<div className="tc">
				<h1 className="f1">Mining Robots</h1>
				<SearchBox searchChange ={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;