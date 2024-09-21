export default function Cart({ isOpen }) {
  const productList = [];
  return (
    <section className="cart" style={{ display: isOpen ? "block" : "none" }}>
      <header className="cart-header px-4 flex items-center">
        <h1 className="cart-title font-bold">Cart</h1>
      </header>
      <div className="line border border-black"></div>
      <div className="cart-items flex justify-center items-center w-full overflow-y-hidden">
        {productList.length === 0 && (
          <span className="items-text">Your cart is empty</span>
        )}
        <ul className="cart-items-list"></ul>
      </div>
    </section>
  );
}
