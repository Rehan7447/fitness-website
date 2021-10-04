import React, { Component } from 'react';
import pic3 from '../img/women3.png';
export default function RoundImg(props){
return(
    <div className="ab-sec3-imgcontainer" style={{width:props.width,height:props.height,backgroundImage: `url(${props.img})`}}>
         {/* <img src={props.img}/> */}
    </div>
)
}