import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <div className="container-fluid signUpWrapper">
            <div className="container signUpContainer">
                <h2 className="subHeaderSignUp">Sign Up for Updates on Releases and Tour Dates</h2>
                <p style={ {color:'#eeeeee'} }>Or don't. Don't feel pressured. 
                    We're just a friendly, local bluegrass band who sends video jam-seshs and releases straight to your inbox. 
                    Nah, that doesn't sound worth it. 
                    Or does it? 
                    Yeah, def' so.
                    Just type in your email address below and we'll take care of the rest.
                    Keep Squirrelin'!
                </p>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="emailInput" placeholder="Email Address" />
                        <button type="submit" className="btn ticketButton">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;