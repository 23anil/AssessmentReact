// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";

function Locations() {
  //   const [index, setIndex] = useState(0);

  //   const handleSelect = (selectedIndex) => {
  //     setIndex(selectedIndex);
  //   };

  return (
    <div className="location-page">
      <div className="location-page-header">
        <div className="header-logo1"></div>
        <div className="header-logo2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
            color="#707070"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </div>
      </div>
      <div className="locations-data-div">
        <div className="choose-location-text-div">
          <p className="choose-location-text">Choose Location</p>
        </div>
        <div className="locations-outer-div">
          <div className="locations-inner-div">
            <div id="demo" className="carousel slide">
              <div className="carousel-inner">
                <div className="first-page " >
                 
                 
                <div className="image-div carousel-item bangalore"> 
                  {/* <img
                    src="https://images.pexels.com/photos/18578343/pexels-photo-18578343/free-photo-of-a-woman-in-a-white-dress-and-hat-walking-through-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="placeimage"
                    className="place-image"
  />*/}
                </div> 
                {/* <div className="image-div carousel-item davangere"> */}
                  {/* <img
                    src="https://images.pexels.com/photos/18578343/pexels-photo-18578343/free-photo-of-a-woman-in-a-white-dress-and-hat-walking-through-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="placeimage"
                    className="place-image"
                  /> */}
                {/* </div> */}
                {/* <div className="image-div carousel-item tumakuru"> */}
                  {/* <img
                    src="https://images.pexels.com/photos/18578343/pexels-photo-18578343/free-photo-of-a-woman-in-a-white-dress-and-hat-walking-through-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="placeimage"
                    className="place-image"
                  /> */}
                {/* </div> */}
                
                </div>
              </div>
            </div>
            {/* previous-button */}
            <div className="previous-btn">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>
            </div>
            {/* next-button */}
            <div className="next-btn">
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
}

export default Locations;
