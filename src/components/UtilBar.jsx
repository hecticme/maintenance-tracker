import { FiMoon } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { ToggleThemeBtn } from "./ToggleThemeBtn";
import { AddBtn } from "./AddBtn";
import { useTheme } from "../contexts/ThemeContext";
import { useMaintenance } from "../contexts/MaintenanceContext";

export const UtilBar = ({ setIsModalOpen }) => {
  const [darkTheme] = useTheme();
  const { maintenance } = useMaintenance();

  return (
    <div className={`util-bar ${darkTheme ? "dark" : ""}`}>
      <div className="util-bar__info">
        <div className="util-bar__info__text">
          <h3>Need Maintenance</h3>
          <h2 className="util-bar__info__text__amount">{maintenance.length}</h2>
        </div>
        <div className="util-bar__info__divider"></div>
        <div className="util-bar__info__btns">
          <AddBtn setIsModalOpen={setIsModalOpen} />
          <ToggleThemeBtn />
          {darkTheme ? <FiMoon /> : <ImSun />}
        </div>
      </div>

      <div className="util-bar__quote">
        <h2 className="util-bar__quote__text">
          "Everything needs maintenance."
        </h2>
      </div>
    </div>
  );
};
