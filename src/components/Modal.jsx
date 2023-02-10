import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useMaintenance } from "../contexts/MaintenanceContext";
import { IoIosCloseCircle } from "react-icons/io";

export const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const [card, setCard] = useState({
    name: "",
    description: "",
  });

  const [darkTheme] = useTheme();
  const { addMaintenance } = useMaintenance();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setCard((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addMaintenance(card.name, card.description);
    setIsModalOpen(false);
    setCard({
      name: "",
      description: "",
    });
  }

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
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="modal__form"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={card.name}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="6"
          value={card.description}
          onChange={(e) => handleChange(e)}
        ></textarea>
        {/* <label htmlFor="last-date"></label>
        <input type="date" name="last-date" id="last-date" /> */}

        <button type="submit" className="modal__form__submit">
          Create
        </button>
      </form>
    </div>
  );
};
