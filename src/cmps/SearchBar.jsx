import { Component } from 'react'

<<<<<<< HEAD
import { youtubeService } from '../services/youtube-service'
=======
import Input from "@mui/material/TextField";


>>>>>>> c1b4429db17ac7ca71dd27a173670ac42c6ff029

export class SearchBar extends Component {

<<<<<<< HEAD
    state = {
        value: ''
    }

    handleChange = (event) => {
        console.log('event', event.target.value )
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        youtubeService.onSearch(this.state.value)
      }

    render() {
        console.log('state', this.state)

        return (
            <>
                <section className="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="search" placeholder="Search your next video..."
                            value={this.state.value} onChange={this.handleChange} />
                        <button>Search</button>
                    </form>
                </section>
            </>
        )
    }
=======
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
>>>>>>> c1b4429db17ac7ca71dd27a173670ac42c6ff029
}