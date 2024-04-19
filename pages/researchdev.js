import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/elements/Breadcrumb"
import Sidebar2 from "@/components/layout/Sidebar2"
import Devcontent from '@/components/sections/Devcontent'

export default function ResearchDev() {
    return (
        <>
            <Head>
                <title>
                    Research & Developmemt
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
                                        <Breadcrumb title="Strategic Directions" />
                                    </div>
                                </div>
                                <div className="row mt-50 align-items-end">
                                    <div className="col-lg-9 col-md-8">
                                        <h2 className="color-linear mb-30"> Research & Developmemt</h2>                                                                      
                                    </div>                               
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-8">
                                        <Devcontent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}