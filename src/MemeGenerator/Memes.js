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
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            imgMemes: []
        }
    }

    componentDidMount() {
        fetchMemes()
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            console.log(memes)
            this.setState({ imgMemes: memes})
        })
    }

    handleChange = (event) => {
        const {name, value } = event.target
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.imgMemes.length)
        const randomMemeImg = this.state.imgMemes[randomNumber].url
        this.setState({ randomImg: randomMemeImg})
    }

    render(){
        return(
            <div className='meme-container' >
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name='topText'
                        placeholder='Title'
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='bottomText'
                        placeholder='Description'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <div className='meme-display'>
                    <img src={this.state.randomImg} className="random-img" alt="random meme images" />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default Memes