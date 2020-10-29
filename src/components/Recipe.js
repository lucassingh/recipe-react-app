import React from 'react';
import style from './css-modules/recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
                <ol className={style.ul}>
                    {ingredients.map((ingredient, index) =>(
                        
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;