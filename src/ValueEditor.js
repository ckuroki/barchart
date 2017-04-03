import React from 'react';
import './ValueEditor.css';

const ValueEditor = (props) => {
  let {title,elemValue,update,plusOne,subOne,isNumeric} = props;

    return (
      <span className="value-editor">
        {title} : 
        {isNumeric?(<button onClick={()=>{ subOne(); }}> - </button>):(<div/>)}
        <input size={(elemValue.length)?elemValue.length:2} type='text' value={elemValue} onChange={(ev)=>{ update(ev.target.value);}} />
        {isNumeric?(<button onClick={()=>{ plusOne(); }}> + </button>):(<div/>)}
      </span>
    );
}

export default ValueEditor;
