import { Link } from "react-router-dom";
import logo from "../../assets/polarfox_logo3gamerw.png";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import SignUp from "../Auth/SignUp";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/userSlice";
import SignIn from "../Auth/SignIn";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(selectToken);
  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Modal isOpen={isOpen} setModal={handleOpenModal}>
        {token == "" ? <SignUp /> : <SignIn />}
      </Modal>
      <div className="flex justify-between align-middle text-3xl h-28 font-normal font-vt bg-ligh-black text-light-white overflow-hidden border-b-2 px-28">
        <div className="flex items-center justify-between w-1/3">
          <Link className="justify-self-end pl-32">PC Konfigurátor</Link>
          <div className="w-1 h-screen self-center bg-light-white rotate-12"></div>
        </div>
        <Link className="flex items-between w-1/3 justify-evenly">
          <img
            className="h-32 object-contain"
            src={logo}
            alt="polar fox logo"
          />
        </Link>
        <div className="flex items-center w-1/3 justify-between">
          <div className="w-1 h-screen self-center bg-light-white rotate-12"></div>
          <Link className="px-24">Perifériák</Link>
          <div className="w-1 h-screen self-center bg-light-white rotate-12"></div>
          <button onClick={handleOpenModal} className="self-center">
            <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
          </button>
          <button onClick={handleOpenModal} className="self-center">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fff" }} />
          </button>
        </div>
      </div>
    </>
  );
}
