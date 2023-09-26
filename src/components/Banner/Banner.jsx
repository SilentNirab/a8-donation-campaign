const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(images/banner-bg.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-3xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center sm:justify-start">
                            <label className="hidden py-1 px-3" ></label>
                            <input className="appearance-none text-md py-1 px-2 focus:outline-none border-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-900 text-purple-900 dark:text-gray-100 placeholder-blue-300 dark:placeholder-gray-600 font-semibold rounded-l" type="search" name="q" placeholder="Search" ></input>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-800 px-5 py-1 text-lg font-bold hover:shadow-2xl cursor-pointer transition duration-250 ease-in-out rounded-r text-white" value="Search" color="blue">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;