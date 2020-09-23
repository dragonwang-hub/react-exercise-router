import React from 'react';

const AboutUs = (props) => {
  return (
    <div className="aboutus card">
      <ul>
        <li>Company:ThoughtWorks Local</li>
        <li>Location:Xi'an</li>
      </ul>
      <p>For more information, please</p>
      <p>view our
        <button
          className="btn btn-link" 
          styles = "width: 18em;"
          onClick={()=>props.history.push('/')}
        >
          website
        </button>
      </p>
    </div>
  );
}

export default AboutUs;