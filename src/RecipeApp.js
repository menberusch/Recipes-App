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
      showForm: false
    };
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <RecipeAppNavbar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ?  <RecipeInput 
                        onSave={this.handleSave} 
                        onClose={() => this.setState({showForm: false})}
                      /> : null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
