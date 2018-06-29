import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
  static defaultProps = {
    onClose(){},
    onSave(){}
  };
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIng(e) {
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({ingredients});
  }

  handleNewIngredient(e) {
    const { ingredients } = this.state;
    this.setState({ingredients: [...ingredients, '']});
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    });
  }

  render(){
    const { title, instructions, ingredients, img } = this.state;
    const { onClose } = this.props;
    var ingr = ingredients.map((ing, i) => (
      <div 
        className="recipe-form-line"
        key={`ingredient-${i}`}>
        <label>{i+1}.
          <input 
            type="text" 
            name={`ingredient-${i}`} 
            value={ing} size={45} 
            autoComplete="off"
            placeholder=" Ingredient"
            onChange={this.handleChangeIng} />
        </label>
      </div>
    ));
    return(
      <div className="recipe-form-container">
        <form onSubmit={this.handleSubmit} className="recipe-form">
          <button type="button" className="close-button" onClick={onClose}>X</button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-title-input">Title</label>
            <input 
              key="title"
              id="recipe-title-input"
              type="text" 
              name="title" 
              value={title} size={42} 
              autoComplete="off"
              onChange={this.handleChange} />
          </div>
          <label htmlFor="recipe-instructions-input" style={{marginTop: 10}}>Instructions</label>
          <textarea 
            key="instructions"
            id="recipe-instructions-input"
            type="Instructions" 
            name="instructions"
            rows="8" cols="44" 
            value={instructions}
            autoComplete="off"
            onChange={this.handleChange} />
          {ingr}
          <button type="button" onClick={this.handleNewIngredient} className="buttons">+</button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-img-input">Image Url</label>
            <input 
              id="recipe-img-input"
              placeholder=""
              type="text" 
              name="img" 
              value={img} size={36} 
              autoComplete="off"
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="buttons"
            style={{alignSelf: "flex-end", marginRight: 0}}>SAVE</button>
        </form>
      </div>
    );
  };
}

export default RecipeInput;