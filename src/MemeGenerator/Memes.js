import React, { Component } from 'react'
import './Memes.css'

//import apiCalls
import { fetchMemes } from '../apiCalls'


class Memes extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            memes: "https://i.imgflip.com/30b1gx.jpg",
            imgMemes: []
        }
    }

    componentDidMount() {
        fetchMemes()
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ imgMemes: memes})
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        return(
            <div className='meme-container'>
                <form>
                    <input
                        type="text"
                        name='topText'
                        placeholder='Title'
                        value={this.state.topText}
                        onChange={event => this.handleChange(event)}
                    />
                    <input 
                        type='text'
                        name='bottomText'
                        placeholder='Description'
                        value={this.state.bottomText}
                        onChange={event => this.handleChange(event)}
                    />
                    <button>Submit</button>
                </form>
                <div className='meme-display'>
                    <img src={this.state.memes} className="random-img" alt="random meme images" />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default Memes