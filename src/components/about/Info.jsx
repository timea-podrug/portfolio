import React from "react";


const Info = () => {
  return (
    <div className="about_info grid">

        <div className="about_box">
            <i class="uil uil-briefcase about_icon"></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">0 Years working</span>
        </div>

        <div className="about_box">
            <i class="uil uil-briefcase about_icon"></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">10+ Projects</span>
        </div>

        <div className="about_box">
            <i class="uil uil-trophy about_icon"></i>
            <h3 className="about_title">Attended</h3>
            <span className="about_subtitle">5+ Competitions</span>
        </div>
    </div>
    
  )
}
export default Info