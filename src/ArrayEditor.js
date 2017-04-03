import React from 'react';

const ArrayEditor = (props) => {
  let {arr,newElem,update,canAdd} = props;
  let inputs=[];

  if (arr.length > 0 ) {
    inputs=arr.map( (elem,index) => { 
        return (<input key={`inp_${index}`} type='text' value={elem} onChange={(ev)=>{ update(ev,index);}} />);
    });

    return (
      <div>
        {inputs}
        {canAdd?(<button onClick={()=>{ newElem(); }}> + </button>):(<div/>)}
      </div>
    );
  }
}

export default ArrayEditor;
