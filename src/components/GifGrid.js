import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGif } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    
    // const [Images, setImages] = useState([]);

    //asiganamos un nuevo nombre a la destructuración que hacemos
    const {data:images, loading} = useFetchGifs(categoria);
    // useEffect(() => {
    //    //getGif();
    //    //remplazamos para poder traer una promesa del nuevo helper y traemos los datos
    //    getGif(categoria)
    //         .then(img => setImages(img))
    // }, [categoria])

    

    return (
        <>
        <h3>{categoria}</h3>
        
        {loading && <p>Loading...</p>}

        <div className="Card-grid animate__tada">
        
        {
            images.map(img  =>{
                return <GifGridItem 
                key={img.id}
                {...img}
                />
            })
        }
        </div>
        </>
    )
}
