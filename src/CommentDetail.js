import React from 'react';
import faker from "faker";

const CommonDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatart" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Nick
                </a>
                <div className="metaData">
                    <span className="date">Today at 6:00 PM</span>
                </div>
                <div className="text">Big Bad blog post</div>
            </div>
        </div>
    );
}

export default CommonDetail;