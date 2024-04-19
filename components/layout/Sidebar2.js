import Link from "next/link"
import data from "@/utils/blogData2"
import comments from "@/utils/commentsData"
import gallery from "@/utils/galleryData"

const Sidebar2 = ({ openClass }) => {
    return (
        <>
            <div className="sidebar">
                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar">
                        <h5 className="line-bottom">Our commitment</h5>
                    </div>
                    <div className="content-sidebar">
                        <div className="list-cats">
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                    <Link href="#">
                                            <img src="assets/imgs/page/healthy/cat1.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="#">
                                        Data-Driven Decision 
                                        </Link>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                    <Link href="#">
                                            <img src="assets/imgs/page/healthy/cat2.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="#">
                                        ML Excellence
                                        </Link>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                    <Link href="#">
                                            <img src="assets/imgs/page/healthy/cat3.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="#">
                                        AI Consulting Services
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                    <Link href="#">
                                            <img src="assets/imgs/page/healthy/cat4.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="#">
                                        Research & Dev
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                <div className="cat-left">
                                    <div className="image-cat">
                                        <Link href="#">
                                            <img src="assets/imgs/page/healthy/cat5.png" alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-cat">
                                        <Link className="color-gray-500 text-xl" href="#">
                                            NLP Excellence
                                        </Link>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar wow animate__animated animate__fadeIn">
                        <h5 className="line-bottom">Latest News</h5>
                    </div>
                    <div className="content-sidebar">
                        <div className="list-posts">
                            {data.slice(0, 5).map((item, i) => (
                                <div className="item-post wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`} key={i}>
                                    <div className="image-post">
                                        <Link href={`/blog/${item.id}`}>
                                            <img src={`/assets/imgs/page/homepage3/${item.img}`} alt="Genz" />
                                        </Link>
                                    </div>
                                    <div className="info-post border-gray-800">
                                        <Link href={`/blog/${item.id}`}>
                                            <h6 className="color-white">{item.title}</h6>
                                        </Link>
                                        <span className="color-gray-700">{item.duration} mins read</span>
                                        <ul className="d-inline-block">
                                            <li className="color-gray-700">{item.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar">
                        <Link href="/">
                            <img src="assets/imgs/template/logo.svg" alt="Genz" />
                        </Link>
                        <h6 className="color-gray-700">Follow us on instagram</h6>
                    </div>
                    <div className="content-sidebar">
                        <div className="row mt-30 mb-10">
                            {gallery.slice(0, 9).map((item, i) => (
                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`} key={i}>
                                    <Link href={`${item.link}`}>
                                        <img className="bdrd-8" src={`/assets/imgs/page/homepage1/${item.img}`} alt="Genz" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Sidebar2;
