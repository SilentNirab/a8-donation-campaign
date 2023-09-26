import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


const Donations = ({ donation }) => {
    const { ID, Picture, Title, Category } = donation;

    const ClothiingBg = Category === "Clothing" ? "bg-[#79C23F26] text-[#79C23F]" : "";
    const FoodBg = Category === "Food" ? "bg-[#F8714726] text-[#F87147]" : "";
    const HealthBg = Category === "Health" ? "bg-[#0052FF26] text-[#0052FF]" : "";
    const EducationBg = Category === "Education" ? "bg-[#FF444A26] text-[#FF444A]" : "";

    const ClothiingCt = Category === "Clothing" ? "bg-[#79C23F33]" : "";
    const FoodCt = Category === "Food" ? "bg-[#F8714733]" : "";
    const HealthCt = Category === "Health" ? "bg-[#0052FF26]" : "";
    const EducationCt = Category === "Education" ? "bg-[#F8714733]" : "";

    return (

        <Link to={`/donationDetails/${ID}`}>
            <div className={` card ${ClothiingBg}${FoodBg}${HealthBg}${EducationBg}`}>
                <figure><img src={Picture} alt="Picture" /></figure>
                <div className=" space-y-3 p-3">
                    <span className={` px-2 py-1 rounded-md mt-3 ${ClothiingCt}${FoodCt}${HealthCt}${EducationCt}`}>{Category}</span>
                    <h2 className="card-title">{Title}</h2>
                </div>
            </div>
        </Link>

    );
};


Donations.propTypes = {
    donation: PropTypes.object
};

export default Donations;