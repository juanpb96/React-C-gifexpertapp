import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifts } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // Custom hook
    const { data: images, loading } = useFetchGifs( category );

    // useEffect() manage to avoid unnecessary rendering
    // // [] componentDidMount
    // useEffect(() => {
    //     getGifts( category )
    //         .then( setImages )
    // }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className='card-grid'>
                { 
                    images.map( img =>
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ) 
                }
            </div>
        </>
    )
}
