const ProductGrid = () => {
  const Products = [
    {
      id: 1,
      name: "Laptop",
      price: "25.000.000đ",
    },
    {
      id: 2,
      name: "Chuột",
      price: "500.000đ",
    },
    {
      id: 3,
      name: "Bàn phím",
      price: "1.500.000đ",
    },
    {
      id: 4,
      name: "Tai nghe",
      price: "2.000.000đ",
    },
    {
      id: 5,
      name: "Màn hình",
      price: "6.500.000đ",
    },
  ];
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-md">Sản phẩm</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-clos-3">
        {Products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-lg"
          >
            <div className="mb-3 flex h-32 items-center justify-center rounded-md bg-gray-100">
              {" "}
              📦
            </div>

            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="mt-2 font-bold text-blue-600">{product.price}</p>

            <button className="mt-auto w-full rounded-lg bg-green-600 py-2 text-center text-white hover:bg-green-700">
              Mua ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGrid;
