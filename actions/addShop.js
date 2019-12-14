export const TOGGLE_ADD_SHOP_MODAL = 'TOGGLE_ADD_SHOP_MODAL';
export const SELECT_TIME = 'SELECT_TIME';
export const SAVE_NEW_SHOP = 'SAVE_NEW_SHOP';

export const toggle = modal => ({
  type: TOGGLE_ADD_SHOP_MODAL,
  modal
});

export const selectTime = (value, day, type) => {
  return {
    type: SELECT_TIME,
    shop_time: value,
    shop_day: day
  };
};
