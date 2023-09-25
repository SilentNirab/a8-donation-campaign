import { useLoaderData } from "react-router-dom";
import Donetions from "../Donations/Donations";

const Home = () => {
   const donations = useLoaderData();
   
    return (
        <div>
            <h2 className="text-bold">This is home</h2>
            <div className="grid grid-cols-4 gap-4">
                {
                    donations.map((donation, idx)=> <Donetions key={idx} donation={donation}></Donetions>)
                }
            </div>
        </div>
    );
};

export default Home;