import React, { useState } from 'react';
import classes from './Report.css';

const report = (props) => {
  return (
    <div className={classes.dropdown}>
      <button className={classes.reportPostBtn}>Report</button>
      <div className={classes.dropdownContent}>
        <a href='#'>
          <h5 className={classes.reportNames}>Block this post</h5>
          <h6 className={classes.reportSubheading}>This post is offensive</h6>
        </a>
        <a href='#'>
          <h5 className={classes.reportNames}>Irrelevant post</h5>
          <h6 className={classes.reportSubheading}>
            Not relevant to this community
          </h6>
        </a>
        <a href='#'>
          <h5 className={classes.reportNames}>Hide post</h5>
          <h6 className={classes.reportSubheading}>
            I don't want to see this post
          </h6>
        </a>
      </div>
    </div>
  );
};

export default report;
