import React, { Component } from "react";

class RecipeAppNavbar extends Component {
  render(){
    return(
      <header>
        <h2><a href="#">Recipe App</a></h2>
        <nav>
          <a href="#">New Recipe</a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>
    );
  }
}

export default RecipeAppNavbar;