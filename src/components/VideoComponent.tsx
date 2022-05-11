import React from 'react';
// import backgroundVideo from '@/public/img/webvideo.mp4';

export const VideoComponent: React.FC = () => {
  return (
    <video autoPlay loop style={{ width: '100%', height: '100%' }}>
      <source src="https://spaces.isielite.space/assets/video/WebVideo.mp4" />
    </video>
  );
};

//export default VideoComponent;
