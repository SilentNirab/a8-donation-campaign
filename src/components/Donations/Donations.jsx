import { Link } from "react-router-dom";

const Donations = ({ donation }) => {
    const { Picture, Title, Category, Card_bg } = donation;
    return (
        <Link>
            <div className={`card ${Card_bg == '#79C23F26') ? "bg-[79C23F26]" : ''}`}>
                <figure><img src={Picture} alt="Picture" /></figure>
                <div className="card-body">
                    <h3 className="card-title">{Category}</h3>
                    <h2>{Title}</h2>
                    <p>{Card_bg}</p>
                </div>
            </div>
        </Link>
    );
};

export default Donations;