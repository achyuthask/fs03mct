
import './card.css'
import { useSelector } from 'react-redux';



function Menu() {

    const {productos} = useSelector((storedata)=>{
        return storedata;
    })
    
 
  
    return (
        <>
          <div className='menu'>
            <h1 style={{color:"white"}}>Menu Light</h1>
          </div>
        
        <div className='grd'>
            
        {productos.map((item) => (
         
          <div  className='card' key={item.id}>
            
            <img src={item.linkImagen} alt=" " />
            <h2 style={{color:"green"}}s>{item.nombre}</h2>
            <h3 style={{color:"red"}}>price :$:{item.precio}</h3>
            <p>{item.descripcion}</p>
           
           </div>
        ))}
      </div>
</>
    );
}
  export default Menu;
