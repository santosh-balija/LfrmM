import React, { Component } from 'react';
import Auxillary from '../hoc/Auxillary';
import classes from './HomePage.css';
import LfrmMImg from '../assets/images/LfrmM.png';
import PostModal from './PostModal';

class HomePage extends Component {

    state={
        highlightedMenuId : 'menu_1'
    }

    menuItemClickHandler = (event) => {
        event.preventDefault();
        var selectedMenuId=event.target.id;
        if(selectedMenuId !== undefined){
            console.log(selectedMenuId);
            var control = document.getElementById(selectedMenuId);
            var previousHighlightedId = this.state.highlightedMenuId;
            var prevControl = document.getElementById(previousHighlightedId);
            if(selectedMenuId != previousHighlightedId){
                prevControl.style.color='black';
                control.style.color='green';
                this.setState({highlightedMenuId:selectedMenuId});
            }
        }
    };

    render(){
        return(
            <Auxillary>
                <div className={classes.header}>
                    <img 
                        src={LfrmMImg} 
                        alt="LfrmM Logo" 
                        style={{position:'absolute'}} />
                    <input className={classes.searchInput} type="text" name="searchInp" placeholder="Search..." />   
                    <a className={classes.logoutLink}>Logout</a> 
                    <div className={classes.container}>
                        <div className={classes.left}>
                            <a 
                                className={classes.sideMenu} 
                                href="#" 
                                id="menu_1" 
                                style={{color:'green'}}
                                onClick={this.menuItemClickHandler.bind(this)}>Home</a>
                            <a 
                                className={classes.sideMenu} 
                                href="#" 
                                id="menu_2" 
                                onClick={this.menuItemClickHandler.bind(this)}>Notifications</a>
                            <a 
                                className={classes.sideMenu} 
                                href="#" 
                                id="menu_3"
                                onClick={this.menuItemClickHandler.bind(this)} >Saved</a>
                            <a 
                                className={classes.sideMenu} 
                                href="#" 
                                id="menu_4"
                                onClick={this.menuItemClickHandler.bind(this)} >Profile</a>
                            <a 
                                className={classes.sideMenu} 
                                href="#" 
                                id="menu_5"
                                onClick={this.menuItemClickHandler.bind(this)} >Messages</a>
                        </div>
                        <div className={classes.right}></div>
                    </div>
                </div>
                <div className={classes.middle}>
                    <div className={classes.postLearning}>
                        <h3 style={{color:'gray'}}>Want to share your Learning!!</h3>
                    </div>
                </div>
            </Auxillary>

        );
    }
}

export default HomePage;