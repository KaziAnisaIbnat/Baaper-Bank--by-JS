/* Step-1 : Add click event handler with the submit button.
         Submit Button দিয়ে ক্লিক ইভেন্ট হ্যান্ডলার যোগ কর।           */

document.getElementById('btn-submit').addEventListener('click',function(){
           
/* Step-2 : Get the email address inside the email input field.
          Email ইনপুট ক্ষেত্রের ভিতরে ইমেল ঠিকানা পান।              */

const emailField = document.getElementById('user-email');
const  email = emailField.value;

/* Step-3 : How to Get password in website at 3 way --- 
(i)   Set id on the html element. HTML এলিমেন্টে আইডি সেট করুন।        
(ii)           Get element. উপাদান পান।
(iiI) Get the value from the element. উপাদান থেকে মান পান।       */
const passwordField = document.getElementById('user-password');
        const password = passwordField.value;

/*Step-4 :Verify email and passord and check whether Vaild User
or Invaild User. ইমেল এবং পাসওয়ার্ড যাচাই করুন এবং Vaild ব্যবহারকারী বা কিনা তা পরীক্ষা করুন অবৈধ ব্যবহারকারী।                             */
if( email === 'kazianisa18@gmail.com' && password ==='hi'){
// Navigate to another page use this line.এই লাইনটি ব্যবহার করে এক website থেকে অন্য website এ যাওয়া আসা করা যায়।
        window.location.href = 'Bank.html';
}
else
         alert('Your password is wrong');
})


