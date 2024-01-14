import { CDN_URl } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData?.info
    return (
      <div className="res-card" style={{background: "#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src={CDN_URl+cloudinaryImageId}
      ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.slaString}</h4>
      </div>
    );
  };

export default RestaurantCard;