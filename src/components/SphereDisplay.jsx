import React, { useEffect, useRef } from 'react';
import Sphere from './Sphere';

const SphereDisplay = () => {
    const newColors = ['#ff0000', '#ffff00', '#d724d1', '#be12fb', '#12c3fb', '#4ffb12'];
    const myRed = '#fb2d12';
    const myYellow = '#ffff00';
    const myPink = '#d724d1';
    const myPurple = '#be12fb';
    const myBlue = '#12c3fb';
    const myGreen = '#4ffb12';

    // Generate a random number between min and max
    const getRandomNumber = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    // Generate a random position in three-dimensional space
    const getRandomPosition = () => {
        return [getRandomNumber(-100, 100), getRandomNumber(-100, 100), getRandomNumber(-100, 100)];
    };

    // Generate a random color from the given color array
    const getRandomColor = (colors) => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    // Generate random stops for color gradient
    const getRandomStops = () => {
        return [getRandomNumber(0, 0.5), getRandomNumber(0.5, 1)];
    };

    // Generate a random scale for the sphere
    const getRandomScale = () => {
        return [getRandomNumber(0.1, 1), getRandomNumber(0.1, 1), getRandomNumber(0.1, 1)];
    };

    // Generate a random amount of spheres
    const generateSpheres = () => {
        const numSpheres = 1000
        // Math.floor(getRandomNumber(200)); // Random number of spheres between 1 and 6
        const spheres = [];

        for (let i = 0; i < numSpheres; i++) {
            spheres.push(
                <Sphere
                    key={i}
                    args={[getRandomNumber(1, 5), getRandomNumber(10, 40), getRandomNumber(4, 20)]}
                    colors={[getRandomColor(newColors), getRandomColor(newColors), getRandomColor(newColors)]}
                    stops={getRandomStops()}
                    position={getRandomPosition()}
                    scale={getRandomScale()}
                />
            );
        }

        return spheres;
    };

    return <>{generateSpheres()}</>;
};

export default SphereDisplay;
