import React from "react";
import {Link} from "react-router-dom"

const Recipes = ({recipes}) => (
<div className="container">
    <div className="row">
    { recipes.map((recipe) =>  
            <div className="col-md-4 mb-4" key={recipe.title}>
                <div className="card">
                    <div className="card-body">
                            <img className="card-img-top" 
                                src={recipe.image_url} 
                                alt={recipe.title}
                                style={{
                                    height: "13rem"
                                }}/>
                                    <p className="bold">{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0,25)}`}</p>
                                    <p className="">{recipe.publisher}</p>
                    </div>
                    <div className="card-footer">
                        <p><button className="btn btn-success">
                            <Link to={{
                                pathname: `/recipe/${recipe.recipe_id}`,
                                state: {recipe: recipe.title}
                            }}>
                                View
                            </Link>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )}
    </div>
</div>
)

export default Recipes;