import { MainVideo } from "../cmps/MainVideo";
import { SearchBar } from "../cmps/SearchBar";
import { SongList } from "../cmps/SongList";

export function YoutubePlayer() {

    return (
        <>
        <h1>From youtube-Player cmp</h1>
        <MainVideo />
        <SongList />
        <SearchBar />
        </>
    )
}