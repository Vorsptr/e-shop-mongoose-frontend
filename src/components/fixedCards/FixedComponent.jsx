import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faAward,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function FixedComponent() {
  return (
    <>
      <div className="flex align-middle items-center justify-between  text-grey-color m-auto w-4/6 gap-8 mt-8 font-semibold font-vt tracking-widest uppercase">
        <div className="w-1/3 flex flex-col align-middle items-center gap-4">
          <p>
            <FontAwesomeIcon
              icon={faAward}
              style={{ color: "#fff" }}
              size="xl"
            />
          </p>
          <p>
            Minden számítógépünkre{" "}
            <span className="font-bold italic text-light-white">
              3 év teljeskörű granciát, 3 hónap PolarFox Upgrade Premium{" "}
            </span>
            és{" "}
            <span className="font-bold italic text-light-white">
              7 hónap Polar Fox Upgrade{" "}
            </span>
            szolgáltatást biztosítunk.
          </p>
        </div>
        <div className="w-1/3 flex flex-col align-middle items-center gap-4">
          <p>
            <FontAwesomeIcon
              icon={faTruckFast}
              style={{ color: "#fff" }}
              size="xl"
            />
          </p>
          <p>
            Válaszd az{" "}
            <span className="font-bold italic text-light-white">
              Express összeszerelés{" "}
            </span>
            szolgáltatásunkat és{" "}
            <span className="font-bold italic text-light-white">
              legfeljebb 3 munkanapon belül{" "}
            </span>
            már úton lesz a rendelésed.
          </p>
        </div>
        <div className="w-1/3 flex flex-col align-middle items-center gap-4">
          <p>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#fff" }}
              size="xl"
            />
          </p>
          <p>
            Minden számítógépünk többlépcsős hardveres és szoftveres tesztelési
            folyamaton esik át, biztosítva a{" "}
            <span className="font-bold italic text-light-white">
              PolarFox minőséget.{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
