export const TOGGLE_ADD_SHOP_MODAL = 'TOGGLE_ADD_SHOP_MODAL';
export const SELECT_TIME = 'SELECT_TIME';
export const SAVE_NEW_SHOP = 'SAVE_NEW_SHOP';

export const toggle = modal => ({
  type: TOGGLE_ADD_SHOP_MODAL,
  modal
});

export const saveNewShop = (shop_work, modal) => {
  console.log('shop_work', shop_work);
  console.log('modal', modal);
  return {
    type: TOGGLE_ADD_SHOP_MODAL,
    modal
  };
};

export const selectTime = (value, day, type) => {
  if (type === 'open') {
    return {
      type: SELECT_TIME,
      open_time: value,
      shop_work_day: day
    };
  }

  return {
    type: SELECT_TIME,
    close_time: value,
    shop_work_day: day
  };
};
