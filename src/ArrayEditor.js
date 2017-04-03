import React,{PropTypes} from 'react';

const ArrayEditor = (props) => {
  let {arr,newElem,update,canAdd} = props;
  let inputs=[];

  if (arr.length > 0 ) {
    inputs= arr.map((elem,index) => (<input key={`inp_${index}`} size={(elem.length)?elem.length:2} type='text' value={elem} onChange={(ev) => { update(ev,index);}} />));

    return (
      <div>
        {inputs}
        {canAdd?(<button onClick={() => { newElem(); }}> + </button>):(<div/>)}
      </div>
    );
  } else {
    return (<div/>);
  }
};

ArrayEditor.propTypes = {
  arr: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  newElem: PropTypes.func,
  canAdd: PropTypes.bool
};

export default ArrayEditor;
