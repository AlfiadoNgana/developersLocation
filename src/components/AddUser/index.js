import React, { Component } from 'react';
import Modal from 'react-modal';

import './style.css';

export default class AddUser extends Component {
  state = {
    modal: {
      isOpen: true,
    },
    userInput: '',
  };

  handleHideModal = () => {
    this.setState({ modal: { isOpen: false } });
  };

  handleUserInputChange = e => this.setState({ userInput: e.target.value });

  handleFormSubmit = e => e.preventDefault();

  render() {
    return (
      <Modal
        isOpen={this.state.modal.isOpen}
        onRequestClose={this.handleHideModal}
        contentLabel="Add User Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar Novo Usuario</h2>
        <form onSubmit={this.handleFormSubmit} className="form">
          <input
            placeholder="Usuario do github"
            value={this.state.userInput}
            onChange={this.handleUserInputChange}
          />
          <div className="buttons-container">
            <button type="button" onClick={this.handleHideModal}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Modal>
    );
  }
}
