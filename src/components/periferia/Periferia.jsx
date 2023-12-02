import { useCallback, useEffect, useState } from "react";
import keyboard from "../../assets/keyboard.png";
import mouse from "../../assets/mouse.png";
import PeriferiaCard from "../periferiaCard/periferiaCard";
import pagination from "../../services/helpers/pagination";
const KEYBOARD_PERIFERIA = [
  {
    type: "keyboard",
    name: "Keychron V6",
    price: 3500,
    img: keyboard,
  },
  {
    type: "keyboard",
    name: "Keychron V6",
    price: 3500,
    img: keyboard,
  },
  {
    type: "keyboard",
    name: "Keychron V6",
    price: 3500,
    img: keyboard,
  },
  {
    type: "keyboard",
    name: "Keychron V6",
    price: 3500,
    img: keyboard,
  },
  {
    type: "keyboard",
    name: "Keychron V6",
    price: 3500,
    img: keyboard,
  },
  {
    type: "keyboard",
    name: "Keychron V6",
    price: 3500,
    img: keyboard,
  },
];

const MOUSE_PERIFERIA = [
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
  {
    type: "mouse",
    name: "Razer Deathadder V2 X",
    price: 2500,
    img: mouse,
  },
];
const LIMIT = 5;
export default function Periferia() {
  const [mouse, setMouse] = useState(MOUSE_PERIFERIA[0]);
  const [keyboard, setKeyboard] = useState(KEYBOARD_PERIFERIA[0]);
  const [keyBoardPage, setKeyBoardPage] = useState(0);
  const [mousePage, setMousePage] = useState(0);
  const [mouses, setMouses] = useState(
    pagination(Array.from(MOUSE_PERIFERIA), mousePage, LIMIT)
  );
  const [keyboards, setKeyboards] = useState(
    pagination(Array.from(KEYBOARD_PERIFERIA), keyBoardPage, LIMIT)
  );
  const handleNextPage = useCallback(
    (e) => {
      const { value } = e.target.attributes.datatype;
      if (value === "keyboard") {
        setKeyBoardPage((prev) => prev + 1);
      } else if (value === "mouse") {
        setMousePage((prev) => prev + 1);
      }
    },
    [keyBoardPage, mousePage]
  );
  const handlePrevPage = useCallback(
    (e) => {
      const { value } = e.target.attributes.datatype;
      if (value === "keyboard") {
        setKeyBoardPage((prev) => prev - 1);
      } else if (value === "mouse") {
        setMousePage((prev) => prev - 1);
      }
    },
    [keyBoardPage, mousePage]
  );
  useEffect(() => {
    setKeyboards(
      pagination(Array.from(KEYBOARD_PERIFERIA), keyBoardPage, LIMIT)
    );
    setMouses(pagination(Array.from(MOUSE_PERIFERIA), mousePage, LIMIT));
  }, [handleNextPage]);
  return (
    <>
      <div className="flex flex-col m-auto w-3/4">
        <h2 className="text-light-white font-vt text-4xl text-center mb-16 -mt-8">
          Állíts össze magadnak egy periféria szettet!
        </h2>
        <div className="flex align-middle justify-around font-vt gap-16">
          <div className="border border-light-white flex flex-col items-center text-center gap-4 font-semibold text-xl m-auto text-light-white px-4 py-2">
            <div className="flex">
              <img
                className="w-auto h-auto"
                src={keyboard.img}
                alt="keyboardimg"
              />
              <img className="w-auto h-auto" src={mouse.img} alt="mouseimg" />
            </div>
            <div>
              <p>{keyboard.name}</p>
              <p>+</p>
              <p>{mouse.name}</p>
            </div>
            <h3 className="text-4xl">
              Összesen: {keyboard.price + mouse.price} Ft
            </h3>
          </div>
          <div className="flex flex-col justify-around flex-1">
            <div className=" flex align-middle items-center justify-center gap-4 flex-1 relative">
              {keyboards.map((keyboard) => {
                return <PeriferiaCard props={keyboard} />;
              })}
              {keyBoardPage > 0 ? (
                <button
                  datatype="keyboard"
                  className="tex-ligth-white absolute -left-8 text-light-white"
                  onClick={handlePrevPage}
                >
                  Prev
                </button>
              ) : (
                ""
              )}
              {(keyBoardPage + 1) * LIMIT < KEYBOARD_PERIFERIA.length && (
                <button
                  datatype="keyboard"
                  onClick={handleNextPage}
                  className="text-light-white"
                >
                  Next
                </button>
              )}
            </div>
            <div className=" flex align-middle items-center justify-center gap-4 flex-1 relative">
              {mouses.map((mouse) => {
                return <PeriferiaCard props={mouse} />;
              })}
              {mousePage > 0 ? (
                <button
                  datatype="mouse"
                  className="tex-ligth-white absolute -left-8 text-light-white"
                  onClick={handlePrevPage}
                >
                  Prev
                </button>
              ) : (
                ""
              )}
              {(mousePage + 1) * LIMIT < MOUSE_PERIFERIA.length && (
                <button
                  datatype="mouse"
                  onClick={handleNextPage}
                  className="text-light-white"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
