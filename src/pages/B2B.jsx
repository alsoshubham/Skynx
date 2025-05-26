import Contact from '../components/Contact';
import { Truck, Shield, Clock, Award } from 'lucide-react';

const B2B = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'Worldwide delivery with temperature-controlled logistics'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'ISO certified processing with rigorous quality controls'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: '48-hour response time for all bulk inquiries'
    },
    {
      icon: Award,
      title: 'Competitive Pricing',
      description: 'Volume-based pricing with flexible payment terms'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Bulk Orders & B2B Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Partner with SpiceGlobal for your bulk spice requirements. From restaurants to food manufacturers, 
            we provide premium quality spices with competitive wholesale pricing.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600">
              Fill out the form below and our team will get back to you within 48 hours with a detailed quote
            </p>
          </div>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default B2B;