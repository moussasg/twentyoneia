import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/elements/Breadcrumb"
import React from 'react';
import Globalcontent from "@/components/sections/globalcolcontent";
export default function Single3() {
    return (
        <>
            <Head>
                <title>Global Collaborations</title>
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
                                        <h2 className="color-linear mb-30">Global Collaborations </h2>
                                    </div>
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-8">
                                        <Globalcontent />
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