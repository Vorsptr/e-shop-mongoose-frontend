import CategoryButton from "../../components/button/CategoryButton";
import CategoryCard from "../../components/categoryCards/CategoryCard";

export default function Category() {
  return (
    <>
      <div className="w-2/3 m-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-light-white font-semibold uppercase text-3xl font-vt">
            Válaszd ki a kategóriát
          </h2>
          <CategoryButton>Gamer</CategoryButton>
          <CategoryButton>Workstation</CategoryButton>
          <CategoryButton>ATX</CategoryButton>
        </div>
        <div className="flex justify-evenly">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </>
  );
}
