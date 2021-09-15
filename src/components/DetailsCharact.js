import { Link } from 'react-router-dom'



const DetailCharact = ({name, img, id}) => {
        return (

            <div>
                {name}   
                <img src={`${img}`} alt={`${name}`}/> 
                {id && (
                     <Link to={`charact/${id}`}>
                     <button>{id}</button>
                  </Link>
                )}
            </div>
        )

};


export default DetailCharact