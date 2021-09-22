import react from "react";
// import { robots } from "./robots";
import Card from "./card";

const CardList = ({robots}) =>{
    const cardComponent = robots.map((user)=>())  
    return(
        <>
            <Card name={robots[0].name} email={robots[0].email} id={robots[0].id}/>
            <Card name={robots[1].name} email={robots[1].email} id={robots[1].id}/>
            <Card name={robots[2].name} email={robots[2].email} id={robots[2].id}/>
        </>
    )
}


export default CardList