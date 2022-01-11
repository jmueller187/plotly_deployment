

// Create listener for dropdown menu selection.
d3.selectAll("body").on("change", updatePage);

// Create updatePage() function.
function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.value;
  var selectedOption = dropdownMenu.options[dropdownMenu.selectedIndex].text;

  
  console.log(dropdownMenuID);
  console.log(selectedOption);
};