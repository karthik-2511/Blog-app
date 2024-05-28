import "./Home.css";
import articleImage from "../../assets/Article-Writing-1.jpg";

function Home() {
  return (
    <div className='articleHome'>
      <h1 style={{color:'#011f4b'}}> Home of Knowledge</h1>
      <img src={articleImage} alt="" className="artcleImage" />
      <p className="lead">
      Welcome to Bloggy, a dynamic platform where your thoughts come to life! Our app allows you to create, edit, and share your own blog posts with ease. Whether you're a seasoned writer or just starting out, Bloggy offers user-friendly tools and a sleek, intuitive interface to help you publish engaging content effortlessly. Connect with a community of readers and fellow bloggers, share your unique stories, and explore a diverse range of topics. Bloggy is the perfect place to express your creativity and connect with like-minded individuals. Join us today and start your blogging journey!
      </p>
    </div>
  );
}

export default Home;
