import Head from 'next/head';
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/elements/Breadcrumb";
import Predictivecontent from '@/components/sections/predictivecontent';
import { LineChart, Line } from 'recharts';
const data = [{name: 'Paget', uv:400, amt: 2400},{name: 'Page A', uv: 200, amt: 2400},{name: 'Page A', uv: 400, amt: 2400},{name: 'Page A', uv: 600, amt: 2400},{name: 'Page A', uv: 400, amt: 2400},{name: 'Page A', uv: 200, amt: 2400},{name: 'Page t', uv:400, amt: 2400},{name: 'Page A', uv: 200, amt: 2400},{name: 'Page A', uv: 400, amt: 2400},{name: 'Page A', uv: 600, amt: 2400},{name: 'Page A', uv: 400, amt: 2400},{name: 'Page A', uv: 200, amt: 2400}];
export default function Predictive() {
    return (
        <>
            <Head>
                <title>
                    predictive Analytics & Data insights
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="pt-30 border-bottom border-gray-800 pb-20">
                                    <div className="box-breadcrumbs">
                                        <Breadcrumb title="Service" />
                                    </div>
                                </div>
                                <div className="row mt-50  wow animate__animated animate__fadeInUp">
                                    <div className="col-lg-6">
       <h2 className="color-linear mb-30">Predictive Analytics & Data insights</h2>
  <LineChart width={300} height={150} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
    </div>
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-9">
                                        <Predictivecontent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
