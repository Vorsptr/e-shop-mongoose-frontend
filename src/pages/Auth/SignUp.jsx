import Input from "../../components/input/Input";

export default function SignUp() {
  return (
    <>
      <div className="w-96 h-96 bg-grey-color py-8 px-4 text-light-white">
        <h3 className="text-light-white font-semibold text-2xl text-center pb-8">
          Regisztráció
        </h3>
        <form
          action=""
          className="flex flex-col align-middle justify-center gap-2"
        >
          <Input title={"Email"} />
          <Input title={"Jelszó"} />
          <Input title={"Jelszó ismét"} />
          <button
            className="mt-5 bg-light-white w-28 self-center text-ligh-black rounded-md font-semibold"
            type="submit"
          >
            Regisztráció
          </button>
        </form>
      </div>
    </>
  );
}
