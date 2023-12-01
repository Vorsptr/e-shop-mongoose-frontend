import { Link } from "react-router-dom";
export default function PolicyHeader() {
  return (
    <>
      <div className="flex justify-between align-middle bg-grey-color py-1 px-8 text-light-white font-raleway bottom-0 w-full m-auto text-xs">
        <div className="flex justify-between gap-32">
          <Link to={""}>Kapcsolat</Link>
          <Link to={""}>Szállítás & Fizetés</Link>
        </div>
        <div className="flex justify-between gap-32 align-middle">
          <Link to={""}>Adatvédelmi nyilatkozat</Link>
          <Link to={""}>ÁSZF</Link>
        </div>
      </div>
    </>
  );
}
