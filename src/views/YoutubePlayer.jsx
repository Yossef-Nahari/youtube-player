import { MainVideo } from "../cmps/MainVideo";
import { SearchBar } from "../cmps/SearchBar";
import { VideoList } from "../cmps/VideoList";

export function YoutubePlayer() {

    return (
        <>
<<<<<<< HEAD
        <h1>From youtube-Player cmp</h1>
        <SearchBar />
        {/* <VideoList /> */}
        <MainVideo />
=======
            <main className="index-layout">
                <SearchBar />
                <div className="videos-content">
                    <SongList />
                    <MainVideo />
                </div>
            </main>
>>>>>>> c1b4429db17ac7ca71dd27a173670ac42c6ff029
        </>
    )
}