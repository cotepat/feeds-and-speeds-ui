import { Store } from "@/utils/store";

export enum CutterMaterial {
  carbide = "carbide",
  hss = "hss",
  cobalt = "cobalt",
}

export interface Cutter {
  name: string;
  material: CutterMaterial;
  diameter: number;
  length: number;
  flutes: number;
  shankDiameter: number;
  overallStickout: number;
}

export const getYoungsModulus = (material: CutterMaterial): number => {
  if (material === CutterMaterial.carbide) {
    return 87000000.0 * 0.00689476;
  } else {
    return 30000000.0 * 0.00689476;
  }
};

export const cuttersStore = new Store<Cutter[]>("cutters", [
  {
    name: "201",
    material: CutterMaterial.carbide,
    diameter: 0.25 * 25.4,
    length: 0.75 * 25.4,
    flutes: 3,
    shankDiameter: 0.25 * 25.4,
    overallStickout: 1 * 25.4,
  },
  {
    name: "205e",
    material: CutterMaterial.carbide,
    diameter: 0.25 * 25.4,
    length: 1 * 25.4,
    flutes: 2,
    shankDiameter: 0.25 * 25.4,
    overallStickout: 1.25 * 25.4,
  },
]);
