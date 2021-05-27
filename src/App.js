import "./App.css";
import data from "./data.js";
import SearchBar from "./components/SearchBar";
import Products from "./components/Products";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";

function contains(title, str) {
  str = str.toLowerCase();
  title = title.toLowerCase();
  return title.includes(str);
}

function App() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState(data);

  const [displayedResults, setDisplayedResults] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    handleQueryChange();
    setTimeout(() => setLoading(false), 1000);
  }, [query]);

  const handleQueryChange = () => {
    if (query === "") {
      setProducts(data);
      return;
    }

    let newProducts = data.filter((product) => contains(product.title, query));
    setTotalResults(newProducts.length);
    setDisplayedResults(newProducts.length);

    if (newProducts.length > 4) {
      setDisplayedResults(4);
      newProducts = newProducts.slice(0, 4);
      setProducts(newProducts);
      console.log("new" + newProducts);
      return;
    }

    setProducts(newProducts);
  };

  return (
    <div className="app">
      <SearchBar
        query={query}
        setQuery={setQuery}
        displayedResults={displayedResults}
        totalResults={totalResults}
        loading={loading}
      />
      {loading ? (
        <Loading />
      ) : (
        <Products products={products} loading={loading} />
      )}
    </div>
  );
}

export default App;
