import React from 'react';
import './VideoSection.css';
import Thumbnail from '../../../../assets/retail.jpg'

const VideoSection = () => {
  const videos = [
    {
      id: '1',
      title: 'Watch Video',
      thumbnail: Thumbnail, // Replace with actual thumbnail paths
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Replace with actual video URLs
    },
    {
      id: '2',
      title: '',
      thumbnail: Thumbnail, // Replace with actual thumbnail paths
      videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ' // Replace with actual video URLs
    }
  ];

  return (
    <div className="video-section">
      {videos.map(video => (
        <div key={video.id} className="video-thumbnail">
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <img src={video.thumbnail} alt={video.title} className="thumbnail-image" />
            <div className="play-button">
              <img src="/path/to/play-icon.png" alt="Play" /> {/* Replace with actual play button icon path */}
            </div>
            {video.title && <div className="video-title">{video.title}</div>}
          </a>
        </div>
      ))}
    </div>
  );
};

export default VideoSection;
