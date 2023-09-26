const Banner = () => {
    return (
        <div>
             <div className="hero min-h-screen" style={{ backgroundImage: 'url(images/banner-bg.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <div>
                            <input className="border-[#DEDEDE] border-2 px-4 py-3 rounded-l-lg w-96" type="text" placeholder="Search heare ...." />
                            <button className="bg-[#FF444A] border-[#FF444A] px-4 py-3 rounded-r-lg text-white text-lg font-semibold">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;