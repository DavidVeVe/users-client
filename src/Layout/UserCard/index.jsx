import Button from "../../Components/Button";
import "./usercard.scss";

function UserCard({ userData = {} }) {
  const { picture = "", name = {}, address = "", _id = "" } = userData;
  console.log(_id);
  const { first = "", last = "" } = name;
  return (
    <Button customClassName="user-card__button">
      <div className="user-card">
        <img className="user-card__image" src={picture} />
        <div className="user-card__info">
          <h6>
            {first} {last}
          </h6>
          <span>{address}</span>
        </div>
      </div>
    </Button>
  );
}

export default UserCard;
