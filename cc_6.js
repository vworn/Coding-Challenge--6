// Task 1: Function Declaration - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; // Calculate total profit
    console.log(`Total Profit: $${profit}`); // Print the profit
}
// Test cases
calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"

// Task 2: Function Expression - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate; // Compute sales tax
    console.log(`Sales Tax: $${salesTax}`); // Print the sales tax amount
};
// Test cases
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

// Task 3: Arrow Function - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = {
        "Excellent": 0.2, // 20% bonus for excellent rating
        "Good": 0.1, // 10% bonus for good rating
        "Average": 0.05 // 5% bonus for average rating
    };
    let bonus = salary * (bonusPercentage[performanceRating] || 0); // Calculate bonus based on rating
    console.log(`Bonus: $${bonus}`); // Print the bonus amount
};
// Test cases
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"