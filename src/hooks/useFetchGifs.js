// Standard for hooks start with the prefix 'use'
// A custom hook is a form to extract logic from a component
// or logic that I want to reuse  

import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // useEffect() can't be async
    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                // setTimeout( () => {
                    
                    // console.log(imgs);

                    setState( {
                        data: imgs,
                        loading: false
                    } );
                // }, 3000 )
            } );
    }, [category])


    return state;

};