import { MainVideo } from "../cmps/MainVideo";
import { SearchBar } from "../cmps/SearchBar";
import { VideoList } from "../cmps/VideoList";

export function YoutubePlayer() {

    return (
        <>
            <main className="index-layout">
                <SearchBar />
                <div className="videos-content">
                    <VideoList />
                    <MainVideo />
                </div>
            </main>
        </>
    )
}