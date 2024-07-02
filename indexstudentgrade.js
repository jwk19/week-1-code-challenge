// added event listener to handle the submit event on the form on indexstudentgrade.html

document.getElementById("marksForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let studentMarks = parseInt(document.getElementById("marks").value);
    let resultElement = document.getElementById("result");

    // Clear any previous result
    resultElement.textContent = '';

    // Creating grading function
    function grading() {
        if (studentMarks >= 0 && studentMarks <= 100) { //checks if the marks inputs are within valid range
            if (studentMarks > 79) {
                resultElement.textContent = 'GRADE A'; // marks for Grade A
            } else if (studentMarks >= 60) {
                resultElement.textContent = 'GRADE B'; // marks for Grade B
            } else if (studentMarks >= 49) {
                resultElement.textContent = 'GRADE C'; // marks for Grade C
            } else if (studentMarks >= 40) {
                resultElement.textContent = 'GRADE D'; // marks for Grade D
            } else {
                resultElement.textContent = 'GRADE E'; // marks for Grade E
            }
        } else {
            resultElement.textContent = 'Invalid Student Marks'; // message for invalid marks
        }
    }

    // Call the grading function
    grading();
});
