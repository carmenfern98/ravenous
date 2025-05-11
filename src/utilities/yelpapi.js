import React from "react";

const API= "z8MfSY92wgVoVtwOGl7yNEOdLHJ_gfOMP4ftIlPOatRw2LmwpjnE6hICTHuoqNEp7XU91ab6V_CaOw4rtWIAkkqA2DgEEPA6utLhBXbuDDinYW4PlWj9LceFSjESaHYx"

export async function searchYelp(term, location, sortBy="best_match"){
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${sortBy}&limit=20`;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${API}`
    }
  };
  try{
    const res = await fetch(url, options);
    const data = await res.json();
    return data.businesses.map(b => ({
        id: b.id,
        name: b.name,
        imageSrc: b.image_url,
        address: b.location.address1,
        city: b.location.city,
        state: b.location.state,
        zipCode: b.location.zip_code,
        category: b.categories.map(cat=> cat.title).join(", "),
        rating: b.rating,
        reviewCount:b.review_count,
        url: b.url,
    }));
  }
  catch(error){
    console.error("Yelp API error", error);
    throw error;
  }
}
