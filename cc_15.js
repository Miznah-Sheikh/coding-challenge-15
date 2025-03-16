// Task 1 - Base Structure Setup
// Select the riskDashboard container
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Select form inputs and buttons
const riskNameInput = document.getElementById("riskName");
const riskLevelInput = document.getElementById("riskLevel");
const departmentInput = document.getElementById("department");
const addRiskBtn = document.getElementById("addRiskBtn");
const increaseRiskBtn = document.getElementById("increaseRiskBtn");

// Task 2 - Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    if (!riskName || !department) return alert("Please fill all fields!");

    // Create risk card element
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

// Task 4 - Categorizing Risks by Level
    if (riskLevel === "High") {
        riskCard.classList.add("high");
    } else if (riskLevel === "Medium") {
        riskCard.classList.add("medium");
    } else {
        riskCard.classList.add("low");
    }

    // Set content inside the card
    riskCard.innerHTML = `
        <strong>${riskName}</strong> <br>
        Level: ${riskLevel} <br>
        Department: ${department} <br>
    `;
 // Task 3 - Removing Risk Items
    const resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    // Remove risk item when clicked
    resolveBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Task 6 - Event Propagation Fix
        riskDashboard.removeChild(riskCard);
    });

    // Append button to risk card
    riskCard.appendChild(resolveBtn);

    // Append risk card to dashboard
    riskDashboard.appendChild(riskCard);
}

// Event listener to add risk
addRiskBtn.addEventListener("click", function() {
    addRiskItem(riskNameInput.value, riskLevelInput.value, departmentInput.value);
    // Clear input fields
    riskNameInput.value = "";
    departmentInput.value = "";
});