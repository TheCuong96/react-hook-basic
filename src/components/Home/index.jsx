import React from "react";
import PropTypes from "prop-types";
import './HobbyListStyles.css';
HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};
HobbyList.propTypes = {
  hobbyList: [],
  active: null,
  onHobbyClick: null,
};
function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
      console.log(activeId);
    }
  };
  return (
    <div>
      <ul className="hobby-list">
        {hobbyList.map((hobby) => (
          <li
            key={hobby.id}
            className={hobby.id === activeId ? "active" : ""}
            onClick={() => handleClick(hobby)}
          >
            {hobby.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;
