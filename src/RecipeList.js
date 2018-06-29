import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component{
  render(){
    const recipes = this.props.recipes.map((recipe, index) => (
      // <Recipe key={recipe.id} title={recipe.title}
      //         ingredients={recipe.ingredients}
      //         img={recipe.img}
      //         instructions={recipe.instructions}
      // />
      <Recipe key={recipe.id} {...recipe} />
    ));
    return(
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;