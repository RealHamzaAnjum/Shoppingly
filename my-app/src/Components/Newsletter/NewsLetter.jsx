import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
   
    <div className="Newsletter pb-5">
        <div className=" container gx-0">
          <div className="row gx-0">
            <div className="col-md-6">
              <div className="Newsletter_col1">
                <h2>Join Us & Get Updates</h2>
                <p>Sign Up for exclusive offer,letter and news updates</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Newsletter_col2">
                <form action="">
                  <div className="form_input d-flex ">
                    <input type="email" placeholder="Enter your email" className="form_control mx-3"/>
                    <button type="submit" className="main_btn rounded-5">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default NewsLetter;
