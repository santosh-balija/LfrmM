import React, { Component } from 'react';
import classes from './LoginPage.css';
import LfrmMImg from '../../assets/images/LfrmM.png';
import Auxillary from '../../hoc/Auxillary';
import CarouselComp from './Carousel';
import history from './History';
import { NavLink, Redirect } from 'react-router-dom'


class LoginPage extends Component {

    loginBtnHandler=(event) => {
        //return <Redirect to ='/RegisterPage' />;
        // event.preventDefault();
        console.log("Submit");
        history.push('/RegisterPage');
    }

    render(){
        return(
            <Auxillary>
                    <div className={classes.container1}>
                        <div className={classes.leftDiv1}>
                            <img src={LfrmMImg} alt="LfrmM Logo" />
                        </div>
                        <div className={classes.rightDiv1}>                
                        </div>
                    </div>
                    <div className={classes.container3}>
                        <CarouselComp />
                    </div>
                    <div className={classes.container2}>
                        <div className={classes.dummyContainer}>

                        </div>
                        <div className={classes.leftDiv2} >
                            <br></br>
                            <h1>
                                <span className={classes.greenFontTitle}>Learn </span>
                                <sub className={classes.yellowFont1}>f</sub>
                                <span className={classes.yellowFontTitle}>rm </span>
                                <span className={classes.redFontTitle}>Mistakes</span>
                            </h1>
                            <h2 style={{marginTop:'-29px', color: '#2e3134'}}>
                                Oops!! It is <span className={classes.greenFont}>Learn </span>
                                            <span className={classes.yellowFont2}>fro{/*<span className={classes.yellowFont2}>o </span> */}m </span>
                                            <span className={classes.redFont}>Mistakes</span>
                                <p style={{color:'#2e3134',fontWeight:'lighter',fontSize:'18px'}}>We made a mistake and corrected it. 
                                Wanna Learn from others mistakes??</p>
                                <p><span className={classes.yellowFont2}>STEP IN TO </span> <span className={classes.greenFont}>LEARN</span></p>
                            </h2>
                        </div>
                        <div className={classes.rightDiv2}>
                            <h2>
                                <span className={classes.yellowFont2}>Connect with </span>
                                <span className={classes.greenFont}>Learners </span>
                            </h2>
                            <p style={{color: 'gray', fontSize:'13px',marginTop:'-20px'}}>Login or Signup</p>
                            <form onSubmit={this.loginBtnHandler}>
                                <input className={classes.Input} type="text" name="name" placeholder="Email" />
                                <input className={classes.Input} type="email" name="email" placeholder="Password" />
                                <a className={classes.links} href="#">Forgot Password</a>
                                <button 
                                    className={classes.LoginBtn} 
                                    >STEP IN TO LEARN</button>
                            </form>
                            
                            {/* <NavLink to="/RegisterPage" className={classes.LoginBtnNavLink}>STEP IN TO LEARN</NavLink> */}

                        </div>
                    </div>
                </Auxillary>
        );
    }
}

export default LoginPage;