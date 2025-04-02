import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
  // ...existing blogPosts array from Blogs.jsx...
];

const CategoryBlogs = () => {
  const { category } = useParams(); // Get category from URL
  const filteredBlogs = blogPosts.filter(
    (post) => post.category.toLowerCase() === category
  );

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <h2 className="font-medium text-4xl font-serif text-center text-[#0D0D0D] mb-12">
          {category.charAt(0).toUpperCase() + category.slice(1)} Blogs
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {filteredBlogs.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-lg hover-lift subtle-border"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.imagePath}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBlogs;
