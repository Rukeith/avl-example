import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddShopModal from '../components/AddShopModal';
import * as AddShopActions from '../actions/addShop';

const mapStateToProps = ({ addShop: { modal, shop_work } }) => ({
  modal,
  shop_work
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AddShopActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddShopModal);
