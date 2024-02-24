import React from 'react';
import './MainField.css';
import Canvas from '../Canvas/Canvas';
import PredictionArea from '../PredictionArea/PredictionArea';
import exportAsImage from '../../utils/exportAsImage.js';
import axios from 'axios';

const MainField = () => {
    const exportRef = React.useRef();
    const [predict, setPredict] = React.useState(null);
    
    async function onPredictClicked() {
        const image = await exportAsImage(exportRef.current, "test");

        axios.post('http://localhost:8080/prediction', { image: image })
        .then(response => {
            setPredict(response.data);
        })
        .catch(error => {
            console.error('Ошибка при отправке данных на сервер:', error);
        });
    }

    return (
        <div className='main-field'>
            <span className='title'>Draw and predict</span>

            <div className='active-area'>
                <div ref={exportRef} className='canvas'>
                    <Canvas setPredict={setPredict}/>
                    <button id='predict' onClick={onPredictClicked} data-html2canvas-ignore="true">Predict</button>
                </div>
                
                <PredictionArea predict={predict}/>
            </div>
        </div>
  )
}

export default MainField;