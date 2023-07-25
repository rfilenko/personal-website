import ReactPlayer from 'react-player/youtube'

const VideoPlayer = ({ video }: { video: string }) => {
    console.log({video});
    
    return <div className="videoWrap">
        <ReactPlayer className="video" url={video} controls />
    </div>
}

export default VideoPlayer
