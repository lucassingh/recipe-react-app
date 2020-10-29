import React from 'react';
import style from './css-modules/jumbotron.module.css'

const Jumbotron = () => {
    return(
        <div className={style.jumbotron}>
           <h1 className={style.h1}>Welcome to recipes app.</h1>
           <p className={style.p}>You can find your favorite recipe in minutes!</p>
        </div>
    );
}

export default Jumbotron;