// Function to calculate demerit points based on speed
function checkSpeed(speed) {
    // Speed limit constant
    const speedLimit = 70;
    // Demerit point per 5 km/s above the speed limit
    const kmPerDemeritPoint = 5;

    // Result element to display output
    const resultElement = document.getElementById('result');

    // Check if speed is within the acceptable limit
    if (speed < speedLimit) {
        resultElement.textContent = "Ok";
        return;
    }

    // Calculate the number of demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    // If demerit points exceed 12, print "License suspended"
    if (demeritPoints > 12) {
        resultElement.textContent = "Points: " + demeritPoints + ". License suspended";
    } else {
        // Otherwise, print the number of demerit points
        resultElement.textContent = "Points: " + demeritPoints;
    }
}

// Event listener for form submission
document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const speed = document.getElementById('speed').value; // Get speed input value
    checkSpeed(parseInt(speed)); // Call the function with the input value
});
