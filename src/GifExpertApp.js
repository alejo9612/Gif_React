import React,{ useState }  from 'react'
import CategoriAdd from './components/CategoriAdd';
import {GifGrid}  from './components/GifGrid';


const GifExpertApp = () =>{
  
    const [categorias, setCategoria] = useState(['Naruto']);

    //const handleAdd = () =>{
    //    const add = 'Avengers';
    //cuando tenemos un arreglo es importante que //en la función del set se debe de abrir el array //que se tiene para poder incluir sus elementos, //es decir con los ... + el valor nuevo
    // setCategoria( [...categorias, add]);
    //}

    return(
        //retornamos lo que deseamos mostrar principalmente
        <>
        <h2>GifExpertApp</h2>
        <CategoriAdd setCategoria={setCategoria}/>
        <hr/>

        <ul>
            {   //recorremos las catgorias para traerlas
            categorias.map((categoria, i) =>{
                return <GifGrid 
                key={categoria}
                categoria={categoria}/>
            })
        }
        </ul>
        </>
    )
}

export default GifExpertApp;