function getStudentGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        return "Invalid score. Please enter a number between 0 and 100.";
    }

    let grade;

    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    return `Score: ${score} | Grade: ${grade}`;
}