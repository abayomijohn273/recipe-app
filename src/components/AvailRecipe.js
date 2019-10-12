import React from 'react'
import {Link} from "react-router-dom"
// import { async } from 'q'
const API_KEY = "cf2499dec60ad219b2162afc8604848c"

class AvailRecipe extends React.Component{
    state = {
        activeRecipe: []
    }
    componentDidMount = async() => {
        const title= this.props.location.state.recipe
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        const res = await req.json()

        this.setState({
            activeRecipe: res.recipes[0]
        })
    }       
    render(){ 
        const recipe = this.state.activeRecipe
    return (
        <div className="avail-container container">
            <div className="row">
            <div className="col-md-12">
                <img src={recipe.image_url} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <h4>Publisher: {recipe.publisher}</h4>
                <p>Website: <a href={recipe.publisher_url} target="_blank" rel="noopener noreferrer">{recipe.publisher_url}</a></p>
            </div>
            </div>
            <button className="btn btn-success">
                    <Link to="/">Go Home</Link>
            </button>
        </div>
    )
}
}

export default AvailRecipe;
