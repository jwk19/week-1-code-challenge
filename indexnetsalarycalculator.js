const NSSF_RATE = 0.06; // 6% of gross salary

const NHIF_RATES = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 },
];

const TAX_BRACKETS = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: Infinity, rate: 0.30 },
];
// create function to calculate tax on gross salary
function calculateTax(grossSalary) {
    let tax = 0;
    for (let bracket of TAX_BRACKETS) {
        if (grossSalary > bracket.min) {
            let taxableAmount = Math.min(grossSalary, bracket.max) - bracket.min;
            tax += taxableAmount * bracket.rate;
        }
    }
    return tax;
}
// create function to calculate NHIF deduction as per gross salary 
function calculateNHIF(grossSalary) {
    for (let rate of NHIF_RATES) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            return rate.deduction;
        }
    }
    return 0;
}
// create function to calculate NSSF deduction as per gross salary 
function calculateNSSF(grossSalary) {
    return grossSalary * NSSF_RATE;
}
// create function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payeeTax = calculateTax(grossSalary);
    let nhifDeduction = calculateNHIF(grossSalary);
    let nssfDeduction = calculateNSSF(grossSalary);
    let netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
// assign value to the decalred variables (grossSalary, payeeTax, nhifDeduction, nssfDeduction, netSalary)
    return {
        grossSalary: grossSalary,
        payeeTax: payeeTax,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}
// event listener to handle form submission
document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let basicSalary = parseFloat(document.getElementById('basicSalary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);
    
    let salaryDetails = calculateNetSalary(basicSalary, benefits);
    // Displys results in the designated sections
    document.getElementById('result').innerHTML = `
        <p>Gross Salary: KES ${salaryDetails.grossSalary.toFixed(2)}</p>
        <p>PAYE Tax: KES ${salaryDetails.payeeTax.toFixed(2)}</p>
        <p>NHIF Deduction: KES ${salaryDetails.nhifDeduction.toFixed(2)}</p>
        <p>NSSF Deduction: KES ${salaryDetails.nssfDeduction.toFixed(2)}</p>
        <p><strong>Net Salary: KES ${salaryDetails.netSalary.toFixed(2)}</strong></p>
    `;
});
