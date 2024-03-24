document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Calculate total score
    let totalScore = 0;

    // Questions 1, 4, 7, 9, and 10
    totalScore += calculateScore('q1');
    totalScore += calculateScore('q4');
    totalScore += calculateScore('q7');
    totalScore += calculateScore('q9');
    totalScore += calculateScore('q10');

    // Questions 2, 3, 5, 6, and 8
    totalScore += calculateConcernScore('q2');
    totalScore += calculateConcernScore('q3');
    totalScore += calculateConcernScore('q5');
    totalScore += calculateConcernScore('q6');
    totalScore += calculateConcernScore('q8');

    // Determine feedback
    let feedback = '';

    if (totalScore >= 45) {
        feedback = "Your mental health appears to be in a concerning state. It's important to seek professional help and support.";
    } else if (totalScore >= 30) {
        feedback = "Your mental health is showing signs of strain. Consider seeking support and implementing self-care strategies.";
    } else {
        feedback = "Your mental health seems relatively stable. Keep up with healthy habits and seek support if needed.";
    }

    // Display result with feedback
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Survey Result</h2><p>Total Score: ${totalScore}</p><p>${feedback}</p>`;
});

// Calculate score for questions 1, 4, 7, 9, and 10
function calculateScore(questionId) {
    const answer = parseInt(document.getElementById(questionId).value);
    if (answer === 1 || answer === 2) {
        return 1;
    } else if (answer === 3) {
        return 2;
    } else if (answer === 4) {
        return 3;
    } else {
        return 4;
    }
}

// Calculate score for questions 2, 3, 5, 6, and 8
function calculateConcernScore(questionId) {
    const answer = parseInt(document.getElementById(questionId).value);
    if (answer === 1) {
        return 5;
    } else if (answer === 2 || answer === 4) {
        return 3;
    } else {
        return 1;
    }
}