import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Backdrop, ImageModal, Image } from './ModalStyle';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ largeImageURL, onClose }) {
    const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
    );
  
  const handleBackdropClick = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

   useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
   }, [handleKeyDown]);
  
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ImageModal>
        <Image src={largeImageURL} alt="Image" />
      </ImageModal>
    </Backdrop>,
    modalRoot
  );
}

Modal.prototype = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props;

//     return createPortal(
//       <Backdrop onClick={this.handleBackdropClick}>
//         <ImageModal>
//           <Image src={largeImageURL} alt="Image" />
//         </ImageModal>
//       </Backdrop>,
//       modalRoot
//     );
//   }
// }
