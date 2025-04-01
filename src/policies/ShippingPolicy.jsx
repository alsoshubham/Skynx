export default function ShippingPolicy() {
  const cardStyle = {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.8",
  };

  const sectionTitleStyle = {
    color: "#333",
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const paragraphStyle = {
    marginBottom: "15px",
    color: "#555",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "15px",
    color: "#555",
  };

  return (
    <div style={cardStyle}>
      <h1
        className="font-medium text-4xl  font-serif text-center text-[#0D0D0D] mb-12"
      >
        Shipping Policy
      </h1>
      <h2 style={sectionTitleStyle}>Order Processing</h2>
      <p style={paragraphStyle}>
        Orders are processed within 1–2 business days. You will receive a
        confirmation email with a tracking number.
      </p>
      <h2 style={sectionTitleStyle}>Shipping</h2>
      <p style={paragraphStyle}>
        We offer domestic and international shipping. Estimated delivery times:
      </p>
      <ul style={listStyle}>
        <li>3–7 days (domestic)</li>
        <li>7–15 days (international)</li>
      </ul>
      <h2 style={sectionTitleStyle}>Payment Methods</h2>
      <p style={paragraphStyle}>We accept major credit/debit cards, UPI, and digital wallets.</p>
      <h2 style={sectionTitleStyle}>Customer Support</h2>
      <p style={paragraphStyle}>
        For order issues, email us at{" "}
        <strong>skynglobalexportprivatelimited@gmail.com</strong>.
      </p>
    </div>
  );
}
