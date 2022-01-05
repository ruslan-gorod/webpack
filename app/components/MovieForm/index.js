import React from "react";
import './MovieForm.scss';
import myImg from '../../../public/images/header-image.jpg'

export default function MovieForm({name}) {
    return (
        <form className="form">
            <label className="name-form">{name}</label>
            <div className="form-row d-flex">
                <div className="form-col">
                    <img src={myImg} />
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" name="title" placeholder="Title" />
                </div>
                <div className="form-col">
                    <label htmlFor="rdate">RELEASE DATE</label>
                    <input type="date" className="form-control" name="rdate" />
                </div>
            </div>
            <div className="form-row d-flex">
                <div className="form-col">
                    <label htmlFor="url">Movie url</label>
                    <input type="text" className="form-control" id="url" placeholder="https://" />
                </div>
                <div className="form-col">
                    <label htmlFor="rating">RATING</label>
                    <input type="text" className="form-control" id="rating" placeholder="7.8" />
                </div>
            </div>
            <div className="form-row d-flex">
                <div className="form-col">
                    <label>Genre</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-col">
                    <label htmlFor="runtime">RUNTIME</label>
                    <input type="text" className="form-control" id="runtime" placeholder="minutes" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-col">
                    <label htmlFor="overview">OVERVIEW</label>
                    <textarea className="form-control" id="overview" placeholder="Movie description" />
                </div>
            </div>
            <div className="btns-row d-flex justify-content-end">
                <input type="submit" value="RESET" className="form-button"/>
                <input type="submit" value="SUBMIT" className="form-button"/>
            </div>
        </form>
    )
}