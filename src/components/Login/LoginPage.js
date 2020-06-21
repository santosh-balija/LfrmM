import React from 'react';
import classes from './LoginPage.css';
import LfrmMImg from '../../assets/images/LfrmM.png';
import Auxillary from '../../hoc/Auxillary';
import CarouselComp from './Carousel';

const loginPage = () => (
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
                    <span className={classes.yellowFont2}>rm </span>
                    <span className={classes.redFont}>Mistakes</span>
                </h1>
                <h2 style={{marginTop:'-29px'}}>
                    Oops!! It is <span className={classes.greenFont}>Learn </span>
                                 <span className={classes.yellowFont2}>from </span>
                                 <span className={classes.redFont}>Mistakes</span>
                    <p style={{color:'gray',fontWeight:'lighter',fontSize:'18px'}}>I made a mistake and corrected it. 
                    Wanna Learn from your mistakes and from others mistakes??</p>
                    <p style={{color:'#333'}}>STEP IN TO LEARN</p>
                </h2>
            </div>
            <div className={classes.rightDiv2}>
                <h2>
                    <span className={classes.yellowFont2}>Connect with </span>
                    <span className={classes.greenFont}>Learners </span>
                </h2>
                <p style={{color: 'gray', fontSize:'13px',marginTop:'-20px'}}>Login or Signup</p>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Email" />
                    <input className={classes.Input} type="email" name="email" placeholder="Password" />
                    <a className={classes.links} href="#">Forgot Password</a>
                    <button className={classes.LoginBtn}>STEP IN TO LEARN</button>
                </form>
            </div>
        </div>
    </Auxillary>
);

export default loginPage;