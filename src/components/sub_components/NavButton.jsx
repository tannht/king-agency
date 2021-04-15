import React, { useState } from "react";
import Menu from "./Menu";
import { Modal, Button } from "antd";

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
    <div>
      <Button className="menu-collapse" type="primary" onClick={showModal}>
        <i className="fas fa-bars fa-2x"></i>
      </Button>

      <Modal
        className="NavButtonModal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Menu className="MenuStyle"></Menu>
      </Modal>
    </div>
  );
}

export default NavButton;
