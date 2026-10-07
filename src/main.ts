/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">
  <body style =
    "background-color: blue;">
    here!</button>
  </body>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  const hue = Math.floor(Math.random() * 360);
  // This looks like to a good place to add some logic! Ya logic!
  counter += 1;
  counterElement.textContent = counter.toString();

  document.body.style.backgroundColor = `rgb(${hue}, ${hue}, ${hue})`;
  //console.log(hue);
  console.log("I have these thingies:", button, counterElement, counter);
});
