import { useContext, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const MaintenanceContext = createContext();

export function useMaintenance() {
  return useContext(MaintenanceContext);
}

export const MaintenanceProvider = ({ children }) => {
  const [maintenance, setMaintenance] = useState([]);

  function addMaintenance(name) {
    setMaintenance((prevMaintenance) => {
      return [
        ...prevMaintenance,
        {
          id: uuidv4(),
          name: name,
        },
      ];
    });
  }

  function deleteMaintenance(id) {
    setMaintenance((prevMaintenance) => {
      return prevMaintenance.filter((maintenance) => maintenance.id !== id);
    });
  }

  return (
    <MaintenanceContext.Provider
      value={{ maintenance, addMaintenance, deleteMaintenance }}
    >
      {children}
    </MaintenanceContext.Provider>
  );
};
