import React from "react";
// import { robots } from "./robots";
import Card from "./card";

const CardList = ({robots}) =>{
    const cardComponent = robots.map((user,i)=>{
        return(
            <Card key={i}
            name={robots[i].name} 
            email={robots[i].email} 
            id={robots[i].id}/>
        )

    })  
    return(
        <>
            {cardComponent}
        </>
    )
}


export default CardList