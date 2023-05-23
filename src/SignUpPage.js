import React from 'react';
import './SignUpPage.css';
import UserTestimonial from './media/User Testimonial.svg';
import YelpCampIcon from './media/Logo.svg';

function SignUpPage() {
    return(
        <div className="sign-up-page-container">
            <div className="sign-up-left">
                <div className="sign-up-header">
                    <img src={YelpCampIcon} alt="yelp camp icon"/>
                    <div className="arrow-back-to-campgrounds">  
                        <i class="fa fa-long-arrow-left"></i>
                        <p>Back to campgrounds</p>
                    </div>
                </div>
                <div className="sign-up-left-center">
                    <h1>Start exploring camps from all around the world.</h1>
                </div>
            </div>
            <div className="sign-up-right">
                <h1 className="user-review">"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added."</h1>
                <div className="sign-up-row">
                    <img src={UserTestimonial} alt="user testimonial"/>
                    <div className="sign-up-column">
                        <h1>May Andrews</h1>
                        <p>Professional Hiker</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;