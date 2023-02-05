import { Component, useState } from "react";
import { youtubeService } from "../services/youtube-service";


export function VideoList({changeVideo}) {

    // state = {
    //     value: ''
    // }
    const [videos, setVideos]=useState(youtubeService.renderVideos())

    function onChangeVideo(url){
        changeVideo(url)

    }

  
    if (!videos) return <h2>Loading...</h2>
    return (
        <section className="song-list">
            {videos.map((video) => (
                <div className="song" key={video.id}>
                    <img src={video.img.url} alt="" />
                    <div className="details">
                        <h4>Song name: {video.title} </h4>
                        <h4>Song description: {video.description}</h4>
                        <h4>Total votes: </h4>
                    </div>
                    <div className="btn-play">
                        <button className="" 
                        onClick={()=>onChangeVideo(video) }
                        >Play</button>
                    </div>

                </div>

            ))
            }
        </section>
    )
}
