import React from "react";
import "./Review.css";

function Review ({review}) {
    const dayjs = require("dayjs");
    var relativeTime = require("dayjs/plugin/relativeTime");
    dayjs().format();
    dayjs.extend(relativeTime);

    return(
        <div className="review-container">
            <div className="review-container-row">
                <h1>{review.reviewer}</h1>
                <p>{dayjs(review.datePosted).fromNow()}</p>
            </div>
            <p className="review-submission">{review.submission}</p>
        </div>
    )
}

export default Review;