var firebaseConfig = {
    apiKey: "AIzaSyCQQ7U6wti_FOJzF4eMMfhlv_WBNFRALZI",
    authDomain: "corona-web-7beec.firebaseapp.com",
    databaseURL: "https://corona-web-7beec-default-rtdb.firebaseio.com",
    projectId: "corona-web-7beec",
    storageBucket: "corona-web-7beec.appspot.com",
    messagingSenderId: "833413983519",
    appId: "1:833413983519:web:bd5ff709e9f5a29183542a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var UserInputsRef =firebase.database().ref('UserInputs')
  document.getElementById('testform').addEventListener('submit',submitForm)
  function submitForm(e){
      e.preventDefault()
      var fname=getInputVal('firstname')
      var lname=getInputVal('lastname')
      var mobile=getInputVal('mobile')
      var state=getInputVal('state')
      var email=getInputVal('email')
      var profession=getInputVal('profession')
      var dateofbirth=getInputVal('dateofbirth')
      var symptomsList=getSelectedCheckbox('symptoms')
      var selectedOption=document.querySelector('input[name=option]: checked').value
      state=state.toLowerCase()
        readState(state)
        var emailStatus=validateEmail()
        if(emailStatus)
        saveMessages(lname+" "+fname,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList)
    }

    function readState(state){
        var centers;
        var ref=firebase.database().ref(state)
        ref.on('value',(data)=>{
            centers=data.val()
            document.getElementById('result').innerHTML="<br>"+centers.toUpperCase()
        })
    }

    function getInputVal(id){
        return document.getElementById(id).value
    }

    function saveMessages(name,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList){
        var newuserInputsRef = UserInputsRef.push();
        newuserInputsRef.set({
            name:name,
            mobile:mobile,
            email:email,
            profession:profession,
            dateofbirth:dateofbirth,
            selectedOption:selectedOption,
            state:state, 
            symptomsList:symptomsList
        })
        alert("Thank you, find the list of centers nearby!  ");
    }

    function getSelectedCheckboxValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        let values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
        return values;
    }
    function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
    