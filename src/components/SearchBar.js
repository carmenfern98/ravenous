/** @jsxImportSource @emotion/react */
import React, {useCallback, useState, useEffect} from "react";
import styled from '@emotion/styled';
import { searchYelp } from "../utilities/yelpapi";
import { LoadingSpinner } from "./LoadingSpinner";

const FilterButton = React.memo(styled.button `
background-color: ${props=>props.isActive ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.5)"};
color: #f8f4e3;
min-height: 3vh;
min-width: 20vh
padding: 1vh;
border-radius: 10px;
font-size: 3vh;
font-weight: 600;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
border-color: transparent;
margin: 1vh;


 &:hover {
cursor: pointer}

&:active{
background-color:background-color: rgba(0, 0, 0, 1);
}
`)
const StyledSearch = styled.input`
border-radius:10px;
margin: 4vh;
min-height:5vh;
min-width: 30vh;
border-color: transparent;
`
const GoButton = styled.button `
background-color: #f8f4e3;
color:  #433e3f;
min-height: 6vh;
min-width: 20vh;
padding: 1vh;
border-radius: 10px;
font-size: 3vh;
font-weight: 600;
border-color:#f8f4e3;

&:hover {
cursor: pointer}
`

export const SearchBar = React.memo(({setBusinesses}) =>
{
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sorting, setSorting] = useState("best_match");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

const handleSortingChange = useCallback((newSorting) => {setSorting(newSorting);},[]);

const handleSearch = useCallback(async (event) =>{
    event.preventDefault();
    setLoading(true);
    setError(null);
    try{
        const data = await searchYelp(searchTerm, location, sorting);
        setBusinesses(data);
        setLoading(false);
    } catch (err) {
        console.error("Yelp API error:", err);
        setError("Error fetching data from Yelp");
        setLoading(false);
      }
}, [location, searchTerm, sorting, setBusinesses]);

useEffect(() => {
    if(searchTerm && location){
        const fetchSortedResults = async () => {
          setLoading(true);
          setError(null);  
          try{
            const data = await searchYelp(searchTerm, location, sorting);
            setBusinesses(data);
          }
            catch(err){
                console.error("Yelp API error", err);
                setError("Error fetching data from Yelp");
            }
            finally {setLoading(false);
            }
          };
          fetchSortedResults();
        }
    }, [sorting])
    return(
        <div>
        <div className="filterbuttons">
        <FilterButton isActive={sorting === "best_match"} value={sorting} onClick={()=> handleSortingChange("best_match")}>Best Match</FilterButton>
        <FilterButton isActive={sorting === "rating"} value={sorting} onClick={()=> handleSortingChange("rating")}>Highest Rated</FilterButton>
        <FilterButton isActive={sorting === "review_count"} value={sorting} onClick={()=> handleSortingChange("review_count")}>Most Reviewed</FilterButton>
        </div>
        <StyledSearch onChange={(e)=> setSearchTerm(e.target.value)} type="text" value={searchTerm}placeholder="Search Businesses" />
        <StyledSearch onChange={(e)=> setLocation(e.target.value)}type="text" value={location}placeholder="Where?"/>
        <div className="gobutton">
        <form onSubmit={handleSearch}>
        <GoButton type="submit">Let's Go</GoButton>
        </form>
        </div>
        {loading && <LoadingSpinner/>}
        {error && <div>{error}</div>}
        </div>
    )
}
)