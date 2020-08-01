# etch-a-sketch

This creates an Etch-A-Sketch board in a web page. The user can set a grid size by clicking the "Reset" button.

The grid uses a "pointerover" event listener to detect the mouse moving over it. If the box has no color, an RGB value is randomly generated and applied to the box, then stored in an array at an index corresponding to the box ID. If the box does have a color, it checks the RGB value stored in the arrays, subtracts 25 from each value, applies that color to the box, and updates the array with the new value.

Useful note
This code:
grid.setAttribute('style', `display: grid; grid-template-columns: repeat(${numCol}, ${colPercent}%); height: 600px; width: 600px`);
creates a 600x600 grid with variable column sizes based on user input! Then the gridbox elements have height and width set to auto so they automatically fill all available space.