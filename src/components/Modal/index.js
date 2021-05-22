function Modal({ onClose, currentPhoto}) {
  const {name, category, description, index} = currentPhoto;
  const {default: source} = require(`../../assets/large/${category}/${index}.jpg`);
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={source}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;