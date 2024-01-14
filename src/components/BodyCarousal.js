// import { useState, useEffect } from "react";

// const BodyCarousal = () => {
// const [carousalList, setCarousalList] = useState([]);

// useEffect(() => {
//     fetchData();
//    }, []);
// const fetchData = async () => {
//     const data = await fetch (
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     )
//     const json = await data.json();
//     // Optional chaining
//     setCarousalList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
//     console.log("Sourav'", json)
//   };
//   return carousalList.length === 0 ? <Shimmer/> : ()
// }


// export default BodyCarousal;
