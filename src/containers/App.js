import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

import { setSearchField } from '../actions';
// mapStateToProps tells what state we need to listen to and pass down
// as a prop
const mapStateToProps = state => {
	return {
		searchField: state.searchField
		// state come from actions.js
	}
}
// dispatch trigger the action, send action to reducer
//tell me what prop we need to listen to that are actions need to dispatch
const mapDispatchToProps = (dispatch) =>{
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	// receive an event which dispatch the setSearchField action which
	// listen to 
	}
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            // searchfield: ''
            //  Redux replace state in app so searchfield is nolonger needed
        }
    }

    componentDidMount() {
        
        fetch("http://www.json-generator.com/api/json/get/bVwMvcNtwy?indent=2")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // this also is not needed cause it is prop passed down from
    // mapDispatchToProps
    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value }) //value of input into searchbox
    // } 
    //onSearchChange is just a ramdon name, everytime input changes, trigger the function
    // it connect to Searchbox, because we pass onSearchChange to SB


    render() {
        // const { robots, searchfield } = this.state;
        //onSearchChange is nolonger from state but props
        const{ robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        //If searchfield empty => return entire robot
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }) // comunicate search input and robot's list
        return !robots.length ?
            <h1 className = "tc"> Loading </h1>:
            ( 
            	<div className = "tc" >
                <h1 className = "f1" > Mining Robots </h1> 
                <SearchBox searchChange = { onSearchChange }/> 
                <Scroll >
                <CardList robots = { filteredRobots }/> </Scroll> 
                </div>
             );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);