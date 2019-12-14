import { TOGGLE_ADD_SHOP_MODAL } from '../actions/addShop';

const initialState = {
  modal: false
};

export default (state = initialState, action) => {
  const { type, modal } = action;
  console.log('reducer type =>', type);
  console.log('reducer state =>', state);
  console.log('reducer modal =>', modal);

  switch (type) {
    case TOGGLE_ADD_SHOP_MODAL:
      const kk = Object.assign({}, state, { modal });
      console.log('kkk', kk);
      return kk
    default:
      return state;
  }
};
