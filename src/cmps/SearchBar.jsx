import { Component } from 'react'

import { youtubeService } from '../services/youtube-service'

export class SearchBar extends Component {

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
}