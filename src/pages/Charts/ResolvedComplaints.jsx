import React from "react";

import { ChartsHeader, ResolvedComplaints as StackedChart } from "../../components";

const ResolvedComplaints = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="ResolvedComplaints" title="Complaints" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default ResolvedComplaints;
