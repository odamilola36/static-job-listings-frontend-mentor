import React from 'react';
// import bg_header_desktop from './images/bg_header_desktop.svg';
import items from './items';
import './App.css';

function App() {
  
  return (
    <>
      <Header />
      <Search />
      {
        items.map((element, index) => {
          console.log(index+"card");
            return <Card element={element} key={index +"card"}/>
          })    
      }
    </>
  )
}


function Card(props){
  const details = props.element;
  const toolan = [...details.Languages, ...details.tools].flat();

  return(
  <>
  {
    <div className ="card" >

      <img className="icon" src={process.env.PUBLIC_URL +  details.imgUrl} alt={details.name + "-icon"} />

      <div className="info">
        <p>
          <span>
            {details.name}
          </span>  
          {
            details.New? <span className = "newFeatured">New</span>: ""
          }
          {
            details.Featured? <span className = "newFeatured">Featured</span>: ""
          }
        </p>
        <p>
          {details.level_up}
        </p>
        <p>
          {details.lastSeen} &bull; {details.availability} &bull; {details.location}
        </p>
      </div>
      <div className = "Tags">
        {
          toolan.map(function(just, index){
            console.log(index);
            return <span key = {index}> {just}</span>
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
          <img src={process.env.PUBLIC_URL + "/images/bg_header_desktop.svg"} alt="backround imae"/>
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
