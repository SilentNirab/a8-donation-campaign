import { useLoaderData } from "react-router-dom";
import Donetions from "../Donations/Donations";
import Banner from "../Banner/Banner";

const Home = () => {
   const donations = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 px-4 lg:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto">
                {
                    donations.map(donation=> <Donetions key={donation.ID} donation={donation}></Donetions>)
                }
            </div>
        </div>
    );
};

export default Home;