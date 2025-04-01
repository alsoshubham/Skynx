export default function RefundPolicy() {
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
        Refund Policy
      </h1>
      <h2 style={sectionTitleStyle}>Eligibility for Refunds</h2>
      <p style={paragraphStyle}>
        Refunds are available within 7 days of purchase. To be eligible, the
        product must be unused and in the same condition you received it.
      </p>
      <h2 style={sectionTitleStyle}>Non-Refundable Items</h2>
      <ul style={listStyle}>
        <li>Downloadable or digital products once accessed</li>
        <li>Services once work has begun</li>
      </ul>
      <h2 style={sectionTitleStyle}>How to Request a Refund</h2>
      <p style={paragraphStyle}>
        Email us at <strong>skynglobalexportprivatelimited@gmail.com</strong>{" "}
        with your order ID, reason for the request, and any supporting documents
        or screenshots.
      </p>
      <h2 style={sectionTitleStyle}>Processing Time</h2>
      <p style={paragraphStyle}>
        Approved refunds are processed within 5–10 business days via the
        original payment method.
      </p>
    </div>
  );
}