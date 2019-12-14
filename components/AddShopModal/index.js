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

const App = ({ modal, save, selectTime, toggle }) => (
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
        <div>
          <label for='booking-time-1'>選擇週一營業時間: </label>
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-1-start'
            name='booking-time-1'
          />
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-1-end'
            name='booking-time-1'
          />
        </div>
        <div>
          <label for='booking-time-2'>選擇週二營業時間: </label>
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-2-start'
            name='booking-time-2'
          />
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-2-end'
            name='booking-time-2'
          />
        </div>
        <div>
          <label for='booking-time-3'>選擇週三營業時間: </label>
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-3-start'
            name='booking-time-3'
          />
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-3-end'
            name='booking-time-3'
          />
        </div>
        <div>
          <label for='booking-time-4'>選擇週四營業時間: </label>
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-4-start'
            name='booking-time-4'
          />
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-4-end'
            name='booking-time-4'
          />
        </div>
        <div>
          <label for='booking-time-5'>選擇週五營業時間: </label>
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-5-start'
            name='booking-time-5'
          />
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-5-end'
            name='booking-time-5'
          />
        </div>
        <div>
          <label for='booking-time-6'>選擇週六營業時間: </label>
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-6-start'
            name='booking-time-6'
          />
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-6-end'
            name='booking-time-6'
          />
        </div>
        <div>
          <label for='booking-time-7'>選擇週日營業時間: </label>
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-7-start'
            name='booking-time-7'
          />
          <input
            type='time'
            onChange={event => selectTime(event.target.value)}
            id='booking-time-7-end'
            name='booking-time-7'
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={() => save(!modal)}>
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
  save: PropTypes.func.isRequired,
  selectTime: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired
};

export default App;
