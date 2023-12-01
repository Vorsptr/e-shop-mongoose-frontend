import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DarkWhite() {
  return (
    <div className="flex justify-end bg-auto sticky mx-4 my-1">
      <button className="flex gap-1 align-middle text-text-color font-semibold text-sm">
        <span>
          <FontAwesomeIcon icon={faMoon} style={{ color: "#0f0f10" }} />
        </span>
        Dark Mode
      </button>
    </div>
  );
}
