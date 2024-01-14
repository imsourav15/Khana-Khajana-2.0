import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListRest, setfilteredListRest] = useState([]);
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch (
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await data.json();
    // Optional chaining
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("Sourav", json)
    setfilteredListRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
      <div className="body">
        <div className="filter-search">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }}></input>
            <button onClick={() => {
                const filteredRestaturant = listOfRestaurant.filter(
                    (res) =>  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setfilteredListRest (filteredRestaturant)
            }}>Search</button>
        </div>
        <button className="filter-button"
        onClick={() => {
          const filterdList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4.1
        );
        setListOfRestaurant(filterdList);
        }}>
         Top Rated Restaurants </button>
        </div>
        <div className="res-container">
        { filteredListRest.map((restaurant) => (
          <Link className="custom-link"
            key = {restaurant.info.id}
            to={"/restaurants/" +restaurant.info.id }>
            <RestaurantCard resData={restaurant}/>
          </Link>
          ))}
          {}
        </div>

      </div>
    )
  }

export default Body;