
import Input from "@mui/material/TextField";



export function SearchBar() {

    function handleChange(event) {
        const search=event.target.value

    }

    return (
        <section className=" full index-layout search-bar">
            <form className="search-form">
                <div className="input-text">
                    <Input
                        id="search-bar"
                        placeholder="Search on YouTube"
                        variant="outlined"
                        fullWidth
                        color="warning"
                        onChange={handleChange}
                    />
                </div>

                <div className="trigger-btn">
                    <button className="btn-search">
                        Search
                    </button>


                </div>
            </form>
        </section>
    )
}