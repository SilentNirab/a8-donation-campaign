import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donationcard = ({ donate }) => {
    const { ID, Picture, Title, Category , Price} = donate;

    const ClothiingBg = Category === "Clothing" ? "bg-[#79C23F26] text-[#79C23F]" : "";
    const FoodBg = Category === "Food" ? "bg-[#F8714726] text-[#F87147]" : "";
    const HealthBg = Category === "Health" ? "bg-[#0052FF26] text-[#0052FF]" : "";
    const EducationBg = Category === "Education" ? "bg-[#FF444A26] text-[#FF444A]" : "";

    const ClothiingTc = Category === "Clothing" ? "text-[#79C23F]" : "";
    const FoodTc = Category === "Food" ? "text-[#F87147]" : "";
    const HealthTc = Category === "Health" ? "text-[#0052FF]" : "";
    const EducationTc = Category === "Education" ? "text-[#FF444A]" : "";

    const ClothiingBtn = Category === "Clothing" ? "bg-[#79C23F]" : "";
    const FoodBtn = Category === "Food" ? "bg-[#F87147]" : "";
    const HealthBtn = Category === "Health" ? "bg-[#0052FF]" : "";
    const EducationBtn = Category === "Education" ? "bg-[#FF444A]" : "";

    const ClothiingCt = Category === "Clothing" ? "bg-[#79C23F33]" : "";
    const FoodCt = Category === "Food" ? "bg-[#F8714733]" : "";
    const HealthCt = Category === "Health" ? "bg-[#0052FF26]" : "";
    const EducationCt = Category === "Education" ? "bg-[#F8714733]" : "";

  
    return (
        <div className=''>
            <div className={`relative flex w-full max-w-[48rem] flex-row rounded-xl  text-gray-700 shadow-md ${ClothiingBg} ${FoodBg} ${HealthBg} ${EducationBg}`}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                   <img className='h-full' src={Picture} alt="" />
                </div>
                <div className={`p-6 space-y-3 ${ClothiingTc} ${FoodTc} ${HealthTc} ${EducationTc}`}>
                    <span className={` px-3 py-1 rounded-md ${ClothiingCt} ${FoodCt} ${HealthCt} ${EducationCt}`}>{Category}</span>
                    <h3 className='text-black text-2xl font-semibold'>{Title}</h3>
                    <span className='text-md font-bold'>{Price}</span>
                    <Link to={`/donationDetails/${ID}`}>
                        <button
                            className={`flex text-white text-md px-4 py-2 font-semibold rounded-md ${ClothiingBtn} ${FoodBtn} ${HealthBtn} ${EducationBtn}`}
                            type="button"
                        > View Details
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

Donationcard.propTypes = {
    donate: PropTypes.object
};

export default Donationcard;