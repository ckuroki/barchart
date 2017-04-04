import React,{PropTypes} from 'react';
import './ValueEditor.css';

const ValueEditor = (props) => {
  let {title,elemValue,update,plusOne,subOne} = props;
    return (
      <span className="value-editor">
        {title} : 
        <button onClick={() => { subOne(); }}> - </button>
        <input size='4' type='text' value={elemValue} onChange={(ev) => { update(ev.target.value);}} />
        <button onClick={() => { plusOne(); }}> + </button>
      </span>
    );
};

ValueEditor.propTypes = {
  title: PropTypes.string,
  elemValue: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  plusOne: PropTypes.func,
  subOne: PropTypes.func
};

export default ValueEditor;
