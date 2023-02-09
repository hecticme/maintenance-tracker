import { IoIosCloseCircle } from "react-icons/io";
import { useTheme } from "../contexts/ThemeContext";

export const Card = () => {
  const [darkTheme] = useTheme();
  return (
    <div className={`card ${darkTheme ? "dark" : ""}`}>
      <div className="card__time">
        <p className="card__time__last">08/02/2023</p>
        <div className="card__time__span">
          <div className="card__time__span__dot"></div>
          <p className="card__time__span__text">4 days left</p>
        </div>
        <p className="card__time__estimate">12/02/2023</p>
      </div>
      <div className="card__info">
        <div className="card__info__divider"></div>
        <div className="card__info__body">
          <h2 className="card__info__body__name">Braces</h2>
          <p className="card__info__body__description">lorem30</p>
        </div>
        <IoIosCloseCircle className="card__info__close-btn" />
      </div>
    </div>
  );
};
