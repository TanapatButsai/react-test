import React, { useEffect, useRef } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          // Request camera access
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
        } catch (error) {
          console.error('Error accessing the camera:', error);
          alert('Error accessing the camera: ' + error.message);
        }
      } else {
        console.error('getUserMedia is not supported by this browser.');
        alert('getUserMedia is not supported by this browser.');
      }
    };

    startCamera();
  }, []);

  return (
    <div>
      <h1>Camera Feed</h1>
      <video ref={videoRef} autoPlay muted width="720" height="560" />
    </div>
  );
};

export default CameraComponent;

