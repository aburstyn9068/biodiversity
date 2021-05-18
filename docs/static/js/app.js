// Read the JSON file
d3.json("samples.json").then((data) => {
    console.log(data);
    
    // Get names to update dropdown menu
    var names = data.names;
    console.log(names);

    // Get a reference to the drop down menu
    var menu = d3.select("#selDataset");
    
    // Iterate through names and add each name as an option in the drop down menu
    names.forEach(function(name) {
        console.log(name);
        var item = menu.append("option");
        item.text(name);
        //item.value(name);
      });

    //  Create the Traces
    // var trace1 = {
    //   x: data.sample.sample_values,
    //   y: data.sample.out_ids,
    //   type: "bar",
    //   name: "Biodiversity",
    //   orientation: "h"
});

// Unpack function
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
}

