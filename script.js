

function power(a, b) {
    let result = 1;
    for (let i = 0; i < Math.abs(b); i++) {
        result *= a;
    }
    // If exponent is negative
    if (b < 0) {
        result = 1 / result;
    }
    return result;
}

// Example usage:
console.log(power(2, 3));   // Output: 8
console.log(power(5, 0));   // Output: 1
console.log(power(2, -2));  // Output: 0.25





//leap year//


function isLeapYear(year) {
    // A year is a leap year if it's divisible by 4
    // But not divisible by 100, unless also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

// Example usage:
let inputYear = prompt("Enter a year:");
isLeapYear(parseInt(inputYear));










    // Function to calculate semi-perimeter
    function calculateSemiPerimeter(a, b, c) {
      return (a + b + c) / 2;
    }

    // Function to calculate area using Heron's formula
    function calculateArea(a, b, c) {
      let s = calculateSemiPerimeter(a, b, c);
      let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      return area;
    }

    // Example usage
    let a = 7;
    let b = 8;
    let c = 9;
    let area = calculateArea(a, b, c);
    console.log("Area of triangle:", area.toFixed(2));












    function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    const totalMarks = 300; // Assuming each subject is out of 100
    const obtainedMarks = m1 + m2 + m3;
    return (obtainedMarks / totalMarks) * 100;
}

function mainFunction(m1, m2, m3) {
    const avg = calculateAverage(m1, m2, m3);
    const percent = calculatePercentage(m1, m2, m3);

    console.log("Marks:", m1, m2, m3);
    console.log("Average Marks:", avg.toFixed(2));
    console.log("Percentage:", percent.toFixed(2) + "%");
}

// Example call:
mainFunction(85, 90, 78);










function myIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; // Return the index of the first match
        }
    }
    return -1; // If character not found
}

// Example usage:
console.log(myIndexOf("hello", "e")); // Output: 1
console.log(myIndexOf("world", "r")); // Output: 2
console.log(myIndexOf("javascript", "z")); // Output: -1





function removeVowels(sentence) {
    if (sentence.length > 25) {
        return "Sentence is too long (max 25 characters).";
    }

    // Replace all vowels using regular expression
    let result = sentence.replace(/[aeiouAEIOU]/g, '');
    return result;
}

// Example usage
let sentence = "Hello World!";
let Result = removeVowels(sentence);
console.log(result);  // Output: "Hll Wrld!"











function convertToMeters(km) {
      return km * 1000;
    }

    function convertToFeet(km) {
      return km * 3280.84;
    }

    function convertToInches(km) {
      return km * 39370.1;
    }

    function convertToCentimeters(km) {
      return km * 100000;
    }

    function convertDistance() {
      const km = parseFloat(document.getElementById("kmInput").value);

      if (isNaN(km)) {
        alert("Please enter a valid number.");
        return;
      }

      document.getElementById("meters").textContent = `Meters: ${convertToMeters(km)} m`;
      document.getElementById("feet").textContent = `Feet: ${convertToFeet(km).toFixed(2)} ft`;
      document.getElementById("inches").textContent = `Inches: ${convertToInches(km).toFixed(2)} in`;
      document.getElementById("centimeters").textContent = `Centimeters: ${convertToCentimeters(km)} cm`;



    }













    
    function calculateNotes() {
      let amount = parseInt(document.getElementById("amount").value);

      if (amount % 10 !== 0 || amount <= 0) {
        document.getElementById("result").innerText = "Please enter a valid amount in multiples of 10.";
        return;
      }

      let hundreds = Math.floor(amount / 100);
      amount %= 100;

      let fifties = Math.floor(amount / 50);
      amount %= 50;

      let tens = Math.floor(amount / 10);

      document.getElementById("result").innerText =
        `100 Rupee Notes: ${hundreds}\n` +
        `50 Rupee Notes: ${fifties}\n` +
        `10 Rupee Notes: ${tens}`;
    }










function calculateOvertime() {
            const hoursWorked = parseInt(document.getElementById("hoursInput").value);
            const standardHours = 40;
            const overtimeRate = 12;
            
            let overtimeHours = 0;
            let overtimePay = 0;

            if (hoursWorked > standardHours) {
                overtimeHours = hoursWorked - standardHours;
                overtimePay = overtimeHours * overtimeRate;
            }

            document.getElementById("result").innerHTML = 
                `Overtime Hours: ${overtimeHours}<br>Overtime Pay: Rs. ${overtimePay.toFixed(2)}`;
        }







       
    






           
        