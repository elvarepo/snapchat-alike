import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux'
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
import './WebcamCapture.css';

const videaoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user", // facingMode => front camera 
}

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
 
    // const [image, setImage] = useState(null);

    const capture = useCallback(() => { // 43 mins
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc))
        history.push('/preview');
        // console.log(imageSrc,'...xxx')
        // setImage(imageSrc)
    },[webcamRef]);

    return (
        <div className='webcamCapture'>
            <Webcam
                audio={false}
                height={videaoConstraints.height}
                width={videaoConstraints.width}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videaoConstraints}
            />

            <RadioButtonUncheckedIcon
            className='webcamCapture__button'
            onClick={capture}
            fontSize='large'
            />
            {/* <img src={image} alt="" />  */}

        </div>
    )
}

export default WebcamCapture;

