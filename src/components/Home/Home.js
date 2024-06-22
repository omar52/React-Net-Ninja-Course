import { useEffect, useState } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
    
  const [blogs, setBlogs] = useState([
    { title: "blog-1", body: "Hey Iam Omar", author: "Omar", id: 1 },
    { title: "blog-2", body: "Hey I am Aia", author: "aia", id: 2 },
    { title: "blog-3", body: "Hey I am ALi", author: "ali", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  });

  return (
    <div className="home text-start">
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
