import Chartjs from '@/pages/chart';
import * as React from 'react';
const Devcontent = () => {
    return (
        <>
            <div className="content-detail border-gray-800">
                <p className="text-xl color-gray-500 wow animate__animated animate__fadeInUp">We invest in continuous research and development, staying at the forefront of emerging technologies, AI algorithms, and industry trends.</p>
        <div className="mt-20 mb-20">
                    <img className="img-bdrd-16 wow animate__animated animate__fadeInUp h-50 w-75" src="assets/imgs/page/research.jpeg" alt="Genz" />
                </div>
                <p className="text-lg color-gray-500 mb-50 wow animate__animated animate__fadeInUp">This research focuses on emerging technologies and innovations in the field of sustainable energy sources, including solar power, wind energy, and advanced battery technologies, to address environmental and energy challenges</p>
                <div className="w-100 h-100 wow animate__animated animate__fadeInUp"><Chartjs/></div>
                <br></br>
                <h3 className="color-white mb-30 wow animate__animated animate__fadeInUp">Advancements in Healthcare Technology and Telemedicine</h3>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">This study explores the latest developments in healthcare technology, telemedicine, and digital health solutions, highlighting how these innovations are transforming patient care, diagnostics, and medical research.</p>
                <div className="bg-gray-850 box-quote wow animate__animated animate__fadeInUp">
                    <h3 className="color-gray-500">Innovating the Future with AI: Pioneering Solutions for Your Business Success</h3>
                    <div className="d-inline-block mt-40">
                        <div className="box-author">
                            <img src="assets/imgs/page/ceo-resize.png" alt="Genz" />
                            <div className="author-info">
                                <h6 className="color-gray-700">Mostafa Forouzand</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="color-white mt-40 mb-30 wow animate__animated animate__fadeInUp">"Enhancing Data Security in the Age of Cyber Threats</h4>
                <div className="row wow animate__animated animate__fadeInUp">
                    <div className="col-lg-8 mb-30">
                        <p className="text-lg color-gray-500 mb-40">This research delves into cutting-edge approaches for enhancing data security and privacy, addressing the growing challenges posed by cyber threats, data breaches, and the protection of sensitive information.</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-bdrd-16 mb-30" src="assets/imgs/page/cyber.jpeg" alt="Genz" />
                    </div>
                </div>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">AI isn't limited to one sector—it's transforming every industry. From healthcare to finance, retail to manufacturing, artificial intelligence is shaping the future. Learn how AI can be tailored to your industry's unique needs, ensuring a seamless and effective transformation.</p>
                <div className="row mt-50 wow animate__animated animate__fadeInUp">
                    <div className="col-lg-6 gallery-left">
                        <img className="img-bdrd-16 mb-30" src="assets/imgs/page/panosolar.jpeg" alt="Genz" />
                    </div>
                    <div className="col-lg-6 gallery-right wow animate__animated animate__fadeInUp">
                        <img className="img-bdrd-16 mb-20" src="assets/imgs/page/algo.jpeg" alt="Genz" />
                    </div>
                </div>
                <h3 className="color-white mt-50 mb-30 wow animate__animated animate__fadeInUp">Advancements in Quantum Computing</h3>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">This research explores the latest breakthroughs in quantum computing, including quantum algorithms and hardware developments, paving the way for solving complex problems that were previously infeasible for classical computers."</p>
            </div>
        </>
    );
};
export default Devcontent;

