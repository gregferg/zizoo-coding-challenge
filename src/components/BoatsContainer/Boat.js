import React from 'react';
import './Boat.css';

export default function Boat(props) {
    const metadata = props.metadata.map(data => {
        return <div><span>&#x2713; </span><span className="metadata">{data}</span></div>
    })

    const stars = [1, 2, 3, 4, 5].map(num => {
        const isFullStar = props.reviews.numStars >= num ?  "full-star" : "empty-star";

        return (
            <span><svg className="star" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 53.867 53.867">
                <polygon className={isFullStar} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
            </svg></span>
        )
    });
    
   

  return (
    <div className="boat">
        <div className="img-container">
            <img className="img" src={props.imgSrc} height="225px" width="400px"></img>
            <div className="reccomended">{props.isRecommend}</div>
        </div>

        <div className="boat-information">
            <div className="section">
                <div className="boat-overview">    
                    <div className="title-container"> 
                        <p className="title h5">{props.title} </p>
                        <span className="year">{props.year}</span>
                        <p className="h7">{props.location}</p>
                    </div>

                    <div className="heart">
                    <svg width="20" height="16">
                        <path fill="none" stroke="#ee6723" strokeOpacity=".8" d="M14.86 13.187c1.4-.392 2.665-1.418 3.433-2.975 1.462-2.984.582-6.758-1.947-8.426-2.07-1.37-4.627-.89-6.31.972C8.37.91 5.806.455 3.71 1.838c-2.566 1.678-3.477 5.436-2.005 8.4.776 1.547 2.052 2.566 3.464 2.955L10.02 15l4.84-1.813z"></path>
                    </svg>
                    </div>
                </div>
                <div className="hot-container">
                    <div className="num-views-past-24">
                        <span className="hot-block">HOT</span>
                        <span className="bold">{props.numViewsPast24Hours} views </span><span>in the past 24 hours</span>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="box-information">
                    <p className="h5">{props.lengthInMeters}M</p>
                    <p className="information-title">LENGTH</p>
                </div>
                
                <div className="box-information">
                    <p className="h5">{props.numOfCabins}</p>
                    <p className="information-title">CABINS</p>
                </div>
                
                <div className="box-information">
                    <p className="h5">{props.numOfGuests}</p>
                    <p className="information-title">GUESTS</p>
                </div>
                
                <div className="box-information stars">
                    <div className="star-container">
                        {stars}
                    </div>
                    
                    <p className="information-title">{props.reviews.numOfReviews} REVIEWS</p>
                </div>
            </div>

            <div className="section information-section">
                <div className="metadata-container">
                    {metadata}
                </div>

                <div className="information">
                    <p className="information-title maybe-inline">SAIL TYPE</p>
                    <p className="information-description">{props.sailType}</p>
                </div>


                <div className="information">
                    <p className="information-title maybe-inline">FREE EXTRAS</p>
                    <p className="information-description">{props.freeExtras.join(", ")}</p>
                </div>
            </div>

            <div className="section information-section">
                <div className="rate-container">
                    <p className="information-title">FROM</p>
                    <span>EURO{props.bookingRate.cost}</span>
                    <span>{props.bookingRate.timePeriod}</span>
                </div>

                <div className="booking">
                    <p>LIGHTING BOLT DIRECT BOOKING</p>
                    <div className="trianglefeature">
                        <p>VIEW DETAILS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
