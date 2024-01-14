import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
       },[])
    const fetchMenu = async () => {
        const data = await fetch (MENU_API+resId)
    const json = await data.json();
    setResInfo(json.data)
    console.log("Sourav'", json)
    }

    if (resInfo === null) return <Shimmer/>;

    const {name, areaName, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards
    console.log("hes",itemCards)


    return (
     <div className="menu">
      <h3 className="h3-menu">{name}</h3>
      <p>{areaName}</p>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul className="ul-menu">
      {itemCards.map(item =>
         <li className="li-menu" key={item.card.info.id}>
         {item.card.info.name} - {" Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
         <img className="menu-logo" alt="res-logo" src={MENU_URL+item.card.info.imageId}></img>
         </li>)}
      </ul>
     </div>
    )
}

export default RestaurantMenu