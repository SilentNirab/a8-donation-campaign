import { useLoaderData } from "react-router-dom";
import Donetions from "../Donations/Donations";
import Banner from "../Banner/Banner";

const Home = () => {
   const donations = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-4 gap-4 my-6 max-w-7xl mx-auto">
                {
                    donations.map((donation, idx)=> <Donetions key={idx} donation={donation}></Donetions>)
                }
            </div>
        </div>
    );
};

export default Home;