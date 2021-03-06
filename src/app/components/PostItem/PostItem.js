import React from "react";
import PropTypes from "prop-types";
import "./PostItem.css";

const PostItem = ({ img, name, description }) => {
    // To ensure that the pictures don't repeat
    const max = 1000;
    const min = 800;
    const randomWidth = Math.floor(Math.random() * (max - min) + min);
    const imgUrl = `${img}${randomWidth}/600/any`;

    return (
        <div
            style={{ backgroundImage: `url(${imgUrl})` }}
            className="wrapper-post-item col-xl-2 col-lg-4 col-md-6 col-sm-12"
        >
            <p className="post-name">{name}</p>
            <div className="wrapper-hover-info">
                <p className="hover-info">{description}</p>
                <button className="read-more">Read more</button>
            </div>
        </div>
    );
};

PostItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default PostItem;
