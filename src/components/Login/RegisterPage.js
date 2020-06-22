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
                <div className={classes.NamesDiv}>
                    <input className={classes.Input} type="text" name="fname" placeholder="First Name" />    
                    <input className={classes.Input} type="text" name="lname" placeholder="Last Name" />
                </div>
                <div className={classes.EmailDiv}>
                    <input className={classes.Input} type="email" name="email" placeholder="Email" />
                    <input className={classes.Input} type="password" name="confirmPassword" placeholder="Re-Enter Password" />
                </div>
                <h2 style={{textAlign:'center'}}><span className={classes.yellowFont2}>Interests</span></h2>
                <button className={classes.interestButton}>Coding1</button>
                <button className={classes.interestButton}>Coding2</button>
                <button className={classes.interestButton}>Coding3</button>
                <button className={classes.interestButton}>Coding4</button>
            </form>
            
        </div>
    </Auxillary>
);

export default RegisterPage;