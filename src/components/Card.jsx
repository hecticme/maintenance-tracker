import { IoCloseCircle } from "react-icons/io";

export const Card = () => {
  return (
    <div className="card">
      <div className="card__time"></div>
      <div className="card__info">
        <h2 className="card__info__name"></h2>
        <p className="card__info__description"></p>
        <IoCloseCircle className="card__info__close-btn" />
      </div>
    </div>
  );
};
