import React from 'react';
import './PopupWindow.scss'

const PopupWindow = ({children, active, setActive}) => {
    return (
        <div 
            className={active ? "popup-window active" : "popup-window"} 
            onClick={() => setActive(false)}>
            <div 
                className={active ? "popup-window-content active" : "popup-window-content"}
                onClick={e => e.stopPropagation()}>
                    {children}
            </div>
        </div>
    )
}

export default PopupWindow