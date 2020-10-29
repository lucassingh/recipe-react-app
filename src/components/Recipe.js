import React from 'react';
import style from './css-modules/recipe.module.css'

const Recipe = ({title, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <div className={style.contImage}>
                <img className={style.image} src={image} alt=""/>
            </div>
            <h1 className={style.h1}>{title}</h1>
            <ol className={style.ul}>
                {ingredients.map((ingredient, index) =>(
                    <li className={style.li} key={index}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;