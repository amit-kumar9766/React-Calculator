import React  from 'react';

const CalcButton= (props) => {
   return (<button onClick={()=> props.buttonClick(props.content)}>{props.content}</button>)
}

export default CalcButton;