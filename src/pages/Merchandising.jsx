import { useState, useEffect } from "react";
import axios from "axios";
import { useSpinner, Spinner } from "../context/LoadingContext";
import ProductsLayout from "../components/products/ProductsLayout";
import ProductsCard from "../components/products/ProductsCard";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
// import ProductsNav from "../products/ProductsNav";
import ProductsDetail from "../components/productsDetail/ProductsDetail";
import CheckSideMenu from "../components/checkSideMenu/CheckSideMenu";

function Merchandising() {
  const [items, setItems] = useState([]);
  const { loading, setLoading } = useSpinner();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const extraPath = '/products';
        const fullUrl = `${apiUrl}${extraPath}`;
        const response = await axios.get(fullUrl);
        setItems(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setLoading]);

  return (
    <>
      <Header />
      <div>
        <Spinner />
        {!loading && (
          <>
            {/* <ProductsNav /> */}
            <ProductsLayout>
              <h2 className="text-xl font-medium mb-2">
                Productos para fanáticos y seguidores del CDCA
              </h2>
              <div className="mx-auto">
                <div className="2xl:grid 2xl:grid-cols-5 2xl:w-full 2xl:max-w-screen-2xl xl:grid xl:grid-cols-4 xl:w-full xl:max-w-screen-lg lg:grid lg:grid-cols-4 lg:w-full lg:max-w-screen-lg md:grid md:grid-cols-3 md:w-full md:max-w-screen-md sm:grid sm:grid-cols-2 sm:w-full sm:justify-center">
                  {items
                    .filter(item => item.category === "Merchandising")
                    .map(filteredItem => (
                      <div key={filteredItem._id}>
                        <ProductsCard data={filteredItem} />
                      </div>
                    ))}
                </div>
              </div>
              <ProductsDetail />
              <CheckSideMenu />
            </ProductsLayout>
          </>
        )}
      </div>
      <Footer />

      {/* Call to Action Button */}
      <button className="fixed bottom-5 right-5 bg-blue-500 text-white py-2 px-4 rounded shadow-lg transform hover:bg-blue-700 hover:-translate-y-1 transition duration-300">
        <a href="mailto:cd@la.com" >
          ¿Interesado? Haga click aquí para más información
        </a>
      </button>
    </>
  );
}



export default Merchandising;
