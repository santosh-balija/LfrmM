import React ,{ Component } from 'react'
import classes from './PostModal.css';
import Modal from '../components/UI/Modal';

class PostModal extends Component {
    // componentDidMount(){
    //     const OnInput = (event) => {
    //         event.target.style.height = 'auto';
    //         event.target.style.height = (event.target.scrollHeight) + 'px';
    //     };
        
    //     var tx = document.getElementsByTagName('textarea');
    //     for (let i = 0; i < tx.length; i++) {
    //         tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
    //         tx[i].addEventListener("input", OnInput, false);
    //     }
    // }

    state={
        postingNewPost:true
    }
 
    componentDidUpdate(prevState) {
        // var spanComp = document.getElementById("closeSpan");
        // var modalComp = document.getElementById("postDiv");
        // console.log(spanComp);
        // spanComp.onclick = function() { 
        //     console.log("In span onclick");
        // }
        console.log("In PostModal ComponentDidMount");
        console.log(prevState);
        // if(prevState.postingNewPost != this.state.postingNewPost)
        //     this.setState({postingNewPost: !this.state.postingNewPost});

        // closeModalHandler();
    }

    closeModalHandler = () => {
        console.log("sdsds");
        this.setState({postingNewPost:false});
    }
      
    render(){

        return(
            <Modal show={this.props.postingPost && this.state.postingNewPost}>
                <div className={classes.postContainer} id="postDiv">
                    <h2 style={{borderBottom:"1px solid rgba(0,0,0,0.15)",paddingBottom:"10px",margin:"0px",paddingTop:"10px"}}>
                        <span className={classes.yellowFont2}>Post </span>
                        <span className={classes.greenFont}>Learning</span>
                    </h2>
                    <span id="closeSpan" onClick={this.closeModalHandler} className={classes.closeModalBtn}>&times;</span>
                    <div className={classes.MistakesDiv}>
                        <h4 style={{marginTop: "15px", marginBottom: "3px"}}>
                            <span className={classes.redFont}>#Mistake</span>
                        </h4>
                        <textarea 
                            id="MistakesTxtArea" 
                            rows="5" 
                            cols="60"
                            className={classes.textareaMistakes}
                            placeholder="Your Mistake"
                            autoFocus></textarea>
                        <div className={classes.attachments}></div>
                    </div>
                    <div className={classes.LearningsDiv}>
                        <h4 style={{marginTop: "15px", marginBottom: "3px"}}>
                        <span className={classes.greenFont}>#Learning</span>
                        </h4>
                        <textarea 
                            id="LearningTxtArea" 
                            rows="5" 
                            cols="60"
                            className={classes.textareaLearnings}
                            placeholder="Your Learning"></textarea>
                        <div className={classes.attachments}></div>
                    </div>
                    <div>
                        <input type="checkbox" id="anonymous" name="anonymousChkBtn" value="Anonymous" style={{marginTop:"10px"}} />
                        <label style={{color:"gray",fontSize:"13px"}}>Post as Anonymous</label>
                        <button className={classes.postBtn}>Post</button>
                    </div>
                </div>
            </Modal>

        );
    }
}

export default PostModal;