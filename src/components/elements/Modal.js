import { useEffect, useState } from 'react';
import { default as ReactModal } from 'react-modal';

ReactModal.setAppElement('#root');

export const Modal = (props) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const overlayStyles = {
    backgroundColor: '#000a'
  };

  const contentStyles = {
    inset: 'auto',
    minWith: '99vw',
    maxHeight: '80vh',
    overflow: 'visible',
    width: (props.size === 'lg' ? '90%' : props.size === 'md' ? '60%' : 'auto'),
    padding: '0',
    backgroundColor: '#111e',
    border: '1px solid #2f2c',
    boxShadow: '0px 0px 20px rgb(0, 0, 0, .4)',
  };

  useEffect(() => setIsOpen(props.isOpen[0]), [props]);

  const closeModal = () => {
    props.isOpen[0] = false;
    setIsOpen(false)
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={props.onRequestClose}
      closeTimeoutMS={300}
      style={{
        overlay: overlayStyles,
        content: contentStyles
      }}
    >
      <div className='h-layout justify-right'>
        <button className='btn--secondary' onClick={() => closeModal()}><i className='fa fa-times'></i></button>
      </div>
      <div className="container v-layout align-stretch" style={{paddingTop: '0'}}>
        {props.children}
      </div>
    </ReactModal>
  );
};
