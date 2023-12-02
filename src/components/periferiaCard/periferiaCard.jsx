export default function PeriferiaCard({ props }) {
  return (
    <>
      <div className="bg-light-white h-[250px] m-2 flex flex-col justify-center align-middle py-4 rounded w-1/5">
        <img className="object-contain" src={props.img} alt="keyboardimage" />
        <p className="font-bold m-auto text-center">{props.name}</p>
        <button className="bg-text-color text-light-white font-bold w-2/3 m-auto">
          -2333
        </button>
      </div>
    </>
  );
}
