/** @jsxImportSource @emotion/react */
import React from "react";
import { Business } from "./Business";
import styled from "@emotion/styled/macro";

const BusinessListStyle= styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`

export const BusinessList = (props) => {
    return ( 
        <BusinessListStyle>
        {props.businesses.map(business => (<Business key={business.id} business= {business}/>))}
        </BusinessListStyle>
    ) 
}