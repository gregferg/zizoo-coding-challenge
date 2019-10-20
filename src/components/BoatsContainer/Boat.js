import React from 'react';
import './Boat.css';

export default function Boat(props) {
    const metadata = props.metadata.map(data => {
        return <div className="metadata">CHECKMARK{data}</div>
    })

  return (
    <div className="boat">
        <div className="img-container">
            <img className="img" imgSrc="{props.imgSrc}"></img>
            <div className="reccomended">{props.isRecommend}</div>
        </div>

        <div className="first-section">
            <div className="title">{props.title}</div>
            <div className="num-views-past-24">{props.numViewsPast24Hours}</div>
        </div>

        <div className="second-section">
            <div className="box-information">
                <p className="box-title">{props.lengthInMeters}M</p>
                <p className="box-description">LENGTH</p>
            </div>
            
            <div className="box-information">
                <p className="box-title">{props.numOfCabins}</p>
                <p className="box-description">CABINS</p>
            </div>
            
            <div className="box-information">
                <p className="box-title">{props.numOfGuests}</p>
                <p className="box-description">GUESTS</p>
            </div>
            
            <div className="box-information">
                <p className="box-title">{props.reviews.stars}</p>
                <p className="box-description">{props.reviews.numOfReviews} REVIEWS</p>
            </div>
        </div>

        <div className="third-section">
            {metadata}

            <div className="information">
                <p className="information-description">SAIL TYPE</p>
                <p className="information-title">{props.sailType}</p>
            </div>


            <div className="information">
                <p className="information-description">FREE EXTRAS</p>
                <p className="information-title">{props.freeExtras.join(", ")}</p>
            </div>
        </div>

        <div className="forth-section">
            <div className="rate-container">
                <p className="data">FROM</p>
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
  );
}
