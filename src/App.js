import React, { Children } from 'react';
import bg_header_desktop from './images/bg_header_desktop.svg';
import items from './items';
// import Card from './components/card'
import './App.css';

const element =  {
  "id": 1,
  "imgUrl": "../images/photosnap.svg",
  "name":"Photosnap",
  "New!": true,
  "Featured": true,
  "level_up": "Senior Frontend Developer",
  "lastSeen": "1d ago",
  "availability":"Full Time",
  "location":"USA only",
  "role": "frontend",
  "level":"Senior",
  "Languages": [
      " HTML","CSS","JavaScript"
  ],
  "tools":[            
  ]
  };

function App() {
  
  return (
    <>
      <Header />

      {
        items.map(element => {
            return <Card element={element}/>
          })    
      }
    </>
  )
}


function Card(props){

  
  return(
  <>
  {
    <div className ="card">
      <div>
        <p>
          <span>
            {props.element.name}
          </span>  
          <span>
            New!
          </span>  
          <span>
            Featured
          </span>
        </p>
        <p>
          {props.element.level_up}
        </p>
        <p>
          {props.element.lastSeen} &bull; {props.element.availability} &bull; {props.element.location}
        </p>
      </div>
      <div className = "Tags">
        {
          props.element.Languages.map(function(just, index){
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
          <img src={bg_header_desktop} alt="backround imae"/>
      </header>
  );
}
export default App;
