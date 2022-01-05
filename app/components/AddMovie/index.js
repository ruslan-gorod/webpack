import React from "react";
import PopupWindow from '../PopupWindow/PopupWindow';
import MovieForm from "../MovieForm";

export default function AddMovie({ popupActive, setPopupActive }) {
    return (
        <PopupWindow active={popupActive} setActive={setPopupActive}>
            <MovieForm name="Add movie"/>
        </PopupWindow>
    )
}