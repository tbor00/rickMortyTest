import React, {useEffect, useState} from 'react';
import './Character.css'
import DetailCharact from '../components/DetailsCharact';


const Character = () => {

    const [characters, setCharacters] = useState([])

    const getCharacters = async  (name) => {
        const url = name ? `https://rickandmortyapi.com/api/character/?name=${name}` : 'https://rickandmortyapi.com/api/character'

        try{
            const response = await fetch(url)
            const data = await response.json()
            setCharacters(data.results)
        }catch(err){
            console.log(err)
        }
        
    }


    const onChange = (event) => {
        let name = event.target.value;
        if(name === ''){
            console.log('No hay datos')
        }else {
            getCharacters(name)
        }

    }


    const handleSubmit = (event) => {
        event.preventDefault();
    }


    useEffect(() => {
        getCharacters()
    }, [])



    return (
        <>
            <div>
                Character List
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="find" placeholder="find your character" onChange={onChange} />
                    </form>
                    {characters ? characters.map((charac, index) => (
                        <DetailCharact name={charac.name} img={charac.image} id={charac.id}/>
                    )) : (
                        <p>No hay datos</p>
                    )}
            </div>
        </>
    )

};


export default Character