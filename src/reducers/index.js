import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import weatherReducer from "./weatherReducer";
import citiesReducer from "./citiesReducer";
import stateListReducer from "./stateListReducer";
import selectedRegionReducer from "./selectedRegionReducer";
import selectedStateReducer from "./selectedStateReducer";

export default combineReducers({
  images: imageReducer,
  weathers: weatherReducer,
  cities: citiesReducer,
  stateList: stateListReducer,
  selectedRegion: selectedRegionReducer,
  selectedState: selectedStateReducer,
});
