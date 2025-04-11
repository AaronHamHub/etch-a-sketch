function setupGrid(sideLength)
{
    const container = document.querySelector("#container");

    for(let r = 0; r < sideLength; r++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let c = 0; c < sideLength; c++)
        {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            //cell hover listener event
        }
    }
}



setupGrid(16);