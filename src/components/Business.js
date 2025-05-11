/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";

const CardImage = styled.img`
width: 100%;
height: 180px;
object-fit: cover;
`
const BusinessCard= styled.div`
width: 100%;
max-width: 300px;
display: flex;
flex-direction: column;
padding: 16px;
margin: 2rem; 
align-items: center;
background-color: #94ac88;
`
const InfoSection = styled.div `
display: flex;
justify-content: space-between; 
width: 100%;
max-width: 600px`

const AddressInfo= styled.div`
display: flex;
flex-direction:column;
text-align: right;
min-width: 40%;
`
const OtherInfo = styled.div`
display: flex;
flex-direction: column;
text-align: left;`

const Title = styled.h1`
text-align: left;
font-size: 150%;
font-family: 'Oswald', sans-serif;
`
const InfoText =styled.p`
 font-family: 'Lato', sans-serif;
 line-height: 1.2;
 flex-direction: column;
 text-align: right;
`

export const Business = (props) => {
    return (
    <BusinessCard>
        <CardImage src={props.business.imageSrc} />
        <Title>{props.business.name}</Title>
        <InfoSection>
        <AddressInfo>
        <InfoText>{props.business.address}</InfoText>
        <InfoText>{props.business.city}</InfoText>
        <InfoText>{props.business.state}</InfoText>
        <InfoText>{props.business.zipCode}</InfoText>
        </AddressInfo>
        <OtherInfo>
        <InfoText style={{fontWeight: 900, color:'maroon', fontSize: 17}}>{props.business.category}</InfoText>
        <InfoText style={{fontWeight: 'bold', color:'gold', fontSize: 20}}>{props.business.rating} Stars</InfoText>
        <InfoText>{props.business.reviewCount} Reviews</InfoText>
        </OtherInfo>
        </InfoSection>
    </BusinessCard>
    )
}