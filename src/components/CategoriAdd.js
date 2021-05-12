import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoriAdd =({setCategoria}) => {

    //me crea la variable y la funnción mediante el hook
    const [InputValue, setInputValue] = useState('');

    const handleInputValue = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //insertamos la nueva definición de la variable antes de mostrar el array
        if (InputValue.trim().length > 2) {
            setCategoria(categoria => [InputValue, ...categoria]);
            setInputValue('');
        }
    }

    //retornamos los datos llamando las funciones que realizamos antes
    return (
        <form onSubmit={handleSubmit}>
          <input
           type="text"
           value={InputValue}
           onChange={handleInputValue}/>
        </form>
    )
}

//creamos el prop de agregar categorias
CategoriAdd.prototype = {
    setCategoria: PropTypes.func.isRequired
}

export default CategoriAdd;