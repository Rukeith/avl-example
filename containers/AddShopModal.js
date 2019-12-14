import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddShopModal from '../components/AddShopModal';
import * as AddShopActions from '../actions/addShop';

const mapStateToProps = ({ addShop: { modal } }) => {
  console.log('containersvvv =>', modal);
  return { modal };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(AddShopActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddShopModal);
