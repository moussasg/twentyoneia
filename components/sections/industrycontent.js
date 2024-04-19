import { Radars } from "@/pages/Radars";

const Industrycontent = () => {
    return (
        <>  
            <div className="content-detail border-gray-800 wow animate__animated animate__fadeInUp">
                <p className="text-xl color-gray-500 wow animate__animated animate__fadeInUp">Company Name  focuses on creating industry-specific AI solutions tailored to the unique challenges of diverse sectors, including healthcare, finance, retail, and manufacturing</p>
                <div className="mt-20 mb-20">
                    <img className="img-bdrd-16 wow animate__animated animate__fadeInUp" src="assets/imgs/page/single/centric.png" alt="Genz" />
                </div>
                <p className="text-lg color-gray-500 mb-50 wow animate__animated animate__fadeInUp"> We understand that each industry is unique, and our commitment lies in tailoring our expertise to meet your specific needs.</p>
                {/* <Radars/> */}
                <h3 className="color-white mb-30 wow animate__animated animate__fadeInUp">In-Depth Industry Knowledge</h3>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">We invest time and resources in gaining a deep understanding of the dynamics  regulations, and market trends specific to your industry. </p>
                <div className="bg-gray-850 box-quote">
                    <h3 className="color-gray-500 wow animate__animated animate__fadeInUp">Innovating the Future with AI: Pioneering Solutions for Your Business Success</h3>
                    <div className="d-inline-block mt-40">
                        <div className="box-author">
                            <img src="assets/imgs/page/ceo-resize.png" alt="Genz" />
                            <div className="author-info">
                                <h6 className="color-gray-700">Mostafa Forouzand</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="color-white mt-40 mb-30 wow animate__animated animate__fadeInUp">Customization for Your Unique Needs</h4>
                <div className="row">
                    <div className="col-lg-8 mb-30">
                        <p className="text-lg color-gray-500 mb-40 wow animate__animated animate__fadeInUp">We recognize that a one-size-fits-all approach doesn't work. Our solutions are highly customizable ensuring that they address the particular challenges your industry faces while aligning with your business objectives.</p>
                       
                    </div>
                    <div className="col-lg-4">
                        <img className="img-bdrd-16 mb-30 wow animate__animated  animate__fadeInUp" src="assets/imgs/page/finance.jpg" alt="Genz" />
                    </div>
                </div>
                <h4 className="color-white mt-40 mb-30 wow animate__animated animate__fadeInUp">Cutting-Edge Innovation</h4>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">To stay competitive, industries must adapt to evolving technology and consumer expectations. Our commitment to innovation means we stay at the forefront of technological advancements and industry best practices</p>
                <div className="row mt-50">
                    <div className="col-lg-6 gallery-left">
                        <img className="img-bdrd-16 mb-30 wow animate__animated  animate__fadeInUp" src="assets/imgs/healty.jpg" alt="Genz" />
                    </div>
                    <div className="col-lg-6 gallery-right">
                        <img className="img-bdrd-16 mb-20 wow animate__animated  animate__fadeInUp" src="assets/imgs/manufacturing.png " alt="Genz" />
                    </div>
                </div>
                <h3 className="color-white mt-50 mb-30 wow animate__animated animate__fadeInUp">Adaptability for Growth</h3>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Industries evolve, and your business should evolve with them. Our solutions are built to be adaptable, allowing your organization to scale and pivot as needed.</p>
            </div>   
        </>
    );
};
export default Industrycontent;
