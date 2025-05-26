import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>Skynx Globals | Premier Spices & Premium Makhana Supplier</title>
        <meta
          name="description"
          content="Skynx Globals is a leading exporter and supplier of premium Indian spices and high-quality organic Makhana (fox nuts). We specialize in bulk supply for import-export, wholesale, and private label needs. Trusted for purity, nutrition, and taste across global markets."
        />
        <meta
          name="keywords"
          content="Skynx Globals, Premium Spices Supplier, Indian Spices Exporter, Organic Spices India, Bulk Spices Supplier, Whole Spices Export, Ground Spices Exporter, Spices Manufacturer India, Turmeric Powder Exporter, Cumin Seeds Supplier, Coriander Seeds Exporter, Black Pepper Wholesale, Green Cardamom Export, Fennel Seeds Supplier, Clove Exporter India, Red Chilli Powder Exporter, Indian Masala Export, Spice Blends Exporter, Garam Masala, Curry Powder, Biryani Masala, Makhana Exporter, Premium Makhana Supplier, Organic Makhana, Fox Nuts Exporter, Lotus Seeds Supplier, Makhana Wholesale, Bulk Makhana, Flavored Makhana, Spicy Makhana, Caramel Makhana, Classic Makhana, Roasted Makhana, Healthy Snacks Supplier, Gluten-Free Snacks, Vegan Snacks, High-Protein Snacks, Indian Superfoods, Wholesale Makhana Export, Makhana Manufacturer India, Superfood Exporter, FMCG Snacks Exporter, Makhana Private Label, Spices Private Label, Export Quality Makhana, Export Quality Spices, Global Spices Supplier, Indian Agricultural Products Exporter, Best Indian Spices, Export Makhana Online, B2B Spices India, B2B Makhana Supplier, International Spices Trade, Premium Indian Herbs, Pure Indian Spices, Non-GMO Makhana, Skynx Spices, Skynx Makhana, Skynx Globals Makhana, Skynx Globals Spices"
        />

        <meta name="author" content="Skynx Globals" />
        <meta
          property="og:title"
          content="Skynx Globals | Premier Spices & Premium Makhana Exporter from India"
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
