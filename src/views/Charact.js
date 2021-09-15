import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import DetailCharact from '../components/DetailsCharact'


const Charact = () => {
    const {id} = useParams()
    const [charac, setCharac] = useState()

    const getCharac = async () => {
        const url =`https://rickandmortyapi.com/api/character/${id}`
        try{
            const response = await fetch(url)
            const data = await response.json()
            setCharac(data)

        }catch(e){
            console.log(e)
        }
    }

    

    useEffect(() => {
        getCharac()
    }, [])


    return (
        <>
          <div>
            {charac && (
                <div>
                    <DetailCharact name={charac.name} img={charac.image}/>
                </div>
            )}
          </div>
        </>
    )

};

export default Charact