import React from 'react';
import "./Banner.css";

function Banner(content) {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-3">{content.title}</h1>
            <p className="lead">{content.subtitle}</p>
        </div>
    </div>  
  );
};

export default Banner

