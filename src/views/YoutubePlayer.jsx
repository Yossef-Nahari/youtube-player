import { MainVideo } from "../cmps/MainVideo";
import { SearchBar } from "../cmps/SearchBar";

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