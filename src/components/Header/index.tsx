import { useState } from 'react';
import Modal from 'react-modal';

import Logo from '../../assets/logo.svg';

import { Container, Content } from "./styles";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />

        <button 
          type="button"
          onClick={handleOpenNewTransactionModal}
        >
          Nova transação
        </button>

        <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  )
}