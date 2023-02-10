import { useState } from "react";
import { UtilBar } from "./components/UtilBar";
import { MaintenanceList } from "./components/MaintenanceList";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <UtilBar setIsModalOpen={setIsModalOpen} />
      <MaintenanceList />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div
        className={`overlay ${isModalOpen ? "show" : ""}`}
        onClick={() => setIsModalOpen(false)}
      ></div>
    </div>
  );
}

export default App;
