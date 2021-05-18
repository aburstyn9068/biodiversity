// Read the JSON file
d3.json("samples.json").then((data) => {
    console.log(data);
    
    // Get names to update dropdown menu
    var names = data.names;
    console.log(names);

    // Get a reference to the drop down menu
    var menu = d3.select("#selDataset");
    
    names.forEach(function(name) {
        var item = menu.append("option");
        var cell = item.append("option");
        cell.text(name);
        cell.value(name);
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

