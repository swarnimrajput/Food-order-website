import RestaurentCard from "./Restaurantcard";
import Shimmer from "./shimmer";
import { useState ,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";
    
const Body = () => {
    const [listofRestaurants2,setlistofRestaurants]=useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    
    const [searchText,setsearchText]=useState("")

    useEffect(()=>{
      fetchdata();
    },[]);
    const fetchdata = async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();

  setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlinestatus=useOnlineStatus();
   if(onlinestatus===false){
    return <h1>Looks like you're offline.</h1>
   }
    
   const {loggedInUser,setuserInfo}=useContext(Usercontext);
    return listofRestaurants2.length===0?
    (   <Shimmer/>
    ) :    
 
   (
      <div className="Body">
        <div className="Filter flex">
          <div className="Search m-4 p-4">
            <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} 
            onChange={(e)=>{
              setsearchText(e.target.value);
            }} />
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
              const filteredRestaurent=listofRestaurants2.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setlistofRestaurants(filteredRestaurent);

            }}>Search</button>
          </div>
          <div className="Search m-4 p-4 flex items-center"><button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                setlistofRestaurants()
               const filteredlist=listofRestaurants2.filter((res)=>res.info.avgRating>4);
                setlistofRestaurants(filteredlist);
            }}
            >Top Rated Restaurants</button></div>
            <div className="Search m-4 p-4 flex items-center ">
              <label>UserName: </label>
              <input className="border border-black rounded-lg " value={loggedInUser} onChange={(e)=>setuserInfo(e.target.value)}/>

            </div>
            
        </div>
        <div className="flex flex-wrap">
         {
          listofRestaurants2.map((restaurant)=>(
           <Link className="LINK" key ={restaurant.info.id}  to={"/restaurants/"+ restaurant.info.id}><RestaurentCard resdata={restaurant}/></Link>
          ))
         }
         
         
        </div>
      </div>
    );
  };
export default Body;  