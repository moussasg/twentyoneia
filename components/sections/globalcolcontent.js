import Link from "next/link";
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['Artificial Intelligence', 'Machine Learning', '3D'] 
const Globalcontent = () => {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, [])
    return (
        <>
        
            <div className="content-detail border-gray-800">
                <p className="text-xl color-gray-500 wow animate__animated animate__fadeInUp">We foster collaborations with international research institutions, universities, and technology partners to drive innovation and expand our expertise.</p>
                <div className="mt-20 mb-20">
                    <img className="img-bdrd-16 wow animate__animated animate__fadeInUp" src="assets/imgs/colabration.jpg " alt="Genz" />
                </div>
                <p className="text-lg color-gray-500 mb-50 wow animate__animated animate__fadeInUp">we recognize that the true potential of Artificial Intelligence and Machine Learning transcends borders. Our commitment to global collaborations in these cutting-edge fields is at the core of our innovation and impact.</p>
                <h3 className="color-white mb-30 wow animate__animated animate__fadeInUp">Diverse Insights</h3>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp"> Collaborating with experts and organizations from diverse regions provides a wealth of insights and perspectives. </p>
                <div className="bg-gray-850 box-quote">
                    <h3 className="color-gray-500 wow animate__animated animate__fadeInUp">Innovating the Future with AI: Pioneering Solutions for Your Business Success</h3>
                    <div className="d-inline-block mt-40">
                        <div className="box-author">
                        <img src="assets/imgs/page/ceo-resize.png" alt="Genz" />
                            <div className="author-info">
                                <h6 className="color-gray-700">Mustapha Fourouzand</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="color-white mt-40 mb-30 wow animate__animated animate__fadeInUp">Cross-Cultural Understanding</h4>
                <div className="row">
                    <div className="col-lg-8 mb-30">
                        <p className="text-lg color-gray-500 mb-40 wow animate__animated animate__fadeInUp">In AI and ML, understanding the nuances of different cultures and regions is essential. Global collaborations enable us to develop solutions that are culturally sensitive, respecting local values and preferences</p>
                       
                    </div>
                    <div className="col-lg-4">
                        <img className="img-bdrd-16 mb-30 wow animate__animated  animate__fadeInUp" src="assets/imgs/robotscolab.jpeg" alt="Genz" />
                    </div>
                </div>
                <h4 className="color-white mt-40 mb-30 wow animate__animated animate__fadeInUp">Shared Goals</h4>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp"> Our global collaborations are united by shared goals - the pursuit of excellence in AI and ML. We partner with like-minded individuals and organizations to push the boundaries of what's possible in these fields.</p>
                <div className="row mt-50">
                    <div className="col-lg-6 gallery-left">
                        <img className="img-bdrd-16 mb-30 wow animate__animated  animate__fadeInUp" src="assets/imgs/humainandai.png" alt="Genz" />
                    </div>
                    <div className="col-lg-6 gallery-right">
                    <TextTransition springConfig={presets.wobbly} style={{fontSize:'25px '}}>{TEXTS[index % TEXTS.length]}</TextTransition>
                    </div>
                </div>
                <h3 className="color-white mt-50 mb-30 wow animate__animated animate__fadeInUp">Industry Partnerships</h3>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Our industry alliances span the globe, fostering the exchange of ideas and technology to drive AI and ML innovation, addressing real-world challenges, and transforming industries.</p>
            </div>
            
          
            
        </>
    );
};
export default Globalcontent;
