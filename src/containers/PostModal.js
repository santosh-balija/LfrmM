import React ,{ Component } from 'react'
import classes from './PostModal.css';

class PostModal extends Component {
    render(){
        return(
            <div className={classes.postContainer}>
                <h3>New Learning</h3>
                <div className={classes.Mistakes}>
                    <textarea id="mistakesTxtArea">

                    </textarea>
                </div>
                <div className={classes.Learnings}>
                    <textarea></textarea>
                </div>
                <div className={classes.attachments}>

                </div>
            </div>
        );
    }
}

export default PostModal;