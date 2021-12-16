import React from "react";
import itemsData from "../files/itemsData.js"
import Item from "../components/Item";

export default function MainMenu(){
    const items = itemsData.map(item => <Item className="item" item={item} key={item.id}/>)
    
    return <div>{items}</div>
}