import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const create_picker = selectTime => {
  const day_picker = [];
  for (let day = 1; day < 8; day++) {
    day_picker.push(
      <div key={day}>
        <label
          htmlFor={`booking-time-${day}`}>{`選擇週${day}營業時間: `}</label>
        <input
          type='time'
          onChange={event => selectTime(event.target.value, day, 'open')}
          id={`booking-time-${day}-start`}
          name={`booking-time-${day}`}
        />
        <input
          type='time'
          onChange={event => selectTime(event.target.value, day, 'close')}
          id={`booking-time-${day}-end`}
          name={`booking-time-${day}`}
        />
      </div>
    );
  }
  return day_picker;
};

const App = ({ modal, shop_work, saveNewShop, selectTime, toggle }) => (
  <div className='add-shop-modal'>
    <Button color='primary' onClick={() => toggle(!modal)}>
      Add
    </Button>
    <Modal isOpen={modal} toggle={() => toggle(!modal)}>
      <ModalHeader toggle={() => toggle(!modal)}>Add New Shop</ModalHeader>
      <ModalBody>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>餐廳名稱</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        {create_picker(selectTime)}
      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={() => saveNewShop(shop_work, !modal)}>
          Save
        </Button>{' '}
        <Button color='secondary' onClick={() => toggle(!modal)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);

App.defaultProps = {
  modal: false
};

App.propTypes = {
  toggle: PropTypes.func.isRequired,
  saveNewShop: PropTypes.func.isRequired,
  selectTime: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired
};

export default App;
