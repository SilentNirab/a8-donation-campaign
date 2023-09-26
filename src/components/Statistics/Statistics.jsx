import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import { getStoredDonataion } from '../Utiliti/localstorage';

const Statistics = () => {
    const donations = useLoaderData();
    const [appliedDonates, setAppliedDonet] = useState([]);

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

    const yourDonation = appliedDonates.length;
    const totalrDonation = donations.length;
    const data = [
        { name: 'Total Donation', value: totalrDonation },
        { name: 'Your Donation', value: yourDonation },
    ];
    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className=" flex space-x-5">
                <div className="flex justify-center items-center">
                    <p className='text-lg font-semibold'>Your Donation</p>
                    <div className='bg-[#00C49F] w-20 h-2 rounded-lg ml-3'></div>
                </div>
                <div className="flex justify-center items-center">
                    <p className='text-lg font-semibold'>Total Donation</p>
                    <div  className='bg-[#FF444A] w-20 h-2 rounded-lg ml-3'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;