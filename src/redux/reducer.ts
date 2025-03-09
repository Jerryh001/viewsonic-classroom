import { combineSlices } from "@reduxjs/toolkit";
import { api } from "./api/baseApi";
import { layoutSlice } from "./slices";

export const reducer = combineSlices(api, layoutSlice);
