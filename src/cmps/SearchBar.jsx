import { Component } from 'react'

import { youtubeService } from '../services/youtube-service'
import Input from "@mui/material/TextField";

export class SearchBar extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        console.log('event', event.target.value)
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        youtubeService.onSearch(this.state.value)
    }

    render() {

        // return (
        //     <>
        //         <section className="search-bar">
        //             <form onSubmit={this.handleSubmit}>
        //                 <input type="text" name="search" placeholder="Search your next video..."
        //                     value={this.state.value} onChange={this.handleChange} />
        //                 <button>Search</button>
        //             </form>
        //         </section>
        //     </>
        // )

        // function handleChange(event) {
        //     const search=event.target.value

        // }

        return (
            <section className=" full index-layout search-bar">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <div className="input-text">
                        <Input
                            id="search-bar"
                            placeholder="Search on YouTube"
                            variant="outlined"
                            fullWidth
                            color="warning"
                            onChange={this.handleChange}
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
}