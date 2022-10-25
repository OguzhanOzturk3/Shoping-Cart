import { Link } from 'react-router-dom'

const ListItem = (props)=>{
  

  const {iData,getId} = props;
    return(
  <div id='items'>
    {iData.map((item)=>(
      
      <div key={item.id} id="item" ><Link style={{ textDecoration: 'none' }} to={`/itemdetail/${item.id}`} id={item.id} onClick={getId}>
        <div className='centered'><img src={item.image}></img></div>
        <div className='centered'><h3>{item.name}</h3></div>
        <div className='centered'><p>{item.price}$</p></div>
       

      </Link></div>
      ))}   
    </div>
    );
};

export default ListItem;