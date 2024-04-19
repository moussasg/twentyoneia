import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Tagcloud = () => {
    const tagCloudStyles = {
        color: "rgb(14, 165, 234)", // Changer la couleur du texte en rouge
        fontSize:"20px",
    };
    return ( 
        <TagCloud style={tagCloudStyles}
            options={(w) => ({
                radius: Math.min(400, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "fast",
            })}
        >
            {[
                "chatbots",
                "text analysis",
                "NLP",
                "Advancements in AI",
                "Natural Language ",
                "Processing",
                "Machine Learning",
                "Tagcloud Animation",
            ]}
        </TagCloud>
    );
};

export default Tagcloud;
