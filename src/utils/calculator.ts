import { MathNodeCommon } from "mathjs";

export const adjusted_chipload = (
  woc: number,
  cutter_diameter: number
): string => {
  if (woc > cutter_diameter / 2) {
    return "chipload";
  } else {
    return "(cutter_diameter * chipload) / (2 * sqrt((cutter_diameter * woc) - woc^2))";
  }
};

// return self.chipload
// else:
// return (self.cutter.diameter * self.chipload) / (
//   2.0 * sqrt((self.cutter.diameter * self.woc) - pow(self.woc, 2))
// )