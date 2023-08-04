import cart from "./assets/cart.svg";

const CartWidget = ({ itemCount }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", position: "relative" }}
    >
      <img
        src={cart}
        alt="Cart-widget"
        style={{
          width: "40px",
          height: "40px",
          marginRight: "10px",
          animation: "spin 2s linear infinite",
        }}
      />
      <span
        style={{
          backgroundColor: "#e74c3c",
          color: "#fff",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          position: "absolute",
          top: "-15px",
          right: "0",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        {itemCount}
      </span>
      <p
        style={{
          fontSize: "18px",
          color: "#2c3e50",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Tu carrito
      </p>
    </div>
  );
};

export default CartWidget;
