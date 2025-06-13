import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import RetailPackImg from "../assets/RetailPack.png";
import ClassicMakhanaImg from "../assets/ClassicMakhana.png";

// Static categories for carousel
const categories = [
	{
		name: "Whole Spices",
		description: "Fresh, aromatic whole spices",
		image:
			"https://www.millerstores.com/web/image/product.template/10117/image_1920?unique=50df937",
	},
	{
		name: "Ground Spices",
		description: "Finely ground premium powders",
		image:
			"https://tse2.mm.bing.net/th/id/OIP.4VE9dSSpZ-snxTBQ6_zk3AHaFc?cb=thvnextc2&rs=1&pid=ImgDetMain",
	},
	{
		name: "Retail Packs",
		description: "Ready-to-use consumer packs",
		image: RetailPackImg,
	},
	{
		name: "Makhana",
		description: "The original flavor that started it all.",
		image: ClassicMakhanaImg,
	},
];

export default function CategorySection() {
	const navigate = useNavigate();
	const carouselRef = useRef(null);

	const handleCategoryClick = (categoryName) => {
		// Map display names to product category query
		let query = categoryName;
		if (categoryName === "Classic Makhana" || categoryName === "Spicy Makhana") {
			query = "Makhana";
		}
		if (categoryName === "Spice Blends") {
			query = "Blends";
		}
		if (categoryName === "Retail Packs") {
			query = "Retail Packs";
		}
		if (categoryName === "Whole Spices") {
			query = "Whole Spices";
		}
		if (categoryName === "Ground Spices") {
			query = "Ground Spices";
		}
		navigate(`/products?category=${encodeURIComponent(query)}`);
	};

	const scroll = (direction) => {
		if (carouselRef.current) {
			const cardWidth = carouselRef.current.firstChild?.offsetWidth || 320;
			carouselRef.current.scrollBy({
				left: direction === "right" ? cardWidth + 24 : -(cardWidth + 24),
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="category-section bg-gray-50">
			{/* Global style for hiding scrollbars */}
			<style>
				{`
					.hide-scrollbar {
						scrollbar-width: none; /* Firefox */
						-ms-overflow-style: none; /* IE and Edge */
					}
					.hide-scrollbar::-webkit-scrollbar {
						display: none; /* Chrome, Safari, Opera */
					}
				`}
			</style>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div>
				<h2 className="font-medium text-4xl font-serif text-center text-[#0D0D0D] mb-6">
					Shop by Categories
				</h2>
				<p className="section-description text-[#737373] max-w-xl mx-auto text-lg">
					Discover our extensive range of premium spices and makhana, carefully
					sourced and processed to bring you the finest flavors
				</p>
				</div>
				<div className="relative mt-6">
					<button
						aria-label="Scroll categories left"
						onClick={() => scroll("left")}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-700 hover:bg-gray-200 rounded-full shadow p-1 transition-colors"
						style={{ display: "block" }}
					>
						<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
							<path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
					<div
						ref={carouselRef}
						className="flex overflow-x-auto gap-6 py-2 px-0 hide-scrollbar"
						style={{
							scrollSnapType: "x mandatory",
							WebkitOverflowScrolling: "touch",
						}}
					>
						{/* Hide scrollbar for Webkit browsers */}
						{categories.map((category, index) => (
							<div
								key={index}
								className="bg-white min-w-[260px] max-w-xs flex-shrink-0 overflow-hidden rounded-lg shadow-sm cursor-pointer"
								style={{ scrollSnapAlign: "start" }}
								onClick={() => handleCategoryClick(category.name)}
							>
								<img
									src={category.image}
									alt={category.name}
									className="w-full h-44 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
								/>
								<div className="p-4 text-center relative">
									<h3 className="text-lg font-semibold mb-1 text-gray-900">
										{category.name}
									</h3>
									<p className="text-gray-600 mb-2">
										{category.description}
									</p>
									<button className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
										View Products →
									</button>
								</div>
							</div>
						))}
					</div>
					<button
						aria-label="Scroll categories right"
						onClick={() => scroll("right")}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-700 hover:bg-gray-200 rounded-full shadow p-1 transition-colors"
						style={{ display: "block" }}
					>
						<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
							<path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}