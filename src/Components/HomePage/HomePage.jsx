/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, {useEffect,useState} from 'react';
// import { IProps } from './types'
import styles from './HomePage.module.css';
import axios from 'axios';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const HomePage = () => {


  const [movies, setMovies] =useState([]);

  useEffect(() => {
     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(movies);


  return (
    <div className={styles.wrapper}>
     {
        movies.map((movie) => {
          return (
            <div className={styles.moviesContainer} key={movie.id}>
            <BookmarkBorderIcon className={styles.bookmarkIcon}/>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"/>
            <p>{movie.release_date}</p>
            
            <h2>{movie.title}</h2>
            
            </div>
          );
        })
     }
      </div>
  );
};



export default HomePage;