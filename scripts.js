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
        const userEmail = prompt(`Please enter your email to be notified when Spark! Bytes is ready for ${platform}:`);

        if (userEmail) {
            console.log(`User email for ${platform}: ${userEmail}`);
            alert(`Thank you! We will notify you at ${userEmail} when Spark! Bytes is ready for ${platform}.`);
            /*
            You will need to add more code here that will also add the users email to the list
            titled "users who've signed up"
             */
            const emailList = document.querySelector('emailList');
            const listItem = document.createElement('li');
            listItem.textContent = userEmail;
            emailList.appendChild(listItem);

        } else {
            alert('No email provided. Please try again if you wish to be notified.');
        }
    }

    /*
    Add an event listener for the iOS Button
     */
    const AppleButton = document.getElementById('.applebutton');
    AppleButton.addEventListener('click', function () {
        handleJoinClick("Apple");
    });

    /*
    Add an event listener for the Android Button
     */

    const AndroidButton = document.getElementById('.applebutton');
    AndroidButton.addEventListener('click', function () {
        handleJoinClick("Apple");
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

  const form = document.getElementById('signUp');
  form.addEventListener('submit', function(event){/* from Mozilla */
      event.preventDefault();
      const email = document.getElementById('emailRead');
      const inputEmail = email.value;
      if (inputEmail) {
        const emailList = document.querySelector('emailList');
        const listItem = document.createElement('li');
        listItem.textContent = inputEmail;
        emailList.appendChild(listItem);
        email.value = '';
    } else {
        alert('No email provided. Please try again if you wish to be notified.');
    }
});
    
});



