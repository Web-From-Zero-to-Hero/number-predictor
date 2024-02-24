import React from 'react';
import './PredictionArea.css';

const PredictionArea = ({predict}) => {
  const palceHolder = <p>Draw the number from 0 to 9 and click "Predict"</p>;
  const prediction = (
    <p>You have drawn: <span>{predict}</span></p>
  );

  return (
    <div className='prediction-area'>
        {predict ? prediction : palceHolder}
    </div>
  )
}

export default PredictionArea