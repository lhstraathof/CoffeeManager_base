// 1 src/components.js
export default function() {
    console.log('echo');
};

// 2 src/app.js
import runFunction from './components.js';

runFunction(); // logs echo