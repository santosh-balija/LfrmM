import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Register.css';

const Register = () => {
    var classesForDiv=[classes.card,classes.card-4];
    return(
    <Auxillary>
        <div className={classes.registerDiv}>
            <h2>Register</h2>
            <form>
                <div className={classes.NamesDiv}>
                    <div className={classes.fnameDiv}>
                        FirstName:
                        <input className={classes.Input} type="text" name="fname" placeholder="First Name" />
                    </div>
                    <div className={classes.lnameDiv}>
                        LastName:
                        <input className={classes.Input} type="text" name="lname"  />
                    </div>
                    
                </div>
                <div className={classes.EmailDiv}>
                    <input className={classes.Input} type="email" name="email" placeholder="Email" />
                    <input className={classes.Input} type="password" name="confirmPassword" placeholder="Re-Enter Password" />
                </div>
                <br></br>
                <input className={classes.InputOrig} type="text" name="fname" placeholder="First Name" />

            </form>
        </div>
    </Auxillary>    
    );
};

export default Register;