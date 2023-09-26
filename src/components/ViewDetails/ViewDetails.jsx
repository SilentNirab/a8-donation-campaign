import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonataion } from "../Utiliti/localstorage";

const ViewDetails = () => {
    const donates = useLoaderData();
    const {ID} = useParams();
    const donate = donates.find(donate => donate.ID == ID);
    const {Picture, Title, Description, Category, Price } = donate;

    const ClothiingBtn = Category === "Clothing" ? "bg-[#79C23F]" : "";
    const FoodBtn = Category === "Food" ? "bg-[#F87147]" : "";
    const HealthBtn = Category === "Health" ? "bg-[#0052FF]" : "";
    const EducationBtn = Category === "Education" ? "bg-[#FF444A]" : "";

    const handelDonate = () =>{
        toast("Donate Succesfully!");
        saveDonataion(ID);
    }
    return (
        <div className="max-w-5xl mx-auto my-10 space-y-4 ">
            <div className="relative">
            <img className="w-full rounded-xl " src={Picture} alt="" />
            <div className="bg-black absolute left-0 bottom-0 w-full h-28 opacity-70">
            <Link>
                <button onClick={handelDonate} className={` absolute bottom-10 left-10 text-white text-md px-5 py-2 font-semibold rounded-md ${ClothiingBtn} ${FoodBtn} ${HealthBtn} ${EducationBtn}`}>Donate {Price}</button>
            </Link>
            </div>
            </div>
            <h2 className="text-3xl font-semibold text-black">{Title}</h2>
            <h2>{Description}</h2>
            
            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default ViewDetails;