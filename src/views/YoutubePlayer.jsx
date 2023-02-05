import { MainVideo } from "../cmps/MainVideo";
import { SearchBar } from "../cmps/SearchBar";
import { SongList } from "../cmps/SongList";

export function YoutubePlayer() {

    return (
        <>
            <main className="index-layout">
                <SearchBar />
                <div className="videos-content">
                    <SongList />
                    <MainVideo />
                </div>
            </main>
        </>
    )
}