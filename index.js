// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// veggies arrays => takes 3 elements (begin with the index 0)
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower']; 

// create the function with one parameter (veg)
const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.'); 
  // should print :
  // No broccoli, spinach, cauliflower, broccoflower please. I will have pizza with extra cheese.
};
politelyDecline(veggies); // call the function  
