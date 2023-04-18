import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogByName } from "../../redux/actions";
import { useSelector } from "react-redux";
import Card from "../Card/Card";


const SearchBar = () => {
    const dog= useSelector(state=> state.dogName)
    const perro= dog[0]?.name
    const id= dog[0]?.id
    const [dogState, setDogsState] = useState("");
    const dispatch = useDispatch();
  
    function handleClick(e) {
      e.preventDefault();
      
      if (dogState.length === 0) {
        return alert("Please input a name to start the search");
      } else {
        dispatch(getDogByName(dogState));
        setDogsState("");
      }
    }


    return (
      <div>
        <input
          type="text"
          placeholder="Search a dog..."
          value={dogState}
          onChange={(e) => setDogsState(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          search
        </button>
        <div>
        {dogState === "" && <Card 
        id={id}
        name={perro}
        />}
        </div>
      </div>
    );
}
export default SearchBar;