
// import TextField from "@mui/material/TextField";

export function MainVideo({currVideo}) {

    return (
        <section className="main-video">
            <iframe id="ytplayer" type="text/html" width="auto" height="auto"
                src={`https://www.youtube.com/embed/${currVideo.id}?autoplay=1&`}
                frameBorder="0"
                className="youtube"
                ></iframe>

            <div className="details">
                <h2> {currVideo.title}</h2>
                <h5> Description:  {currVideo.description}<br/>
                </h5>
            </div>
        </section>
    )
}