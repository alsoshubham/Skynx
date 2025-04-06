import { useNavigate } from "react-router-dom";
import SpicyMakhana from "../assets/SpicyMakhana.jpg";
import ClassicMakhana from "../assets/ClassicMakhana.png";
export default function Product() {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="font-medium text-4xl  font-serif text-center text-[#0D0D0D] mb-12">Our Products</h3>
        <p className=" section-description text-[#737373] mt-4 max-w-xl mx-auto text-xl">
        We exclusively handle bulk orders through direct consultation, ensuring a personalized and seamless ordering experience.
        </p>
        <br />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Classic Makhana",
              description: "The original flavor that started it all. ",
              image:ClassicMakhana,
            },
            {
              name: "Spicy Makhana",
              description: "A perfect blend of spices for a fiery kick.",
              image: SpicyMakhana,
            },
            {
              name: "Caramel Makhana",
              description: "A sweet treat for your taste buds.",
              image:
                "https://img.freepik.com/free-photo/front-view-roasted-nuts-with-honey_141793-4655.jpg?t=st=1742893740~exp=1742897340~hmac=b71860d17b2453b94d2e3e9586d354dd66930838b6c2b9d55cf80a1814ba02e4&w=740",
            }
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden rounded-lg shadow-sm cursor-pointer mx-width-full"
              onClick={() => navigate("/contact")}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover max-w-100% rounded-lg mb-0 transition-transform duration-700 hover:scale-105"
              />
              <h4 className="text-xl mb-2">{product.name}</h4>
              <p className=" text-[#0D0D0D] mb-4 mt-4 max-w-xl mx-auto text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
