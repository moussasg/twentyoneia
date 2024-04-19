import Link from "next/link"
import React, { useState, useEffect } from "react"

const portfolio = [
    {
        name: "Features",
        category: ["smart", "health", "tourist", "ekyc", "home", "vr", "care", "wellness", "blind", "llm"],
        img: "img1.jpg"
    },
    {
        name: "Outcomes",
        category: ["smart", "health", "tourist", "ekyc", "home", "vr", "care", "wellness", "blind", "llm"],
        img: "img2.jpg"
    },

];

const PortfolioFilter = ({ col, show }) => {

    // State variable to store the currently selected filter category
    const [filter, setFilter] = useState("all");

    // State variable to store the projects to be displayed based on the selected filter
    const [projects, setProjects] = useState([]);

    // Effect hook to initialize the 'projects' state with the initial portfolio data when the component mounts
    useEffect(() => {
        setProjects(portfolio);
    }, []);

    // Effect hook to update the 'projects' state whenever the 'filter' state changes
    useEffect(() => {
        // Clear the 'projects' state to prepare for filtering
        setProjects([]);

        // Map through the 'portfolio' data and create a new array of projects with an additional property 'filtered'
        // The 'filtered' property indicates whether a project belongs to the selected filter category or not
        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));

        // Update the 'projects' state with the filtered array of projects
        setProjects(filtered);
    }, [filter]);

    return (
        <>
            

            <div className="mt-70 mb-50">
                <div className="row">
                    {projects.slice(0, show).map(item =>
                        item.filtered === true ?
                            <div className={`col-lg-${col}`} key={item.name}>
                                <div className="project" data-category="web motion">
                                    <div className="item-content">
                                        <div className="card-style-1 hover-up mb-30" data-wow-delay=".0s">
                                            <div className="card-image">
                                                <Link className="link-post" href="#"><img src={`assets/imgs/page/about/${item.img}`} alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h3 className="color-white mb-10">{item.name}</h3>
                                                            <p className="color-gray-500 text-sm">Empowering Possibilities, Enhancing Efficiency.
                                                                Discover the Power of Feature-Rich Software.</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null
                    )}
                </div>
            </div>
        </>
    );
};

export default PortfolioFilter;