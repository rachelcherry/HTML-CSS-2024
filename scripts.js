/*
We put all of our scripts inside this function which is attached to the event DOmContentLoaded
This event is when all the elements of the page have rendered by the browser.
You do not need to modify the definition of this event  listener
 */
document.addEventListener('DOMContentLoaded', function () {
    /**
     * This function should be attached to the event of a user click one of the iOS or Android buttons
     * @param platform a string representing which button ie platform called this function
     */
    function handleJoinClick(platform) {
        console.log(`handleJoinClick function called for ${platform}`);
        const userEmail = prompt(`Please enter your email to be notified when Spark! Bytes is ready for ${platform}:`);

        if (userEmail) {
            console.log(`User email for ${platform}: ${userEmail}`);
            alert(`Thank you! We will notify you at ${userEmail} when Spark! Bytes is ready for ${platform}.`);
            /*
            You will need to add more code here that will also add the users email to the list
            titled "users who've signed up"
             */
            const emailList = document.querySelector('#emailList'); // finds the item with the id emailList which is found in index.html and stores it for use later
            const listItem = document.createElement('li'); // this creates an item for the list
            listItem.textContent = userEmail; // sets the content (the user email) to be text 
            emailList.appendChild(listItem); // add the item (the users email) to the list that is labeled as Users Who have signed up

        } else {
            alert('No email provided. Please try again if you wish to be notified.');
        }
       
    }
    

    /*
    Add an event listener for the iOS Button
     */
    const AppleButton = document.getElementById('applebutton'); // creates a variable that holds the apple button creates in index.html
    AppleButton.addEventListener('click', function () { // add an event listener that occurs on the click
        handleJoinClick("Apple"); // call the handleJoinClick function with the platform labeled as Apple
        event.preventDefault(); // prevent refresh on the click event, so when the user inputs an email it maintains the list of users
    });
    

    /*
    Add an event listener for the Android Button
     */

    const AndroidButton = document.getElementById('androidbutton'); // create variable to hold android button
    AndroidButton.addEventListener('click', function () { // add event listener that occurs on the click 
        handleJoinClick("Android"); // call the handleJoinClick function with the platform labeled as Android 
        event.preventDefault(); // prevent refresh on the click event, so when the user inputs an email it maintains the list of users
    });
    /*
    Below here you can add code for what happens when the user clicks "Sign Up"
    The general flow you should follow is the following:
        1. Find the signup form
        2. Attach an event listener to the "submit" event
        3. That event listener should:
            3a. obtain the value of the entered text from the input element
            3b. add the value to the list of users who have signd up(using various DOM manipulation methods).
            3c. Create an alert if, when they click "submit" they have an empty email
     Help: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
     Help 2: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
     Help 3: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
     */

  const form = document.getElementById('signUp'); // creates a variable that holds the sign up button 
  const email = document.getElementById('emailRead'); // creates a variable that holds the list for users who have signed up 
  form.addEventListener('submit', (event) => { // from Mozilla 
      event.preventDefault(); // prevents refresh of the page on the click event, so when the user inputs an email it maintains the list of users 
      const inputEmail = email.value; // holds the value of the users email 
      if (inputEmail) { // if the user input an email
        const emailList = document.querySelector('#emailList'); // query for the email list variable
        const listItem = document.createElement('li'); // create a list item to add to the list
        listItem.textContent = inputEmail; // set the content (the users email) to be text
        emailList.appendChild(listItem); // append the email to the list of emails 
        email.value = ''; // reset the value when it has completed
    } else {
        alert('No email provided. Please try again if you wish to be notified.'); // did not put in an email, so give pop up that says they need to put an email in
    }
   
});
    
});



