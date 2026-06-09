const Products = () => {
  return (
    <section className="products">
      <h2>Trending Products</h2>

      <div className="product-container">

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
            alt=""
          />
          <h3>Premium T-Shirt</h3>
          <p>₹999</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
            alt=""
          />
          <h3>Stylish Jeans</h3>
          <p>₹1499</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
            alt=""
          />
          <h3>Fashion Jacket</h3>
          <p>₹2499</p>
        </div>

      </div>
    </section>
  );
};

export default Products;