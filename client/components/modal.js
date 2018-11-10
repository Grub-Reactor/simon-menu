import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('#app'))

class MenuModal extends React.Component {
  constructor(props) {
    super(props)
  
   
  }

  render() {
    return (
      <div className = 'modal'>
        <Modal
          isOpen={this.props.a}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.toggleModal}>close</button>
          <div>Schedule my order</div>
          <form>
            <input />
            <p>Select a delivery time up to 4 days in advance</p>
            <button>ASAP</button>
            <button>Today</button>
            <button>Later</button>
            <button>At 10:45am</button>
            <label><h3>Delivery address</h3></label>
            <input placeholder = 'Street Address, City State'></input>
          </form>
        </Modal>
      </div>
    );
  }
}

export default MenuModal;
