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