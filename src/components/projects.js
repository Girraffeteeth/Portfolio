import React from 'react';
import "../styles/projects.css";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
        <h2>1. Hangman Game (Python, Python IDLE, VS Code)</h2>
            <p>Used Python programming language in VS Code editor to create the Hangman Game online and learnt how to work with Strings, Lists and Loops.</p>
            <p>The game randomly selects a word from a list and displays a series of underscores representing the letters of the word.The player then guesses letters of the word and the game reveals any correct guesses, keeping a track of incorrect guesses at the same time.</p>
        <h2>2. Online Book Store (Java, BlueJ, VS Code)</h2>
            <p>Used Java programming language in BlueJ editor to create an Online Book Store.</p>
            <p>This project stimulates an Online Bookstore where users can browse and purchase books. The system utilises object-oriented principles to model the bookstore’s components, multithreading for concurrent operations and concurrency for handling multiple user requests simultaneously.</p>
        <h2>3. Predict Taxi Trip Duration (Python, Jupyter Notebook)</h2>
            <p>Predicted Taxi Trip Duration using Python programming language in Jupyter Notebook.</p>
            <p>It is a model that predicts the total ride duration of taxi trips in New York City (NYC).</p>
            <p>The primary dataset is released by the NYC Taxi and Limousine Commission, which include Pickup time, Geo-coordinates, Number of Passengers, and several other variables.</p>
        <h2>4. Calculator App (Python, Python IDLE, VS Code)</h2>
            <p>Created a Calculator App using Python programming language in Python IDLE editor and simulated the same in VS Code editor too.</p>
            <p>The app has basic functions like add, subtract, multiply and divide; the user can click on the buttons of the calculator keys to take input of the numbers and then choose the operation from the key panel too, then the result can be obtained by clicking the ’=’ icon.</p>
            <p>Learnt the use of Tkinter library alongwith it’s functionalities and applied it in the project.</p>
        <h2>5. Temperature Converter App (Java, BlueJ, VS Code)</h2>
            <p>Created a Temperature Converter App using Java programming language in BlueJ editor and simulated the same in VS Code editor too.</p>
            <p>The app basically takes input of Temperature in any of the 3 scales - Celsius/Fahrenheit/Kelvin and returns the converted temperature according to the requirements of the user.</p>
            <p>Learnt the use of Java Swing toolkit alongwith it’s functionalities and applied it in the project.</p>
        <h2>6. Portfolio Website (HTML, CSS, VS Code)</h2>
            <p>Created a Portfolio Website made up of HTML and CSS in VS Code editor.</p>
            <p>The website tells about me and my achievements.</p>
        <h2>7. Homepage of Netflix (HTML, CSS, VS Code)</h2>
            <p>Created a simple webpage made up of HTML and CSS in VS Code editor.</p>
            <p>The webpage looks similar to the Homepage of Netflix.</p>
        <h2>8. Pong Game (Python, Python IDLE, VS Code)</h2>
            <p>Used Python programming language in VS Code editor to create the Pong Game online.</p>
            <p>The players utilize paddles to volley a ball back and forth, competing for points and testing their reflexes.</p>
            <p>Learnt the use of Turtle library alongwith it’s functionalities and applied it in the project.</p>
    </div>
  );
}

export default Projects;