import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import RecipeAppNavbar from './RecipeAppNavbar';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Spaghetti',
          ingredients: ['flour', 'water'],
          instructions: 'Mix ingredients',
          img: 'spaghetti.jpeg'
        },
        {
          id: 1,
          title: 'Milkshake',
          ingredients: ['2 Scoops Ice cream', '8 ounces milks'],
          instructions: 'Combine ice cream and milk.',
          img: 'milkshake.jpg'
        },
        {
          id: 2,
          title: 'Avocado Toast',
          ingredients: ['2 slices of bread', '1 avocado', 'pepper', 'salt', 'olive oil'],
          instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
          img: 'avocado_toast.jpeg'
        }
      ],
      nextRecipeId: 3,
    };
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <RecipeAppNavbar />
        <RecipeInput onSave={this.handleSave}/>
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
