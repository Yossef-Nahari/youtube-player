import axios from 'axios';

import { storageService } from './storage-service.js'

export const youtubeService = {
    onSearch,
    renderVideos
}

const KEY = 'videosDB'
let currVideosList = [] 

async function onSearch(video) {
    console.log('Hello')
    console.log('video', video)
    try {
        const videos = await getSongs(video)
        if (!videos.length) return
        console.log('videos', videos)
        currVideosList = videos
        // renderVideos(videos)
        // playVideo(videos[0].id)
    }
    catch (err) {
        console.log('There is a problem', err)
    }
}

async function getSongs(video) {
    const termVideosMap = storageService.load(KEY) || {}
    if (termVideosMap[video]) return Promise.resolve(termVideosMap[video])

    console.log('Getting from Network')
    let res
    try {
        res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyCp8KMTEjR9frWUGpSnc8Cw5cLVe7wRRDM&q=${video}`)
        const ytVideos = res.data.items
        console.log('info', ytVideos)
        const videos = ytVideos.map(ytVideo => ({
            id: ytVideo.id.videoId,
            title: ytVideo.snippet.title,
            description: ytVideo.snippet.description,
            img: {
                url: ytVideo.snippet.thumbnails.default.url,
                width: ytVideo.snippet.thumbnails.default.width,
                height: ytVideo.snippet.thumbnails.default.height,
            }
        }))
        termVideosMap[video] = videos
        storageService.save(KEY, termVideosMap)
        return videos
    }
    catch (err) {
        console.log('There is a problem', err)
    }
}

function renderVideos() {
    console.log('loggg', currVideosList)
    return currVideosList
}



// function renderVideos(videos) {
//     var strHTMLs = videos.map(video => {
//         return `<article class="video-preview" >
//         <button onclick="playVideo('${video.id}')">▶</button>
//         <img src="${video.img.url}" width="${video.img.width}" height="${video.img.height}">
//         <span>${video.title}</span>
//         </article>`
//     })
//     const elSearchResults = document.querySelector('.search-results')
//     elSearchResults.innerHTML = strHTMLs.join('')
// }

// function playVideo(videoId) {
//     const elVideoPlayer = document.querySelector('.video-play iframe')
//     elVideoPlayer.src = `https://www.youtube.com/embed/${videoId}?controls=0`
// }