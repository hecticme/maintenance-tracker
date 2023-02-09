import { BsPlusLg } from "react-icons/bs";

export const AddBtn = ({ setIsModalOpen }) => {
  return (
    <div
      className="add-btn"
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      <BsPlusLg className="add-btn__icon" />
    </div>
  );
};
