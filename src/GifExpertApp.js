import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// rafc -> Shorthand for react arrow function component

const GifExpertApp = (props) => {
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Digimon'] );
    //     setCategories( cats => [ ...cats, 'Digimon' ] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                { 
                    // Key must not be the index!
                    categories.map( category =>
                         <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    ) 
                }
            </ol>
        </>
    )
}

export default GifExpertApp;

