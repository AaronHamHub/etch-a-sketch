// Sets up the grid to 
function setupGrid(sideLength)
{
    // Fetch the grid container
    const container = document.querySelector("#container");

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



// Start with a default 16 x 16 grid
setupGrid(16);