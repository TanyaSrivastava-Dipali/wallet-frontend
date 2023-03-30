import Navbar from "../components/UI/Navbar";
import image from "../assets/ethereum.avif";
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="h-screen flex">
  <div className="hidden lg:flex w-full lg:w-2/3  justify-around items-center bg-cover bg-center"  style={{
            backgroundImage: `url(${image})`,
          }}></div>
  <div  className="flex w-full lg:w-1/3 justify-around  items-start bg-white space-y-8">
  <div className="container mx-auto text-center text-black">
			<h1 class="text-5xl font-medium mb-20 mt-40">Welcome to this Crypto Wallet</h1>
			<p class="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
				gravida pellentesque urna varius vitae.</p>
			<Link to="/signup" class="bg-black font-bold text-yellow-600 py-4 px-12  rounded-full hover:bg-white border-solid border-2 border-yellow-600">Get Started 
        </Link>
		</div>
          </div>
  </div>
        </>
    );
  };
  
  export default Home;