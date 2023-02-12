import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useMaintenance } from "../contexts/MaintenanceContext";
import { IoIosCloseCircle } from "react-icons/io";

export const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const [card, setCard] = useState({
    name: "",
    description: "",
    lastDate: "",
    spanDate: "",
    spanDateFormat: "day",
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
    addMaintenance(
      card.name,
      card.description,
      card.lastDate,
      card.spanDate,
      card.spanDateFormat
    );
    setIsModalOpen(false);
    setCard({
      name: "",
      description: "",
      lastDate: "",
      spanDate: "",
      spanDateFormat: "day",
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
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={card.name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            value={card.description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        {/* Date picker input */}
        <div className="modal__form__time-input">
          <div className="input-group">
            <label htmlFor="lastDate">Last Maintenance</label>
            <input
              required
              name="lastDate"
              id="lastDate"
              type="date"
              value={card.lastDate}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="spanDate">Time Span</label>
            <input
              required
              type="number"
              name="spanDate"
              id="spanDate"
              value={card.spanDate}
              onChange={(e) => handleChange(e)}
            />
            <select
              required
              name="spanDateFormat"
              id="spanDateFormat"
              value={card.spanDateFormat}
              onChange={(e) => handleChange(e)}
            >
              <option value="day">{card.spanDate >= 2 ? "days" : "day"}</option>
              <option value="week">
                {card.spanDate >= 2 ? "weeks" : "week"}
              </option>
              <option value="month">
                {card.spanDate >= 2 ? "months" : "month"}
              </option>
              <option value="year">
                {card.spanDate >= 2 ? "years" : "year"}
              </option>
            </select>
          </div>
        </div>

        <button type="submit" className="modal__form__submit">
          Create
        </button>
      </form>
    </div>
  );
};
