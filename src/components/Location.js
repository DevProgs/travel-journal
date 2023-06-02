import Indicator from '../images/indicator.svg';

// props is pulling in the data from data.map in app.js
const Location = (props) => {
  return (
    <div>
      <div className="location">
        <img
          className="location--image"
          src={props.item.imageUrl}
          alt={props.item.title}
        ></img>
        <div className="location--info-container">
          <div className="location--country">
            <img
              className="location--indicator"
              src={Indicator}
              alt="indicator"
            ></img>
            <h3>{props.item.location}</h3>
            <a
              href={props.item.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
          <div className="location--attraction">
            <h1>{props.item.title}</h1>
          </div>
          <div className="location--date">
            <p>
              {props.item.startDate} - {props.item.endDate}
            </p>
          </div>
          <div className="location--description">
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
      <div className="location--divider">
        <div></div>
      </div>
    </div>
  );
};
export default Location;
