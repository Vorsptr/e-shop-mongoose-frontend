import miniPc from "../../assets/minipc.png";

const DUMMI_ITEM = {
  img: miniPc,
  name: "Iridium Series T1",
  chassis: "Deepcool CH370",
  cpu: "Intel Core I5-13400F",
  mb: "Asus Prime B760M-A Wifi D4",
  memory: "Kingston Fury Beast 2x8GB 3200MT/s",
  gpu: "MSI RTX 4060 Gaming X",
  psu: "Seasonic G12 GC 550",
  venti: "Deepcool Ak400 Zero Dark",
  ssd: "Adata XPG SX8200 Pro 1TB",
  price: 429.99,
};

export default function CategoryCard(item) {
  return (
    <>
      <div className="font-vt text-light-white flex flex-col items-center gap-4">
        <img className="w-44" src={DUMMI_ITEM.img} alt="image from pc" />
        <h3 className="text-3xl font-bold tracking-widest">
          {DUMMI_ITEM.name}
        </h3>
        <div className="border-l-2 px-4">
          <ul className="list-none">
            <li>{DUMMI_ITEM.chassis}</li>
            <li>{DUMMI_ITEM.cpu}</li>
            <li>{DUMMI_ITEM.mb}</li>
            <li>{DUMMI_ITEM.memory}</li>
            <li>{DUMMI_ITEM.gpu}</li>
            <li>{DUMMI_ITEM.psu}</li>
            <li>{DUMMI_ITEM.venti}</li>
            <li>{DUMMI_ITEM.ssd}</li>
          </ul>
        </div>
        <h3 className="text-3xl font-semibold tracking-wider">
          Ár: {DUMMI_ITEM.price} Ft
        </h3>
        <div className="flex justify-between gap-4">
          <button className="py-2 px-4 bg-light-white text-text-color rounded-md font-semibold tracking-wider">
            Rendelés
          </button>
          <button className="py-2 px-4 bg-light-white text-text-color rounded-md font-semibold tracking-wider">
            Testreszabás
          </button>
        </div>
      </div>
    </>
  );
}
