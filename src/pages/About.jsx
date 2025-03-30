export default function About() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-medium text-4xl  font-serif text-center text-[#0D0D0D] mb-12">About Us</h1>
        <div className="space-y-12">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
            <p className="text-gray-600 leading-relaxed">
              Skynx Globals is the brand name of a family-owned Makhana manufacturer and wholesale supplier based in Madhubani (Bihar, India), the center for Makhana production. 
              We are one of the leading manufacturers and wholesale suppliers of raw and roasted Makhana worldwide. 
              Our reputation, knowledge, and understanding of the Makhana marketplace are second to none. 
              We pioneered the commercial development of Makhana as an organic food source in Madhubani, Bihar in India, nearly 90 years ago. 
              With the discovery of Makhana as the new superfood for a healthy life, world demand is increasing rapidly. 
              At Skynx Globals, we guarantee the supply of top-quality raw or roasted Makhana to order, in bulk.
            </p>
          </div>

          {/* The Team Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Team</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We have a dedicated team of highly skilled and experienced professionals including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Management Team</li>
              <li>Sales and Marketing Team</li>
              <li>Procurement Agents</li>
              <li>Quality Controllers</li>
              <li>Technicians and Engineers</li>
              <li>Packaging Personnel</li>
            </ul>
          </div>

          {/* Quality Assurance Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Maintaining the highest quality production standards is of paramount importance to us. 
              At every stage of the manufacturing and production process, our well-qualified and experienced analysts exercise stringent testing and control measures to maintain the highest quality and hygiene standards. 
              This is also important to preserve the distinctive, natural aroma of the Makhana products for a longer period of time. Testing includes evaluation of:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Nutritional Value</li>
              <li>Edible Quality</li>
              <li>Shelf Life</li>
              <li>Hygiene</li>
            </ul>
          </div>

          {/* Warehousing and Packaging Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Warehousing and Packaging</h2>
            <p className="text-gray-600 leading-relaxed">
              Our warehousing locations are all well connected to different transport options. 
              They meet all compliance requirements with regard to cleanliness and are fumigated regularly to eliminate any invasive pests. 
              We also have strict fire safety arrangements. 
              The packaging we use has been designed to retain the freshness of the Makhana product for as long as possible. 
              We also provide customized packaging services to meet our customers' requirements.
            </p>
          </div>

          {/* Customer Satisfaction Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Satisfaction</h2>
            <p className="text-gray-600 leading-relaxed">
              We are a customer-centric organization. 
              Our products are offered to customers at very competitive market prices, bulk purchases can be shipped quickly, and any special customer requirements are addressed efficiently. 
              We maintain very transparent trade practices and all payment options are available, including cash and cheque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
