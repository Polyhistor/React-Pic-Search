import unsplash from '../API/unsplash'
import React from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'


class App extends React.Component {

    state = { images : [] }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        })
        this.setState({ images : response.data.results })
    }

    render() {
        return (
        <div className="ui container" style ={ {marginTop: '10px'} }>
            <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
            <ImageList images={this.state.images}></ImageList>
        </div>
        )
    }
}

export default App
  