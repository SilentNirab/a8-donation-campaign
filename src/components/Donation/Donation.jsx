import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonataion } from '../Utiliti/localstorage';
import Donationcard from "../Conationcards/Donationcard";
const Donation = () => {
    const donations = useLoaderData();
    const [appliedDonates, setAppliedDonet] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const getId = getStoredDonataion();
        if (donations.length > 0) {
            const donationItems = [];
            for (const ID of getId) {
                const donation = donations.find(donate => donate.ID == ID);
                donationItems.push(donation);
            }
            setAppliedDonet(donationItems)
        }
    }, [donations])

    return (
        <div className="max-w-7xl mx-auto flex flex-col items-center my-10">
            <div className="grid lg:grid-cols-2 gap-4 ">
                {
                   seeAll ? appliedDonates.map(donate => (<Donationcard key={donate.ID} donate={donate}></Donationcard>))
                   : appliedDonates.slice(0,4).map(donate => (<Donationcard key={donate.ID} donate={donate}></Donationcard>))
                }
            </div>
                <Link>
                   {appliedDonates.length > 4 && <button
                        onClick={() => setSeeAll(!seeAll)}
                        className="bg-[#009444] text-white font-semibold text-lg px-5 py-2 rounded-md mt-7">{seeAll ? "See Less": "See All"}
                        </button>}
                </Link>

        </div>
    );
};

export default Donation;