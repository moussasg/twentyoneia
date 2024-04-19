import React, { useEffect, useState } from 'react';
// import { LinearGradient } from 'react-text-gradients'

const Stats = () => {
    const stats = [
        {
            id: "stats-1",
            title: "Clients Active",
            value: 100,
        },
        {
            id: "stats-2",
            title: "Trusted by Company",
            value: 50,
        },
        {
            id: "stats-3",
            title: "Projects Completed",
            value: 80,
        }
    ];

    const [animatedValues, setAnimatedValues] = useState(
        stats.reduce((acc, stat) => {
            acc[stat.id] = 0;
            return acc;
        }, {})
    );

    const animateValues = () => {
        const duration = 1500; // Animation duration in milliseconds
        const delay = 100; // Delay between each number increment
        const steps = duration / delay;

        stats.forEach((stat) => {
            const increment = Math.ceil(stat.value / steps);
            let count = 0;

            const interval = setInterval(() => {
                count += increment;

                if (count >= stat.value) {
                    count = stat.value;
                    clearInterval(interval);
                }

                setAnimatedValues((prevValues) => ({
                    ...prevValues,
                    [stat.id]: count
                }));
            }, delay);
        });
    };

    useEffect(() => {
        animateValues();
    }, []);

    return (
        <div className="d-flex justify-content-center mb-4 flex-md-row flex-column">
            {stats.map((stat) => (
                <div key={stat.id} className="d-flex align-items-center m-3">
                    <h4 className="display-4 font-weight-bold text-white mr-2 color-linear">
                        {/* <LinearGradient gradient={['to left', '#7f7bc2 ,#f0955a']}> */}
                            {animatedValues[stat.id]} +&nbsp;{/* Add a space character after the plus sign */}
                        {/* </LinearGradient> */}
                    </h4>
                    <p className="text-uppercase text-gradient">
                        {stat.title}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Stats;
