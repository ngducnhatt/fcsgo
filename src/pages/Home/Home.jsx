import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import ProductListSection from "../../components/ProductListSection/ProductListSection";

const Home = ({ categories, dataMap }) => {
  return (
    <div>
      <CategoryNavigation categories={categories} />
      {categories.map((section) => (
        <ProductListSection
          key={section.id}
          id={section.id}
          title={section.title}
          products={dataMap[section.dataKey]}
        />
      ))}
    </div>
  );
};

export default Home;
