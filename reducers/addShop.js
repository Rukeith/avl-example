import { TOGGLE_ADD_SHOP_MODAL, SELECT_TIME } from '../actions/addShop';

const initialState = {
  modal: false,
  shop_work: {}
};

export default (state = initialState, action) => {
  const { type, modal, shop_work_day, open_time, close_time } = action;

  switch (type) {
    case TOGGLE_ADD_SHOP_MODAL:
      return Object.assign({}, state, { modal });
    case SELECT_TIME:
      const shop_work = {};
      shop_work[shop_work_day] = {};
      if (close_time) {
        shop_work[shop_work_day].close_time = close_time;
      } else if (open_time) {
        shop_work[shop_work_day].open_time = open_time;
      }
      return Object.assign({}, state, { shop_work });
    default:
      return state;
  }
};
