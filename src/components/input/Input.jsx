export default function Input({ title, ...props }) {
  return (
    <>
      <label className="font-medium text-sm">{title}</label>
      <input
        className="rounded-md py-1 px-2 text-ligh-black font-semibold"
        {...props}
      />
    </>
  );
}
