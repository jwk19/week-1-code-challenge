// create grading system 
// Students marks range between 0(lowest) 100(highest)

// grades classification (A>79, B= 79-60, C= 59-49, D= 49-40, E<40)


let studentMarks = 78;

//creating grading function
function grading() {
    if (studentMarks >= 0 && studentMarks < 100) {
        if (studentMarks > 79) {
            console.log('GRADE A');
        } else if (studentMarks >= 60) {
            console.log('GRADE B');
        } else if (studentMarks >= 49) {
            console.log('GRADE C');
        } else if (studentMarks >= 40) {
            console.log('GRADE D');
        }
        else {
            console.log('GRADE E');
        };
        

    } else {
        console.log('Invalid Student Marks');
    }
}

// call the grading function
grading();

