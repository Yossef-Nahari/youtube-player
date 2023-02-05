import { MainVideo } from "../cmps/MainVideo";
import { SearchBar } from "../cmps/SearchBar";
import { SongList } from "../cmps/SongList";

export function YoutubePlayer() {

    return (
        <>
            <main className="index-layout">
                <MainVideo />
                <SongList />
                <SearchBar />
            </main>
        </>
    )
}