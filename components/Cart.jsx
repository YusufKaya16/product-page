export default function Cart({ isOpen, productList }) {
  return (
    <section className="cart" style={{ display: isOpen ? "block" : "none" }}>
      <header className="cart-header px-4 flex items-center">
        <h1 className="cart-title font-bold">Cart</h1>
      </header>
      <div className="line border border-black"></div>
      <div className="cart-items flex justify-center items-center">
        {productList.length === 0 && (
          <span className="items-text absolute">Your cart is empty</span>
        )}
        <ul className="cart-items-list p-3 border border-red-800 w-full h-full">
          {productList.map((item, index) => (
            <li key={index} className="mb-3">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
