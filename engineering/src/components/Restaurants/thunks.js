import {
  loadRestaurantsFail,
  loadRestaurantsInProgress,
  loadRestaurantsSuccess,
} from './actions';

export const loadRestaurants = () => async (dispatch, getState) => {
  try {
    dispatch(loadRestaurantsInProgress());
    const request = await fetch(
      `http://opentable.herokuapp.com/api/restaurants?city=toronto`
      //`http://opentable.herokuapp.com/api/restaurants?city=${city}`
    );
    const response = await request.json();
    dispatch(loadRestaurantsSuccess(response));
  } catch (e) {
    dispatch(loadRestaurantsFail());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => alert(text);
