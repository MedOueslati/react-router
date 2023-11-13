import React from 'react'
import { Link, useParams } from 'react-router-dom';

const  MovieDetail =({list}) => {
  const {id} = useParams()
  const foundmovie =  list.find(el => el.id ===  +id)
  
  return (
    <div>
      <h1>{foundmovie.title}</h1>
      <iframe width="560" height="315" 
      src={foundmovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h4>{foundmovie.description}</h4>
<Link to='/' >Back Home</Link>
    </div>
  )
}

export default MovieDetail;
