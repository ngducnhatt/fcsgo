// src/context/ModalContext.jsx
import React, { createContext, useState, useContext, useCallback } from "react";
import Modal from "../components/Modal/Modal";

// 1. Tạo Context
const ModalContext = createContext();

// 2. Tạo Provider Component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = useCallback((content) => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    // Có thể thêm hiệu ứng chờ trước khi xóa content
    setTimeout(() => setModalContent(null), 300);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal isOpen={isModalOpen} onClose={closeModal} product={modalContent} />
    </ModalContext.Provider>
  );
};

// 3. Tạo custom hook để sử dụng context dễ dàng hơn
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
