import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { getCoinColors } from "../../helper/HelperFunctions";

const PieChart = (data: any) => {
  let colors = getCoinColors(data.data);
  return (
    <ResponsivePie
      data={data.data}
      innerRadius={0.5}
      margin={{ top: 25, right: 0, bottom: 25, left: 0 }}
      padAngle={0.9}
      cornerRadius={5}
      colors={colors}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="white"
      arcLinkLabelsThickness={1}
      arcLinkLabelsColor="white"
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="white"
    />
  );
};

export default PieChart;
