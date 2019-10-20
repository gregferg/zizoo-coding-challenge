import React from 'react';
import Boat from './Boat'
import './BoatsContainer.css';

function BoatsContainer(props) {
  console.log(props)
  const boats = props.boats.map(boat => {
    return Boat(boat);
  });

  return (
    <div className="boat-container">
      {boats}
    </div>
  );
}

export default BoatsContainer;
