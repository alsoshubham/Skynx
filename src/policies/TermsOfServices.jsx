export default function TermsOfServices() {
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
        Terms of Services
      </h1>
      <ul style={listStyle}>
        <li>
          <strong>Acceptance of Terms:</strong> By accessing our website, you
          agree to be bound by these terms.
        </li>
        <li>
          <strong>Use of Website:</strong> You agree not to misuse the content
          or services provided.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All content is owned by us or
          licensed to us. You may not use it without permission.
        </li>
        <li>
          <strong>Liability Limitation:</strong> We are not liable for indirect
          or incidental damages arising from the use of our services.
        </li>
        <li>
          <strong>Governing Law:</strong> These terms are governed by the laws
          of New Delhi, India.
        </li>
      </ul>
    </div>
  );
}
