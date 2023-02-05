import { Component } from "react";

import { youtubeService } from '../services/youtube-service'

export class VideoList extends Component {

    state = {
        videos: null
    }
    videoList

    componentDidMount() {
        this.videoList = youtubeService.renderVideos()
        this.setState({ videos: this.videoList })
    }
    
    render() {
        const { videos } = this.state
        if (videos === null) return <h2>Loading...</h2>

        return (
            <>
                <h1>Video list</h1>
                <section className="Videos-list">
                            {videos.map((video, idx) => {
                                return (
                                    <div key={video.title + idx}>
                                        <img src={video.img.url} alt="" />
                                        <h2>{video.title}</h2>
                                        <h2>{video.description}</h2>
                                        <h3>'Song votes'</h3>
                                        <button>Play</button>
                                    </div>
                                )
                            })}
                </section>
            </>
        )
    }
}