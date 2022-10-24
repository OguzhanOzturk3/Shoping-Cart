import { Link } from 'react-router-dom'

const ListItem = (props)=>{
  

  const {iData,getId} = props;
    return(
  <div>
    {iData.map((item)=>(
      
      <div key={item.id} ><Link to={`/itemdetail/${item.id}`} id={item.id} onClick={getId}>{item.name}</Link></div>
      ))}   
    </div>
    );
};

export default ListItem;