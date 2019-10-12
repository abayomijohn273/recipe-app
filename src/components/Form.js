import React from 'react';

function Form({getRecipe}) {
    return (
        <form onSubmit={getRecipe}>
            <input type="text" name="recipeName" className="form-control"/>
            <button className="form-control btn-success mt-3">Search</button>
        </form>
    )
}

export default Form;
