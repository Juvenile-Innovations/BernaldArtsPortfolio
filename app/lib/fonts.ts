import {
  Anton,
  Poppins,
  Elsie_Swash_Caps,
  Ms_Madi,
} from "next/font/google";

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const elsie = Elsie_Swash_Caps({
  weight: "900",
  subsets: ["latin"],
});

export const msMadi = Ms_Madi({
  weight: "400",
  subsets: ["latin"],
});