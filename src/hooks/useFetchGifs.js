import { useEffect, useState } from "react";
import {getGif} from '../helpers/GetGifs';


//nos creamos una función normal que llevará nustra logica y se utilizará como un custom hook
export const useFetchGifs = (categoria) => {

    //creamos el useState para crear el objeto que majearemos con la información que requerimos
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    
    //creamos el useEffect para manejar el efecto que le daremos a nuestro objeto del useState
    useEffect(() => {
        getGif(categoria)
            .then(imgs =>{  
                setstate({
                    data:imgs,
                    loading: false
                })
            })
    }, [categoria]);

    ///esto me retorna el state que es: data[], loading
    return state;

}
