// Sets up the grid to 
function setupGrid(sideLength)
{
    // Fetch the grid container
    const container = document.querySelector("#container");

    // Clear the grid before making a new one
    container.innerHTML = '';

    // Fill the grid with divs
    for(let r = 0; r < sideLength; r++)
    {
        // Make a row to go in the grid
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let c = 0; c < sideLength; c++)
        {
            // Make a cell to go in the row
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            // Add a listener to change the background when the mouse hovers over it
            cell.addEventListener("mouseenter", function (e)  {
                e.target.style.background = "black";
            });
        }
    }
}

const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener("click", () => {
    let newSize = prompt("Enter the new side length, between 0-100", 16);
    if(typeof newSize === "number" && newSize > 0 && newSize <= 100)
    {
        setupGrid(newSize);
    }
    else
    {
        alert("Invalid value, try again")
    }
});

// Start with a default 16 x 16 grid
setupGrid(16);