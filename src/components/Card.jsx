import { IoIosCloseCircle } from "react-icons/io";
import { useTheme } from "../contexts/ThemeContext";
import { useMaintenance } from "../contexts/MaintenanceContext";
import { DateDisplay } from "./DateDisplay";

export const Card = ({
  id,
  name,
  description,
  lastDate,
  spanDate,
  spanDateFormat,
}) => {
  const [darkTheme] = useTheme();
  const { deleteMaintenance } = useMaintenance();

  return (
    <div className={`card ${darkTheme ? "dark" : ""}`}>
      <DateDisplay
        lastDate={lastDate}
        spanDate={spanDate}
        spanDateFormat={spanDateFormat}
      />
      <div className="card__info">
        <div className="card__info__divider"></div>
        <div className="card__info__body">
          <h2 className="card__info__body__name">{name}</h2>
          <p className="card__info__body__description">{description}</p>
        </div>
        <IoIosCloseCircle
          className="card__info__close-btn"
          onClick={() => deleteMaintenance(id)}
        />
      </div>
    </div>
  );
};
