import React, { Component } from 'react'
import './HappyDogMeme.css'

//import apiCalls
import { fetchHappyDog } from '../apiCalls'



class HappyDogMeme extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Happy_Dog_%2814591980751%29.jpg',
            images: []
        }
    }

    componentDidMount = async () => {
        const happyDog = await fetchHappyDog();
        const happyData = await happyDog.json();
        console.log('test', happyData)
        this.setState({ images: happyData.happy})
        
    }

    handleChange = (event) => {
        const {name, value } = event.target
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.images.length)
        const randomMemeImg = this.state.images[randomNumber].image
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

export default HappyDogMeme