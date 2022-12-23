import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        // Valorant
        setCategories([newCategory,...categories]);

    }

    return(
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={(newCategory) => onAddCategory(newCategory)}
            />

                {categories.map((category) => (
                 <GifGrid key={category} category={category}/>
                ))
            }

        </>
    )
}