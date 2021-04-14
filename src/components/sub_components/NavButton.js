import React, { useState } from 'react';
import Menu from './Menu';
import  {  Modal, Button  } from 'antd';

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
      
      <Modal className="NavButtonModal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Menu className="MenuStyle"></Menu>
      </Modal>
    </>
  );
  }

export default NavButton;