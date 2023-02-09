import { ToggleThemeBtn } from "./ToggleThemeBtn";

export const UtilBar = () => {
  return (
    <div className="util-bar">
      <div className="util-bar__infor">
        <h3>Need Maintenance</h3>
        <h2></h2>
      </div>
      <div className="util-bar__btns">
        <ToggleThemeBtn />
      </div>
    </div>
  );
};
