//a function finding average of scores array 
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
 console.log(getAverage([12,34,54,65,45,32,2]).toFixed(2));

 // Second task: finding grades
 function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Third task: Checking if student has a passing grade or not
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// Displaying for the Students 
function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
  }
}