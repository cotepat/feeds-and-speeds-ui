interface Unit {
  formatting: (val: number) => string;
  unit: string;
}

const fixedDigits = (precision: number) => {
  return (val: number) => val.toFixed(precision);
};

const fixedDigitsPercent = (precision: number) => {
  return (val: number) => (val * 100).toFixed(precision);
};
export const units: Record<string, Unit> = {
  chipload: { formatting: fixedDigits(3), unit: "mm" },
  woc: { formatting: fixedDigits(3), unit: "mm" },
  doc: { formatting: fixedDigits(3), unit: "mm" },
  rpm: { formatting: fixedDigits(3), unit: "rpm" },
  maxAcceptableDeflection: { formatting: fixedDigits(3), unit: "mm" },
  cutterDiameter: { formatting: fixedDigits(3), unit: "mm" },
  materialKFactor: { formatting: fixedDigits(1), unit: "" },
  cutterFlutes: { formatting: fixedDigits(0), unit: "" },
  maximumMachineForce: { formatting: fixedDigits(3), unit: "N" },
  routerOutputPower: { formatting: fixedDigits(3), unit: "kW" },
  cutterOverallStickout: { formatting: fixedDigits(3), unit: "mm" },    
  cutterYoungsModulus: { formatting: fixedDigits(3), unit: "N/mm^2" },
  cutterShankDiameter: { formatting: fixedDigits(3), unit: "mm" },
  cutterLength: { formatting: fixedDigits(3), unit: "mm" },
  adjustedChipload: { formatting: fixedDigits(3), unit: "mm" },
  feedrate: { formatting: fixedDigits(0), unit: "mm/min" },
  materialRemovalRate: { formatting: fixedDigits(3), unit: "cm^3/min" },
  powerUsage: { formatting: fixedDigits(3), unit: "kW" },
  torque: { formatting: fixedDigits(3), unit: "N*m" },
  machineForce: { formatting: fixedDigits(3), unit: "N" },
  machineForcePercent: { formatting: fixedDigitsPercent(1), unit: "%" },
  availablePowerPercent: { formatting: fixedDigitsPercent(1), unit: "%" },
  routerCutterPowerIncrease: { formatting: fixedDigits(3), unit: "mm" },
  maxDeflection: { formatting: fixedDigits(3), unit: "mm" },
  maxDeflectionPercent: { formatting: fixedDigitsPercent(1), unit: "%" },
  count: { formatting: fixedDigits(0), unit: "" },
};
