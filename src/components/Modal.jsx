import ReactDOM from 'react-dom';



export default function Modal({ children, isOpen, onClose, textContent }) {

      if (!isOpen) return null

      return ReactDOM.createPortal(
        <div className="modalbackground">
          <div className="modalcontent">
            <p>{textContent}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.body
      )
    }