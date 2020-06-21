
// Shahzaib Rasool Khan
// WM10502


 // chapters21-25

  // 1
  
     var firstName = prompt("Enter First Name");
     var lastName =  prompt("Enter Last Name");
     var fullName = firstName + " " + lastName;
     document.write(fullName)

  // 2

   var mobileModel = prompt("Enter Favorite Mobile Phone Model");
   var lenghtOfMobileModel = mobileModel.length;
   document.write("Length Of String: " + lenghtOfMobileModel);



  // 3
  
    var word = "Pakistan";
    var findCharacter = word.indexOf("n"); 
    document.write(word + "<br>");
    document.write("Index of 'n': " + findCharacter);

   // 4

  var word = "Hello World";
  var findCharacter = word.lastIndexOf("l");
  document.write(word + "<br>");
  document.write("Index of 'l': " + findCharacter);
   

  // 5

   var word = "Pakistan";
   var findIndex = word.charAt(3);
   document.write(word + "<br>");
  document.write("Character at Index '3': " + findIndex);


  // 6

   var firstName = prompt("Enter First Name");
   var lastName = prompt("Enter Last Name");
   var fullName = firstName.concat(" ", lastName);
   document.write(fullName)

 // 7

   var city = "Hyderabad"
   var replaceCity = city.slice(0, 5).replace("Hyder", "Islam");
   var endCity = city.slice(5)
   document.write("City: " + city + "<br>");
   document.write("After Replacement: " + replaceCity + endCity);



   // 8

   var message = "shahzaib and Sami are Best Friends. They Play Cricket and Football together.";
   var replaceMessage = message.replace(/and/g, "&");
   document.write(replaceMessage);



  // 9

   var number = "1234";
   document.write("Value: " + number + "<br>");  
   document.write("Type: " + typeof(number) + "<br>")
   document.write("Value: " + number + "<br>");
   document.write("Type: " + typeof(parseInt(number)))

 
  // 10
  
   var things = "peanuts"
   var upperCase = things.toUpperCase();
   document.write("User Input: " + things + "<br>");
   document.write("Upper case: " + upperCase)

  
    // 11

  var things = "javascript";
  var firstLetterCapital = things.slice(0, 1).toUpperCase();
  var restOfLetter = things.slice(1);
  document.write(firstLetterCapital + restOfLetter)



    // 12

    var num = 35.36;
    var removeDot = num.toString().replace(".", "");
    document.write("Number: " + num + "<br>")
    document.write("Result: " + removeDot);


   // 13


  var userName = prompt("Enter User Name");

   for (let i = 0; i < userName.length; i++) {
    if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64) {
        alert("Please Enter a Valid User Name");
    }
  }



  // 14


  var items = ["cake", "apple pie", "cookie", "chips", "patties"];
  var check = prompt("Enter item to check");
  var checkSmall = check.toLowerCase();

  if (items.indexOf(checkSmall) != -1) {
   
   document.write(checkSmall + " is " + "<b>available</b>" + " at index " + items.indexOf(checkSmall) + " in our bakery");
  } else {
    
   document.write("We are sorry. " + checkSmall + " is " + "<b>not available</b> " + " in our bakery");
  }


  
    // 15

  var password = prompt("Enter a Password");

  if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    document.write("Password not Start Number <br>")
  }

  if (password.length < 6) {
    document.write("It Must at Least 6 Characters Long")
 }



  // 16

   var university = "University of Karachi";
   var array = university.split('')

   for (let i = 0; i < array.length; i++) {
  
    document.write(array[i] + "<br>")
  }



  // 17

  var country = "Pakistan";
  var lastIndex = country.charAt(country.length - 1)
  document.write("User Input: " + country + "<br>")
  document.write("Last character of input: " + lastIndex)


  // 18
 
   var sentance = "the quick brown fox jumps over the lazy dog";
   var count = sentance.match(/the/g || []).length;
  
  document.write("There are " + count + " occurrence(s) of Word 'the'")



  // chapter26-30

   // 1

   var number = 3.145214;
   document.write("Number: " + number + "<br>")
   document.write("Round off Value: " + Math.round(number) + "<br>")
   document.write("Floor Value: " + Math.floor(number) + "<br>")
   document.write("ceil Value: " + Math.ceil(number) + "<br>")


 // 2


   var number = -2.376;
   document.write("Number: " + number + "<br>")
   document.write("Round off Value: " + Math.round(number) + "<br>")
   document.write("Floor Value: " + Math.floor(number) + "<br>")
   document.write("Ceil Value: " + Math.ceil(number) + "<br>")

  
   // 3

  document.write("The Absolute Value of -4 is " + Math.abs(-4))

  // 4

  document.write("Random Dice Value: " + Math.floor(Math.random() * 7))


  // 5

   var toss = Math.floor(Math.random() * 3);

    document.write(toss + "<br>")
   if (toss == 1) {

    document.write("random coin value: Heads")
   } else if (toss == 2) {

      document.write("random coin value: Tails")
 }

 
  // 6

  document.write("Random Number Between 1 to 100: " + Math.floor((Math.random() * 100) + 1))

  
  // 7

  var num = prompt("Enter Your Weight in Kilogram")
  var convertIntoInt = parseFloat(num);
 
  document.write("The Weight of User is " + convertIntoInt + " kilograms")


   // 8
   
   var secretNumber = Math.floor((Math.random() * 10) + 1)
   var check = prompt("Enter Secret Number")

    if (secretNumber == check) {
    document.write("Congratulate The User")
  } else {
    document.write("Try Again! Number is " + secretNumber)
   }



 // chapters31-34

    // 1

   var date = new Date();
   document.write(date)


 
  // 2
  
  var date = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.write("Current month: " + months[date.getMonth()])


  // 3

  var date = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    alert("Today is " + days[date.getDay()].slice(0, 3))


  // 4

    var date = new Date();
   if (date.getDay() == 0 || date.getDay() == 6) {
  
     document.write("It’s Fun day")
  }


   // 5


   var date = new Date();
   if (date.getDay() < 16) {
  
    document.write("First fifteen days of the month")
  } else {

      document.write("Last days of the month")
  }


  // 6

   var date = new Date();
   
   document.write("Current Date: " + date + "<br>")
   document.write("Elapsed milliseconds since January 1, 1970: " + date.getTime() + "<br>")
   document.write("Elapsed minutes since January 1, 1970: " + date.getTime() / 60000)

  // 7

    var date = new Date();
   if (date.getHours() >= 0 && date.getHours() < 12) {
   
     document.write("Its AM")
   } else {

       document.write("Its PM")
   }


   // 8

   var laterDate = new Date("31/June/2020");
   document.write(laterDate)


   //9

    var startDate = new Date("June 18, 2015");
    var currentDate = new Date();
    var totalDays = currentDate - startDate;

   document.write(Math.round(totalDays / 1000 / 60 / 60 / 24) + " Days have Past Since 1st Ramadan, 2015")



 
    // 10

    var endDate = new Date("December 5, 2015");
    var startDate = new Date("January 1, 2015");
    var totalSeconds = endDate - startDate;
 
    document.write("On reference date " + endDate + "<br>")    
    document.write(totalSeconds / 1000 / 60 + " Seconds had Passed Since Beginning of 2015")


   
    // 11


   var currentDate = new Date();
   var hourAgo = new Date(currentDate.getTime() + 60 * 60 * 1000)

   document.write("Current Date: " + currentDate + "<br>")
   document.write("1 Hour Ago, it was : " + hourAgo + "<br>")

    // 12
    
    var currentDate = new Date();

   document.write("Current Date: " + currentDate + "<br>")
   currentDate.setFullYear(currentDate.getFullYear() - 100);
   document.write("100 years back it was : " + currentDate + "<br>")


  
     // 13

   var yourAge = prompt("Enter Your Age")
   var currentDate = new Date();

  currentDate.setFullYear(currentDate.getFullYear() - parseInt(yourAge))
  document.write("Your Age: " + yourAge + "<br>")
   document.write("Your birth year is " + currentDate.getFullYear())

  // 14

   var numberOfUnits = 410;
   var chargePerUnit = 16;
   var netAmount = numberOfUnits * chargePerUnit;
   var latePayment = netAmount + 350

     document.write("<h1>K-Electric Bill</h1><br>")
     document.write("Customer Name: <b>ABC Customer</b><br>")
     document.write("Month: <b>Feburary</b><br>")
     document.write("Number of units: <b>" + numberOfUnits + "</b><br>")
     document.write("Charges per unit: <b>" + chargePerUnit + "</b><br><br>")
     document.write("Net Amount Payable (with Due Date): <b>" + netAmount + "</b><br>")
     document.write("Late payment surcharge: <b>" + 350 + "</b><br>")
     document.write("Gross Amount Payable (after Due Date): <b>" + latePayment + "</b><br>")

   // chapter35-38


  // 1

    function currentDate() {
    var currentDate = new Date();
    return currentDate;
  }

  document.write(currentDate())


     // 2
 
   function fullName(firstName, lastName) {
    var fullName = firstName + " " + lastName
    return fullName;
 }

   document.write(fullName("Shahzaib", "Rasool Khan"))


      // 3

   function sum(num1, num2) {
    var total = parseInt(num1) + parseInt(num2);
    return total
  }

    num1 = prompt("Enter First Number")
    num2 = prompt("Enter Second Number")

   document.write(sum(num1, num2))

   // 4

    function calculator(num1, num2, operator) {
    var result;

    if (operator == "+") {
        result = parseInt(num1) + parseInt(num2);
        return result;
    } else if (operator == "-") {
        result = parseInt(num1) - parseInt(num2);
        return result;
    } else if (operator == "*") {
        result = parseInt(num1) * parseInt(num2);
        return result;
    } else if (operator == "/") {
        result = parseInt(num1) / parseInt(num2);
        return result;
    }
  }

      document.write(calculator(4, 5, "+") + "<br>")
      document.write(calculator(9, 5, "-") + "<br>")
      document.write(calculator(4, 5, "*") + "<br>")
      document.write(calculator(6, 5, "/") + "<br>")


    // 5

     function square(num) {
    return parseInt(num) * parseInt(num);
  }

   document.write(square(4))



    // 6


    function factorial(num) {
    if ((parseInt(num) === 0)) {
        return 1;
    } else {
        return parseInt(num) * factorial(parseInt(num) - 1);
    }
  }

  document.write(factorial(3))

    // 7

    function counting(first, second) {
    var result = 0;

    for (var i = first; i <= second; i++) {
        result += i;
    }

    return result;
  }

   document.write(counting(1, 10))


   // 8

   function calculateSquare(num) {
    return parseInt(num) * parseInt(num);
   }

   function calculateHypotenuse(b, p) {
    var h1;
    var b1 = calculateSquare(b);
    var p1 = calculateSquare(p);
    return h1 = Math.sqrt(b1 + p1);
  }

  document.write(calculateHypotenuse(5, 4))


  // 9

   function rectangle1(height, width) {
    return parseInt(height) * parseInt(width);
  }

   document.write(rectangle1(2, 4))

   function rectangle2(height = 3, width = 3) {
    return parseInt(height) * parseInt(width);
  }

   document.write(rectangle2())

   
   // 10

   function palindrome(sentance) {
    var lengthSentance = sentance.length;
    var mid = Math.floor(lengthSentance / 2);

    for (var i = 0; i < mid; i++) {
        if (sentance[i] !== sentance[lengthSentance - 1 - i]) {
            return false;
        }
    }
    return true;
  }

  document.write(palindrome("madam"))


    
    // 11

    function firstLetterCapital(sentance) {
    return sentance.toLowerCase().split(' ').map(function(letter) {
        return letter.replace(letter[0], letter[0].toUpperCase());
    }).join(' ');
  }

   document.write(firstLetterCapital("The Quick Brown Fox"));



  // 12
   
   function getLongestWord(sentance) {
    var s = sentance.split(" ");
    var longest = 0;
    var word;
    for (var i = 0; i < s.length - 1; i++) {
        if (longest < s[i].length) {
            longest = s[i].length;
            word = s[i];
        }
    }
    return word;
  }

  document.write(getLongestWord("Web Development Tutorial"))


  // 13
  
   function getCount(word, letter) {
    var letterCount = 0;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
  }

  document.write(getCount('JSResourceS.com', 'o'));



  // 14

    function calcCircumference(radius) {
    return 2 * Math.PI * parseInt(radius);
  }

  function calcArea(radius) {
    return Math.PI * parseInt(radius) * parseInt(radius);
  }

  document.write("The circumference is " + calcCircumference(3) + "<br>")
   document.write("The area is " + calcArea(3))