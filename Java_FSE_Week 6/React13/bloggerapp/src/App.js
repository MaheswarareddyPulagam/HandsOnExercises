import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = false;
  const showCourses = true;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>

      {/* Method 1 : If using ternary operator */}
      {showBooks ? <BookDetails /> : <h3>No Books Available</h3>}

      <hr />

      {/* Method 2 : Logical AND */}
      {showCourses && <CourseDetails />}

      <hr />

      {/* Method 3 : If-Else using function */}
      {displayBlog(showBlogs)}
    </div>
  );
}

function displayBlog(flag) {
  if (flag) {
    return <BlogDetails />;
  } else {
    return <h3>Blogs are Hidden</h3>;
  }
}

export default App;