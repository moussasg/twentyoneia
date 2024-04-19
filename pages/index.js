import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import Hero1 from "@/components/sections/Hero1";
import HotTopic from "@/components/slider/HotTopic";
import RecentPosts3 from '@/components/sections/RecentPosts3';
import Testimonial from '@/components/slider/Testimonial';
import PartnersLogs from '@/components/sections/PartnersLogs';
import Loader from '@/components/layout/Loader';
import Services from '@/components/slider/Services';
import Stats from '@/components/slider/Stats';

export default function Home() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000); // 1000 milliseconds (1 second)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>21 Ai</title>
            </Head>
            <Layout>
                {showLoader && <Loader />}

                <div className="cover-home1">
                    <div className="container">
                        <div className="row">                 
                            <div className="col-xl-10 col-lg-12">         
                                <div>
                                    <Hero1 />
                                </div>
                                <div>
                                <HotTopic />
                                </div>
                                <div> 
                                    <RecentPosts3 />
                                </div>
                               <Stats/>
                                <Services/>
                             <Testimonial/>                            
                                <div>
                                    <PartnersLogs /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
