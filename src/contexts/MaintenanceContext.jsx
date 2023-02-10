import { useContext, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

const MaintenanceContext = createContext();

export function useMaintenance() {
  return useContext(MaintenanceContext);
}

export const MaintenanceProvider = ({ children }) => {
  const [maintenance, setMaintenance] = useLocalStorage("maintenance", []);

  function addMaintenance(
    name,
    description,
    lastDate,
    spanDate,
    spanDateFormat
  ) {
    setMaintenance((prevMaintenance) => {
      return [
        ...prevMaintenance,
        {
          id: uuidv4(),
          name: name,
          description: description,
          lastDate: lastDate,
          spanDate: spanDate,
          spanDateFormat: spanDateFormat,
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
