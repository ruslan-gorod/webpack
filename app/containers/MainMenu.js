import React from "react";
import itemsData from "../data/itemsData.js"
import Item from "../components/Item";
import '../styles/MainMenu.scss';

export default function MainMenu(){
    const items = itemsData.map(item => <Item className="item" item={item} key={item.id}/>)
    
    return (<nav className="nav-menu">
                <ul>
                    {items}
                </ul>
            </nav>)
}