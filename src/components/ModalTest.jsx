import Modal from '7pingolu-modal-package-test';

const ModalTest = (props) => {
    return <Modal isOpen={props.isOpen} />
}

export default ModalTest;





// Original Code

// export default function Modal({ children, isOpen, onClose, textContent }) {

//       if (!isOpen) return null

//       return ReactDOM.createPortal(
//         <div className="modalbackground">
//           <div className="modalcontent">
//             <p>{textContent}</p>
//             <button onClick={onClose}>Close</button>
//           </div>
//         </div>,
//         document.body
//       )
//     }