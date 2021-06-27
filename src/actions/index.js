import GeoCities from "../apis/geocities";
import OpenWeather from "../apis/openweather";
import Unsplash from "../apis/unsplash";

export const requestAllInfo = (code) => async (dispatch, getState) => {
  const [country, region] = code.split("-");
  await dispatch(requestCity(country, region));
  await dispatch(requestWeather(getState().cities));
  const usState = getState().stateList.filter(
    (state) => state.code === code
  )[0];
  dispatch(requestImage(usState));
};

export const requestCity = (country, region) => async (dispatch) => {
  const response = await GeoCities.get(`/${country}/regions/${region}/cities`);

  dispatch({ type: "FETCH_CITIES", payload: response.data.data });
};

export const requestWeather = (stateCities) => async (dispatch) => {
  const citiesWeather = await Promise.all(
    stateCities.map(async (city) => {
      const weather = await OpenWeather.get("/weather", {
        params: {
          q: city["city"],
        },
      });
      return weather.data;
    })
  );

  dispatch({ type: "FETCH_WEATHERS", payload: citiesWeather });
};

export const requestImage = (usState) => async (dispatch) => {
  const images = await Unsplash.get(`search/photos`, {
    params: {
      query: usState.state,
      per_page: 30,
    },
  });
  console.log(images.data.results);

  dispatch({ type: "FETCH_IMAGES", payload: images.data.results });
};

export const selectRegion = (code) => {
  return { type: "SELECT_REGION", payload: code };
};

export const selectState = (state) => {
  return { type: "SELECT_STATE", payload: state };
};
