import { useTheme } from "../contexts/ThemeContext";
import { IoIosCloseCircle } from "react-icons/io";

export const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const [darkTheme] = useTheme();

  return (
    <div
      className={`modal ${isModalOpen ? "show" : ""} ${
        darkTheme ? "dark" : ""
      }`}
    >
      <IoIosCloseCircle
        className="modal__close-btn"
        onClick={() => {
          setIsModalOpen(false);
        }}
      />
      <form action="" className="modal__form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" rows="6"></textarea>
        <button type="submit" className="modal__form__submit">
          Create
        </button>
      </form>
    </div>
  );
};
