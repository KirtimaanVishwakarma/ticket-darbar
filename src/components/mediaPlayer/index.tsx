import React from 'react';

const MediaPlayer = ({ videosLinks }: any) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-6'>
      {videosLinks?.map((video: any, ind: any) => (
        <div className='col-span-1' key={ind}>
          <iframe
            className="aspect-video w-full"
            src={video?.link}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen={false}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default MediaPlayer;
