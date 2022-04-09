import { BackdropDiv, ModalDiv } from './Modal.styles';
import ReactDOM from 'react-dom';

interface BackdropProps {
  onClose: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return(<BackdropDiv onClick={props.onClose}></BackdropDiv>);
}

interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay = (props: ModalOverlayProps) => {
  return(
    <ModalDiv>
      <div>{props.children}</div>
    </ModalDiv>
  );
}

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const portalElement = document.getElementById('overlays')!;

const Modal = (props: ModalProps) => {
  return(
    <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;