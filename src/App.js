import React , {Component} from 'react';
import './App.css'
import CalcButton from './CalcButton.js'





class App extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      result:'0'
  }
  
}

Reset=()=>{
  this.setState({
   result:'',

  })
}

number=no=>{
  const y=this.state.result
  this.setState({
     result:y==='0'?no:y+no
  })
}
    
addDot=(x)=>{
 const y=this.state.result
 //  if (this.state.result.indexOf(".") === -1)
  this.setState({
     result:y+x,
  })
}
evaluate=()=>{
  const y=this.state.result

  
  try{
    this.setState({
      result:(eval(y))
    })
  }
  catch (e){
    this.setState({
      result:"ERROR"
    })
  }
  

}
  
// componentWillMount() {
//   console.log("The component is still not mounted");
// }

// componentDidMount() {
//   console.log("The Component is rendered");
// }

render(){
  console.log("The component is being rendered");
    return (
    <div><nav class="navbar navbar-light bg-info">
    <span class="navbar-brand mb-0  text-white ml-3"><i class="fa fa-calculator" aria-hidden="true"></i> Calculator</span>
    </nav>
<div className='container2 shadow' >

    <div className='row0'>
    <input value={this.state.result}/>
    </div>
      <div className='row1'>
        <CalcButton content="1" buttonClick={this.number}></CalcButton>
        <CalcButton content="2" buttonClick={this.number}></CalcButton>
        <CalcButton content="3" buttonClick={this.number}></CalcButton>
        <CalcButton content="+" buttonClick={this.number}></CalcButton>

        {/* <button onClick={()=> this.number("1")}>1</button>
        <button onClick={()=> this.number("2")}>2</button>
        <button onClick={()=> this.number('3')}>3</button>
        <button onClick={()=> this.number('+')}>+</button> */}
      </div>
      <div className='row2'>
        <CalcButton content="4" buttonClick={this.number}></CalcButton>
        <CalcButton content="5" buttonClick={this.number}></CalcButton>
        <CalcButton content="6" buttonClick={this.number}></CalcButton>
        <CalcButton content="-" buttonClick={this.number}></CalcButton>

        {/* <button onClick={()=> this.number("4")}>4</button>
        <button onClick={()=> this.number("5")}>5</button>
        <button onClick={()=> this.number("6")}>6</button>
        <button onClick={()=> this.number('-')}>-</button> */}
      </div>
      <div className='row3'>
      <CalcButton content="7" buttonClick={this.number}></CalcButton>
        <CalcButton content="8" buttonClick={this.number}></CalcButton>
        <CalcButton content="9" buttonClick={this.number}></CalcButton>
        <CalcButton content="*" buttonClick={this.number}></CalcButton>
        {/* <button onClick={()=> this.number("7")}>7</button>
        <button onClick={()=> this.number('8')}>8</button>
        <button onClick={()=> this.number('9')}>9</button>
        <button onClick={()=> this.number('*')}>*</button> */}
      </div>
      <div className='row4'>
        <CalcButton content="0" buttonClick={this.number}></CalcButton>
        <CalcButton content="C" buttonClick={this.Reset}></CalcButton>
        <CalcButton content="." buttonClick={this.addDot}></CalcButton>
        <CalcButton content="/" buttonClick={this.number}></CalcButton>
        {/* <button onClick={()=> this.number('0')}>0</button>
        <button onClick={()=> this.Reset()}>C</button>
        <button onClick={()=> this.addDot(".")}>.</button>
        <button onClick={()=> this.number('/')}>/</button> */}
      </div>
      <div className='row4'>
      
      <button id='calculate' onClick={()=>this.evaluate()}>=</button>
      <button onClick={()=> this.number('(')}>(</button>
      <button onClick={()=> this.number(')')}>)</button>
      </div>
      
   </div>
 </div> 
  )
}
}

export default App;