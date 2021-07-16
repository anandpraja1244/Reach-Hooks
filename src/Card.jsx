import React from 'react';
function Card(props){
    return(
      <>
  <div className="cards">
    <div card>
      <img  src={ props.imgsrc}  alt="mypic" className="card_img"></img>
   <div className="card_info">
     <sapn className="card_category">{props.sname}</sapn>
     <h3 className="card_title"> {props.title} </h3>
     <a href={props.link}  target=" _blank">
       <button>watch now</button>
     </a>
    </div>   
   </div>
   </div>
   
   
   
  </>
      
    );
  
  }
  export default Card;