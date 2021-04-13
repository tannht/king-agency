import React, { useState } from 'react';
import {  Modal, Button  } from 'antd';
import Menu from './Menu';

function NavButton() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
      <i className="fas fa-bars"></i>
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Menu />
        
      </Modal>
    </>
  );
};

export default NavButton;