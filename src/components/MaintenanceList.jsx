import { Card } from "./Card";
import { useMaintenance } from "../contexts/MaintenanceContext";

export const MaintenanceList = () => {
  const { maintenance } = useMaintenance();

  return (
    <div className="maintenance-list">
      {maintenance.map((value) => {
        return (
          <Card
            key={value.id}
            id={value.id}
            name={value.name}
            description={value.description}
            lastDate={value.lastDate}
            spanDate={value.spanDate}
            spanDateFormat={value.spanDateFormat}
          />
        );
      })}
    </div>
  );
};
