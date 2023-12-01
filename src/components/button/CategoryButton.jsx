export default function CategoryButton({ children, ...props }) {
  return (
    <button className="bg-light-white py-4 px-16 rounded-sm font-semibold font-vt tracking-widest text-xl">
      {children}
    </button>
  );
}
