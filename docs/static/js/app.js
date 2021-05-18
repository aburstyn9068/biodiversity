// Read the JSON file
d3.json("samples.json").then((data) => {
    console.log(data);
    var names = data.names;
    console.log(names);
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

