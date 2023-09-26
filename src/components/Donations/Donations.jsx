import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donations = ({ donation }) => {
    const {ID, Picture, Title, Category } = donation;

    const ClothiingBg = Category === "Clothing" ? "bg-[#79C23F26] text-[#79C23F]" : "";
    const FoodBg = Category === "Food" ? "bg-[#F8714726] text-[#F87147]" : "";
    const HealthBg = Category === "Health" ? "bg-[#0052FF26] text-[#0052FF]" : "";
    const EducationBg = Category === "Education" ? "bg-[#FF444A26] text-[#FF444A]" : "";
    return (

        <Link to=`{/donetion/${ID}`>
            <div className={` card ${ClothiingBg}${FoodBg}${HealthBg}${EducationBg}`}>
                <figure><img src={Picture} alt="Picture" /></figure>
                <div className=" space-y-3 p-3">
                    <span className="p-2">{Category}</span>
                    <h2 className="card-title">{Title}</h2>
                </div>
            </div>
        </Link>

    );
};

Donations.PropTypes = {
    donation: PropTypes.object
};

export default Donations;