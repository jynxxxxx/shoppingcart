import { useState, useEffect } from "react";

export default function UseProductData() {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Server error');
        }
        return response.json();
      })
      .then((response) => {
        function capitalizeFirstLetter(str) {
          return str
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }

        const formattedData = response.map((product) => {
          return {
            ...product,
            title: capitalizeFirstLetter(product.title),
            category: capitalizeFirstLetter(product.category),
            price: "$"+parseFloat(product.price).toFixed(2)
          };
        });

        setProductData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { productData, error, loading };
}

export {UseProductData}

