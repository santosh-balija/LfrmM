import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './RegisterPage.css';

const RegisterPage = () => (
    <Auxillary>
        <div className={classes.registerDiv}>
            <h2 style={{textAlign:'center'}}>
                <span className={classes.yellowFont2}>Register to </span>
                <span className={classes.greenFont}>Learn</span>
            </h2>
            <form>
                <div className={classes.namesDiv}>
                    <input className={classes.input} type="text" name="fname" placeholder="First Name" />    
                    <input className={classes.input} type="text" name="lname" placeholder="Last Name" />
                </div>
                <div className={classes.emailDiv}>
                    <input className={classes.input} type="email" name="email" placeholder="Email" />
                    <input className={classes.input} type="password" name="confirmPassword" placeholder="Re-Enter Password" />
                </div>
                <h2 style={{textAlign:'center'}}><span className={classes.yellowFont2}>Interests</span></h2>
                <div className={classes.interestsDiv}>
                    <button className={classes.interestButton}>Coding <span>&#10003;</span> </button>
                    <button className={classes.interestButton}>Algorithms <span>&#10003;</span> </button>
                    <button className={classes.interestButton}>Web Development <span>&#10003;</span> </button>
                    <button className={classes.interestButton}>Machine Learning <span>&#10003;</span> </button>
                    <button className={classes.interestButton}>Cyber Security <span>&#10003;</span> </button>
                    <button className={classes.interestButton}>Cloud Computing <span>&#10003;</span> </button>
                </div>   
                <a className={classes.anchorTag}  href="#">&#8810; step back</a>   
                <button className={classes.registerBtn} >Register</button>              
            </form>
            
        </div>
    </Auxillary>
);

export default RegisterPage;