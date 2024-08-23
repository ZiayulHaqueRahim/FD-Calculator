function CalculateMaturityAmount(){
    //get input values from user:
    const principle = parseFloat(document.getElementById('principle').value);
    const interest_rate = parseFloat(document.getElementById('interest_rate').value);
    const year = parseFloat(document.getElementById('year').value);
    //perform calculation:
    const MaturityAmount = principle + (principle * interest_rate * year) / 100;
    //Display the Result:
    document.getElementById('result').innerText = `Maturity Amount: ${MaturityAmount.toFixed(2)}`;
}

    //Attach listener button to the calculating function:
    document.getElementById('Btn').addEventListener('click',CalculateMaturityAmount);