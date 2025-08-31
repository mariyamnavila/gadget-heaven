import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Stats = () => {
    const allGadgets = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Stats | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538e2] text-center text-white pt-8 pb-8 space-y-4">
                <h2 className="font-bold text-3xl">Statistics</h2>
                <p className="w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="mt-12 mb-24 mx-auto max-w-6xl">
                <p className="font-bold text-2xl mb-8">Statistics</p>
                <div style={{ width: '100%', height: '500px' }}>
                    <ResponsiveContainer className='w-full h-full' width="100%" height="100%">
                        <ComposedChart
                            className="w-full "
                            width={1000}
                            height={800}
                            data={allGadgets}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey={'product_title'} scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey={'price'} fill="#efe1fb" stroke="#efe1fb" />
                            <Bar dataKey={'price'} barSize={20} fill="#9538e2" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;