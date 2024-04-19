import Head from 'next/head';
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/elements/Breadcrumb";
import { LineChart, Line } from 'recharts';
import Visioncontent from '@/components/sections/Visioncontent';
export default function Vision() {
    return (
        <>
            <Head>
                <title>
                    Computer Vision Revolution
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
                                        <Breadcrumb title="Vision" />
                                    </div>
                                </div>
                                <div className="row mt-50  wow animate__animated animate__fadeInUp">
                                    <div className="col-lg-6">
                                        <h2 className="color-linear mb-30">Computer Vision & Revolution</h2>
                                    </div>
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-9">
                                        <Visioncontent/>
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
