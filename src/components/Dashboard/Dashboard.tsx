import React from "react";
import DashboardHeader from "./DashboardHeader";
import TabsComponent from "../TabsComponent";
import OverviewTabContent from "../OverviewTabContent/OverviewTabContent";

function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <TabsComponent />
      <OverviewTabContent />
    </div>
  );
}

export default Dashboard;
