import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ({ children, isOpen, setModal }) {
  const modal = useRef();
  useEffect(() => {
    if (isOpen) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog
      className="rounded-lg relative backdrop:text-ligh-black"
      ref={modal}
    >
      {children}
      <form method="dialog">
        <button
          className="absolute font-semibold py-2 px-2 top-0"
          onClick={setModal}
        >
          X
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
