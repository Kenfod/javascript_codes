//  ES6 Modules  = A module is an external file tha contains reusable code that can be imported into other Javascript files.
//                 A module can contain variables, classes, functions...and more.
//                 Write a reusable code for many different apps.
//                 It was introduced as part of ECMAScript 2015 update.

import {PI, getArea, getCircumference, getSurfaceVolume, getVolume} from './mathUtils.js';

console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm^2`);

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm`);

const surfaceVolume = getSurfaceVolume(10);
console.log(`${surfaceVolume.toFixed(2)}cm^3`);
