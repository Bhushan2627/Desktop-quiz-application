document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
  
    // Retrieve user answers
    const answer1 = document.querySelector('input[name="q1"]:checked').value;
    const answer2 = document.querySelector('input[name="q2"]:checked').value;
    const answer3 = document.querySelector('input[name="q3"]:checked').value;
    const answer4 = document.querySelector('input[name="q4"]:checked').value;
    const answer5 = document.querySelector('input[name="q5"]:checked').value;
    const answer6 = document.querySelector('input[name="q6"]:checked').value;
    const answer7 = document.querySelector('input[name="q7"]:checked').value;
    const answer8 = document.querySelector('input[name="q8"]:checked').value;
    const answer9 = document.querySelector('input[name="q9"]:checked').value;
    const answer10 = document.querySelector('input[name="q10"]:checked').value;
    // Retrieve answers for other questions
  
    // Check answers and calculate score
    let score = 0;
    if (answer1 === "b") {
      score++;
    }
    if (answer2 === "a") {
      score++;
    }
    if (answer3 === "b") {
      score++;
    }
    if (answer4 === "c") {
      score++;
    }
    if (answer5 === "b") {
      score++;
    }
    if (answer6 === "c") {
      score++;
    }
    if (answer7 === "d") {
      score++;
    }
    if (answer8 === "d") {
      score++;
    }
    if (answer9 === "c") {
      score++;
    }
    if (answer10 === "b") {
      score++;
    }
    // Check answers for other questions

    // Display score
    const scoreDisplay = document.createElement("p");
    scoreDisplay.textContent = "Your score: " + score + "/10";
    document.getElementById("quiz-form").appendChild(scoreDisplay);
  
    // Reset form
    document.getElementById("quiz-form").reset(); 
  });
  
// Student Data (username, password, and scores)
const students = [
    { username: "student1", password: "password1", scores: [] },
    { username: "student2", password: "password2", scores: [] },
    { username: "student3", password: "password3", scores: [] }
  ];
  
  // DOM Elements
  const loginPage = document.getElementById("login-page");
  const registerPage = document.getElementById("register-page");
  const quizPage = document.getElementById("quiz-page");
  const scorePage = document.getElementById("score-page");
  const scoreDisplay = document.getElementById("score-display");

  // Event Listeners
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
  
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    const student = students.find((s) => s.username === username && s.password === password);
  
    if (student) {
      loginPage.style.display = "none";
      quizPage.style.display = "block";
      registerPage.style.display = "none"; // Hide the "Register New Student" page
    } else {
      alert("Invalid username or password. Please try again.");
    }
  
    document.getElementById("login-form").reset();
  });
  

  
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
  
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
  
    if (students.some((s) => s.username === username)) {
      alert("Username already exists. Please choose a different username.");
    } else {
      students.push({ username: username, password: password, scores: [] });
      alert("Registration successful. You can now login with your new account.");
      registerPage.style.display = "none";
      loginPage.style.display = "block";
    }
  
    document.getElementById("register-form").reset();
  });
  
  document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
  
    const username = document.getElementById("login-username").value;
    const student = students.find((s) => s.username === username);
  
    if (student && student.scores.length > 0) {
      // Student has already attempted the quiz
      const lastScore = student.scores[student.scores.length - 1];
      scoreDisplay.textContent = "Your score: " + lastScore + "/10";
      quizPage.style.display = "none";
      scorePage.style.display = "block";      
    } else {
      // Student is attempting the quiz for the first time
      // Retrieve user answers and calculate score
      const score = Math.floor(Math.random() * 10) + 1; // Mock score calculation
  
      // Update student's score
      if (student) {
        student.scores.push(score);
      }
  
      scoreDisplay.textContent = "Your score: " + score + "/10";
      quizPage.style.display = "none";
      scorePage.style.display = "block";
    }
  });  

  /*
  document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
  
    // Retrieve user answers and calculate score
    const score = Math.floor(Math.random() * 10) + 1; // Mock score calculation
  
    // Update student's score
    const username = document.getElementById("login-username").value;
    const student = students.find((s) => s.username === username);
    student.scores.push(score);
  
    scoreDisplay.textContent = "Your score: " + score + "/10";
    quizPage.style.display = "none";
    scorePage.style.display = "block";
  });
  */
  
  document.getElementById("logout-btn").addEventListener("click", function() {
    scorePage.style.display = "none";
    loginPage.style.display = "block";
  });
  
  
  
  