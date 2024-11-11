// Function to simulate fetching data
function fetchData() {
    document.getElementById('output').innerText = "Fetching data...";
    setTimeout(() => {
        document.getElementById('output').innerText = "Data fetched successfully!";
    }, 2000); // Simulates a delay
}
