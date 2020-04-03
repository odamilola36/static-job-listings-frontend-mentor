import React from 'react';
import items from './items';
import './App.css';

function App() {
  
  return (
    <>
      <Header />
     
      <div id="wrapper">
        {/* <Search /> */}
        <div id="container">
          { 
            items.map((element, index) => {
              console.log(index+"card");
                return <Card element={element} key={index +"card"}/>
              })    
          }
        </div>
      </div>      
    </>
  )
}


function Card(props){
  const details = props.element;
  const toolan = [...details.Languages, ...details.tools, details.level, details.role].flat();

  return(
  <>
  {
    <div className ="card" >

      <img src={process.env.PUBLIC_URL +  details.imgUrl} alt={details.name + "-icon"} />

      <div className ="info">
        <p className ="info-header">
          <span className ="info-name">
            {details.name}
          </span>  
          {
            details.New? <span className = "new">NEW!</span>: ""
          }
          {
            details.Featured? <span className = "Featured">FEATURED</span>: ""
          }
        </p>
        <p className ="info-level">
          {details.level_up}
        </p>
        <p className ="info-rest">
          {details.lastSeen} &bull; {details.availability} &bull; {details.location}
        </p>
      </div>
      <hr  className = "mobile rule"/>
      <div className = "tags">
          {
            toolan.map(function(just, index){
              console.log(index);
              return <span key = {index} className="tag-item"> {just}</span>
            })
          }
        </div>  
    </div>
  } 
</> 
  )
}

function Header(){
  return(
      <header>
        <img className="mobile" src={process.env.PUBLIC_URL + "/images/bg-header-mobile.svg"} alt="backround imae"/>
        <img id="desktop" src={process.env.PUBLIC_URL + "/images/bg_header_desktop.svg"} alt="backround imae"/>
      </header>
  );
}

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searcTerm: "",
    }

    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event){
    // console.log(event);
    this.setState({searcTerm: event.target.value});
  }
  render(){
    return(
      <input onChange ={this.onChange} type="text" id="seaerch_jobs" />
    )
    // console.log(this.state.searcTerm);
  }  
}
export default App;
