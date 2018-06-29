import React, { Component } from "react";
import PropTypes from "prop-types";

class RecipeAppNavbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }
  
  constructor(props) {
    super(props);
    this.onNewRecipe = this.onNewRecipe.bind(this);
  }

  onNewRecipe(e) {
    e.preventDefault();
    this.props.onNewRecipe();
  }
  
  render(){
    return(
      <header>
        <h2><a href="#">Recipe App</a></h2>
        <nav>
          <a onClick={this.onNewRecipe} href="#">New Recipe</a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>
    );
  }
}

export default RecipeAppNavbar;