import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogByName } from "../../redux/actions";
import { useSelector } from "react-redux";
import style from "./SearchBar.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";


const SearchBar = () => {
  const dogs = useSelector(state => state.dogName)
  const [dogState, setDogsState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    if (dogState.length === 0) {
      return alert("Please input a name to start the search");
    } else {
      dispatch(getDogByName(dogState));
      setDogsState(dogState);
    }
  }
    const handleChange=(e) => {
      setDogsState(e.target.value)
    
    }

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Search a dog..."
        value={dogState}
        onChange={handleChange}
        className={style.searchBar}
      />
      <button type="submit" onClick={handleClick} className={style.boton}>
        search
      </button>
      <div className={style.searchMenu}>
      {dogState.length ? dogs?.map(dog => (
    <Link to={`/detail/${dog.id}`} key={dog.id} id={dog.id} className={style.link}>
      {dog.name}
    </Link>
  )):dogState}
      </div>
    </div>
  );
}
export default SearchBar;