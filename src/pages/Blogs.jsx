import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Nutritional Benefits of Makhana You Should Know",
    description:
      "Explore the incredible health benefits of incorporating makhana into your daily diet.",
    category: "Health",
    imagePath:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1587&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Creative Makhana Recipes to Try This Weekend",
    description:
      "Discover delicious and innovative ways to enjoy makhana beyond the traditional snack.",
    category: "Recipes",
    imagePath:
      "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Ancient History of Makhana in Traditional Medicine",
    description:
      "Learn about the historical significance of makhana in Ayurvedic and traditional healing practices.",
    category: "Culture",
    imagePath:
      "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1587&auto=format&fit=crop",
  },
];

const Blogs = () => {
  const blogsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!blogsRef.current) {
      console.error("blogsRef is not assigned");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting:", entry.target);
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const blogElements = blogsRef.current.querySelectorAll(".blog-item");
    if (!blogElements) {
      console.error("No blog elements found");
      return;
    }

    blogElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      blogElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [blogsRef]);

  return (
    <section id="blog" className="bg-white py-12">
      <div className="section-container">
        <div className="mb-8 text-center">
          <h2 className="font-medium text-4xl font-serif text-center text-[#0D0D0D] mb-5">
            Latest from Our Blog
          </h2>
          <p className="section-description text-[#737373] max-w-xl mx-auto text-lg">
            Explore our articles for insights, recipes, and stories about
            makhana.
          </p>
        </div>

        <div ref={blogsRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="blog-item overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-lg hover-lift subtle-border"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/blog/${post.category.toLowerCase()}`)}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.imagePath}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-center space-x-2">
                  <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-base font-medium text-primary text-[#FCA935]">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-lg font-medium">{post.title}</h3>
                <p className="mt-1 text-muted-foreground">{post.description}</p>

                <a
                  href="#"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:text-[#FCA935]"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
