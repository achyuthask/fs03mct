import { useState,useEffect } from 'react';
import './card.css'
 import { useDispatch, useSelector } from 'react-redux';
 import { productActionCreator } from '../redux/actioncreater';
 import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Poster from './poster';





function Home() {
    



   //const[productos,setData] =useState([]);

 const dispatch = useDispatch();
   const {productos} = useSelector((storedata)=>{
      return storedata;
  })
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };





    useEffect(() => {
      const fetchData = async () => {
        const url = 'https://pizzaallapala.p.rapidapi.com/productos';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'd7f38419ccmshc4e58f53615dffdp1a59cfjsnff4713ddc2c4',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
          }
        };
  
        try {
          const response = await fetch(url, options);
          const data = await response.json();
         dispatch(productActionCreator(data.productos));
         // setData(result.productos);
          console.log(data.productos);
        } catch (error) {
           dispatch(productActionCreator(error.productos));
          console.error(error); 
        }
      };  
     fetchData();
     
    }, []);
  
    return (
        <>
        <Poster />

       
       
    


     {productos.length>0 ?(
        <div className='ard'>
            
        {productos.map((item) => (
         
          <div  className='card' key={item.id}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          >
            
            <h5>{item.id}</h5>
            <img src={item.linkImagen} alt=" " height="100px"/>
            <h2 style={{color:"rgb(3, 255, 47)"}}>{item.nombre}</h2>
            <h3 style={{color:"red"}}>price :$:{item.precio}</h3>
           
            {isHovering && (
          <div className='qwe'>
            {/* <button><Link to="/orderpage">add to cart</Link></button> */}
            <h4 style={{color:"green"}}>created:{item.created_at}</h4>
            <h4 style={{color:"yellowgreen"}}>description:{item.descripcion}</h4>
            <Button variant="outline-success"><Link to="/orderpage">add to cart</Link></Button>
            
          </div>
            )}
           </div>
        ))}
      </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
          No Product to Display
        </h2>
      )}
</>
    );
}
  export default Home;

