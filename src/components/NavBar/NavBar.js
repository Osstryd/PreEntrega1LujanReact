import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#2c3e50",
        borderBottom: "2px solid #e74c3c",
      }}
    >
      <h3
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "#ecf0f1",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Nadir
      </h3>
      <div style={{ display: "flex" }}>
        <button
          style={{
            padding: "8px 16px",
            margin: "0 8px",
            backgroundColor: "#3498db",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          Remeras
        </button>
        <button
          style={{
            padding: "8px 16px",
            margin: "0 8px",
            backgroundColor: "#e67e22",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          Hoodies
        </button>
        <button
          style={{
            padding: "8px 16px",
            margin: "0 8px",
            backgroundColor: "#9b59b6",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          Jeans
        </button>
      </div>
      <CartWidget itemCount={0} />
    </nav>
  );
};

export default NavBar;
