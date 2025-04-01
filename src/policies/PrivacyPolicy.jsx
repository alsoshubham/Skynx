export default function PrivacyPolicy() {
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
        Privacy Policy
      </h1>
      <p style={paragraphStyle}>
        Welcome to Skynx! Your privacy is important to us, and we are committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, and safeguard your data when you visit our website,
        make a purchase, or interact with our services.
      </p>
      <p style={paragraphStyle}>
        By using Skynx’s website and services, you agree to the collection and
        use of your information as described in this policy. We ensure
        transparency in our data practices and comply with applicable privacy
        laws to provide a secure and trustworthy experience.
      </p>
      <p style={paragraphStyle}>
        If you have any questions or concerns about your privacy, feel free to
        contact us.
      </p>
      <h2 style={sectionTitleStyle}>Introduction</h2>
      <p style={paragraphStyle}>
        To provide the Services, we collect personal information about you from
        a variety of sources, as set out below. The information that we collect
        and use varies depending on how you interact with us.
      </p>
      <p style={paragraphStyle}>
        In addition to the specific uses set out below, we may use information
        we collect about you to communicate with you, provide or improve the
        Services, comply with any applicable legal obligations, enforce any
        applicable terms of service, and to protect or defend the Services, our
        rights, and the rights of our users or others.
      </p>
      <p style={paragraphStyle}>
        The types of personal information we obtain about you depend on how you
        interact with our Site and use our Services. When we use the term
        "personal information", we are referring to information that identifies,
        relates to, describes, or can be associated with you. The following
        sections describe the categories and specific types of personal
        information we collect.
      </p>
      <h2 style={sectionTitleStyle}>1. Personal Information</h2>
      <p style={paragraphStyle}>
        When you interact with our website or make a purchase, we may collect
        the following personal details:
      </p>
      <ul style={listStyle}>
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone number</li>
        <li>Billing and Shipping Address</li>
        <li>
          Payment Details (processed securely through third-party payment
          gateways)
        </li>
      </ul>
      <p style={paragraphStyle}>
        We use your personal information to provide you with the Services in
        order to perform our contract with you, including to process your
        payments, fulfill your orders, send notifications related to your
        account, purchases, returns, exchanges, or other transactions, to
        create, maintain, and manage your account, to arrange for shipping,
        facilitate any returns and exchanges, and other features and
        functionalities related to your account.
      </p>
      <h2 style={sectionTitleStyle}>2. Transaction Information</h2>
      <p style={paragraphStyle}>
        To process your orders and manage your account, we collect details such
        as:
      </p>
      <ul style={listStyle}>
        <li>Order History</li>
        <li>Purchase preferences</li>
        <li>Payment confirmations</li>
      </ul>
      <h2 style={sectionTitleStyle}>3. Technical & Usage Data</h2>
      <p style={paragraphStyle}>
        When you visit our website, we may automatically collect certain
        information to improve our services, such as:
      </p>
      <ul style={listStyle}>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device information (e.g., mobile or desktop)</li>
        <li>Pages visited, time spent, and interactions on the website</li>
        <li>
          Cookies and tracking technologies (for analytics and website
          performance)
        </li>
      </ul>
      <h2 style={sectionTitleStyle}>4. Communication Data</h2>
      <p style={paragraphStyle}>
        If you contact us via email, social media, or customer support, we may
        collect:
      </p>
      <ul style={listStyle}>
        <li>Your inquiries and messages</li>
        <li>Feedback and survey responses</li>
      </ul>
      <p style={paragraphStyle}>
        We use your personal information to provide you with customer support
        and improve our Services. This is in our legitimate interests to be
        responsive to you, provide effective services, and maintain our business
        relationship with you.
      </p>
      <h2 style={sectionTitleStyle}>5. Marketing & Promotional Data</h2>
      <p style={paragraphStyle}>
        If you subscribe to our newsletters or promotional offers, we may
        collect:
      </p>
      <ul style={listStyle}>
        <li>Your email preferences</li>
        <li>Engagement with marketing emails</li>
      </ul>
      <p style={paragraphStyle}>
        We may use your personal information for marketing and promotional
        purposes, such as to send marketing, advertising, and promotional
        communications by email, text message, or postal mail, and to show you
        advertisements for products or services. This may include using your
        personal information to better tailor the Services and advertising on
        our Site and other websites.
      </p>
      <p style={paragraphStyle}>
        We use this data to enhance your experience, fulfill your orders, and
        ensure smooth business operations. Your privacy matters to us, and we
        handle all collected information responsibly and in compliance with
        applicable laws.
      </p>
      <p style={paragraphStyle}>
        We disclose the following categories of personal information and
        sensitive personal information about users for the purposes set out
        above in "How we Collect and Use your Personal Information".
      </p>
      <p style={paragraphStyle}>
        We do not use or disclose sensitive personal information without your
        consent or for the purposes of inferring characteristics about you.
      </p>
      <p style={paragraphStyle}>
        If you have complaints about how we process your personal information,
        please contact us using the contact details provided below. If you are
        not satisfied with our response to your complaint, depending on where
        you live, you may have the right to appeal our decision by contacting us
        using the contact details set out below.
      </p>
    </div>
  );
}
