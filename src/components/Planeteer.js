import React, {useState} from "react";

function Planeteer({ name, bio, pictureUrl, twitter, quote, fromUSA}) {


  const [click, setClick] = useState(true)

  function handleClick(){
    setClick((click) => !click)
  }
 
  return (
    <li className="cards__item">
      <div className="card" onClick = {handleClick}>
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{click ? bio : quote}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {fromUSA ? ("USA-based") : ("Working overseas")}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
