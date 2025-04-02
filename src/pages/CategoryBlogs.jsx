import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryBlogs = () => {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!category) {
        setError("Invalid category");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://www.reddit.com/r/${encodeURIComponent(category)}/search.json?restrict_sr=1&sort=relevance&q=*`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        const posts = data.data.children.map((child) => ({
          id: child.data.id,
          title: child.data.title,
          description: child.data.selftext?.trim() ? child.data.selftext : "No description available",
          imagePath:
            child.data.thumbnail && child.data.thumbnail.startsWith("http")
              ? child.data.thumbnail
              : "https://via.placeholder.com/150",
        }));

        setBlogs(posts);
        setError(null);
      } catch (err) {
        setError(`Error fetching blogs: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <h2 className="font-medium text-4xl font-serif text-center text-[#0D0D0D] mb-12">
          {category.charAt(0).toUpperCase() + category.slice(1)} Blogs
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-lg subtle-border"
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
