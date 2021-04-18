import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActionHobby } from "../actions/hobby";
// import PropTypes from "prop-types";
import HobbyList from "../components/Home";

HomePage.propTypes = {};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  console.log("list: ", hobbyList);
  console.log("active: ", activeId);
  const dispatch = useDispatch();

  const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
  };
  const handleAddNewHobby = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
      // id:1,
      // title:`Hobby`,
    };
    const action = addNewHobby(newHobby);
    //   dispatch(addNewHobby(newHobby));
    // console.log(action);
    dispatch(action);
  };
  const handleHobbyClick = (Hobby) => {
    const action = setActionHobby(Hobby);
    dispatch(action);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleAddNewHobby}>click me</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;
