import React from 'react'
import Slider from '../Components/Slider'
import Production from '../Components/Production'
import GenreMoviesLists from '../Components/GenreMoviesLists'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen mx-auto'>
        <Slider/>
        <Production/>
        <GenreMoviesLists/>
        <p>I have added a movie list</p>
    </div>
  )
}

export default Home