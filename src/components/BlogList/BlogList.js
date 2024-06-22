const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2
        className="mb-2"
        style={{ borderBottom: "4px solid #4c3c3c29", width: "fit-Content" }}
      >
        {title}
      </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p className="mt-3">{blog.body}</p>
          <p>Written by : {blog.author}</p>
          <button className="btn-secondary btn btn-sm" onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
