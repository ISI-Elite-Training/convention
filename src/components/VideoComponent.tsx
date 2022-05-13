import React from 'react';
import { Box } from '@/system';
// import backgroundVideo from '@/public/img/webvideo.mp4';

export const VideoComponent = () => {
  return (
    <>
      <Box css={{ zIndex: '0', width: '100%', height: '100%', position: 'relative', padding: '0', margin: '0', overflow: 'none' }}>
        <video className="web_video" playsInline autoPlay muted loop>
          <source src="https://spaces.isielite.space/assets/video/WebVideo.mp4" type="video/mp4" />
        </video>
      </Box>
    </>
  );
};

//export default VideoComponent;
