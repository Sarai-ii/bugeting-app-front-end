import { Link } from "react-router-dom";

function Home() {

    return (
      <div className="Home">
        <h2>Welcome</h2>
        <section className="">
          <Link to={`./login`}> 
            <h3>Please log in for access to your account</h3>
          </Link>
        </section>
      </div>
    );
}
export default Home;