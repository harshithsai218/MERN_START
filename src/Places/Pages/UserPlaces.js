import React from "react";

import PlaceList from "../Components/PlacesList";
const Dummy_Places=[
    {
        id:'p1',
        title:'funnel hill',
        description:'waffle place',
        imageUrl:"https://static.wixstatic.com/media/d15c6e_5cc6828098244aa8a8fc3efc6fac3c5d~mv2.png/v1/fit/w_2500,h_1330,al_c/d15c6e_5cc6828098244aa8a8fc3efc6fac3c5d~mv2.png",
        address:'beside More Super Market, Defence Colony, Sainikpuri, Hyderabad, Secunderabad, Telangana 500036',
        location:{
            lat:17.4890715,
            lng:78.5376398,
        },
        creator:'u1',
    },
    {
        id:'p2',
        title:'funnel hill',
        description:'waffle place',
        imageUrl:'https://static.wixstatic.com/media/d15c6e_5cc6828098244aa8a8fc3efc6fac3c5d~mv2.png/v1/fit/w_2500,h_1330,al_c/d15c6e_5cc6828098244aa8a8fc3efc6fac3c5d~mv2.png',
        address:'beside More Super Market, Defence Colony, Sainikpuri, Hyderabad, Secunderabad, Telangana 500036',
        location:{
            lat:17.4890715,
            lng:78.5376398,
        },
        creator:'u2',
}]
const UserPlaces = () =>{
    return <PlaceList items={Dummy_Places}/>
};

export default UserPlaces;