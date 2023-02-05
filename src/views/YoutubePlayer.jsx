import { MainVideo } from "../cmps/MainVideo";
import { SearchBar } from "../cmps/SearchBar";
import { VideoList } from "../cmps/VideoList";

export function YoutubePlayer() {

    return (
        <>
        <h1>From youtube-Player cmp</h1>
        <SearchBar />
        {/* <VideoList /> */}
        <MainVideo />
        </>
    )
}