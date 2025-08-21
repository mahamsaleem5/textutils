import React, { useState } from 'react';

export default function TextForm(props) {
  
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "Success");
  };

  const handleLoClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase!", "Success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }

  const handleClearClick = () => {
    console.log("Clear text was clicked");
    setText("");
    props.showAlert("Text Clear", "Success");
  }
  const handleCopy = () => {
  console.log("I am copy");
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy to Clipboard", "Success");
};

const handleExtraSpaces = () => {
  let newText = text.split(/\s+/); // \s covers spaces, tabs, newlines
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
};



  const [text, setText] = useState(' ');
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  return (
    <>
    <div className ='container' style = {{color: props.mode==='dark'?'white':'#0b0546'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          value={text} 
          onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#0b0546'}}
          id="myBox" 
          rows="8"
        ></textarea>
      </div>
      <button 
        className="btn btn-primary mx-2" 
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button 
        className="btn btn-primary mx-2" 
        onClick={handleLoClick}
      >
        Convert to lowercase
      </button>
      <button 
        className="btn btn-primary mx-2" 
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#0b0546'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in textbox above to Preview"}</p>
    </div>
    </>
  )
}
