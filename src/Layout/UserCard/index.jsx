import Button from "../../Components/Button";
import "./usercard.scss";

function UserCard({ userData = {}, onClick }) {
  const { picture = "", name = {}, address = "", _id = "" } = userData;
  const { first = "", last = "" } = name;

  const returnClickedUserId = () => onClick(_id)

  return (
    <Button customClassName="user-card__button" onClick={() => returnClickedUserId()}>
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
