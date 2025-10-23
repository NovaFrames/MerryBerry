import React, { useEffect, useRef } from 'react';

const ChartWrapper = ({ children, chartId }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup when component unmounts
      if (canvasRef.current) {
        const chartInstance = canvasRef.current.chart;
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, []);

  return React.cloneElement(children, {
    ref: canvasRef,
    id: chartId
  });
};

export default ChartWrapper;