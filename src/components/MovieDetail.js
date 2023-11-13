import React from 'react'
import { Link, useParams } from 'react-router-dom';

const  MovieDetail =({list}) => {
  const {id} = useParams()
  const foundmovie =  list.find(el => el.id ===  +id)
  
  return (
    <div className='container moviedetail'>
      <h1 >{foundmovie.title}</h1>
      <h4>{foundmovie.year}</h4>
      <iframe width="560" height="315" 
      src={foundmovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>{foundmovie.description}</p>
      <Link to='/' >Back Home</Link>
    </div>
  )
}

export default MovieDetail;
