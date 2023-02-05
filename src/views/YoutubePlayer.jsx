import { useState } from "react";

import { youtubeService } from "../services/youtube-service";

import { MainVideo } from "../cmps/main-video";
import { SearchBar } from "../cmps/search-bar";
import { VideoList } from "../cmps/video-list ";

export function YoutubePlayer() {
    const [currVideo, setCurrVideo] = useState(youtubeService.renderVideos()[0])

    function changeVideo(id) {
        setCurrVideo(id)

    }

    return (
        <main className="index-layout">
            <SearchBar />
            <div className="videos-content">
                <VideoList changeVideo={changeVideo} />
                <MainVideo currVideo={currVideo} />
            </div>
        </main>
    )
}