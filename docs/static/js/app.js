var subjectID = "940";
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
        var item = menu.append("option");
        item.text(name);
        item.attr("value", name);
    });

    // Check for changes on dropdown menu and call the updatePlotly function
    d3.selectAll("#selDataset").on("change", updatePlotly);

    function updatePlotly() {
        // Select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");
        // Update subject ID based on selection
        subjectID = dropdownMenu.property("value");
        // Change the information on the page
        init(subjectID, names);
    }

    init(subjectID, names);

    // Initialize page to display information for subject 940
    function init(subjectID, names) {
        // Get the index of the subject
        indexID = names.indexOf(subjectID);
        console.log(data.metadata[indexID]);

        // Select the demographic info on the HTML document
        var demoInfo = d3.select("#sample-metadata");

        // Clear old demographic info
        demoInfo.selectAll("ul").remove(); 

        // Insert demographic info
        demoInfo.append("ul").text(`AGE: ${data.metadata[indexID].age}`);
        demoInfo.append("ul").text(`BBTYPE: ${data.metadata[indexID].bbtype}`);
        demoInfo.append("ul").text(`ETHNICITY: ${data.metadata[indexID].ethnicity}`);
        demoInfo.append("ul").text(`GENDER: ${data.metadata[indexID].gender}`);
        demoInfo.append("ul").text(`LOCATION: ${data.metadata[indexID].location}`);
        demoInfo.append("ul").text(`BWFREQ: ${data.metadata[indexID].wfreq}`);
        demoInfo.append("ul").text(`ID: ${data.metadata[indexID].id}`);

        // Create charts
        // Get the data and collect the top 10 samples
        var x = data.samples[indexID].sample_values;
        console.log(x);
        var xSliced = x.slice(0,10);
        var y = data.samples[indexID].otu_ids;
        var ySliced = y.slice(0,10).reverse();
        console.log(ySliced);
        var text = data.samples[indexID].otu_labels
        var textSliced = text.slice(0,10).reverse();
        
        // Bar graph
        var trace1 = {
          x: xSliced.reverse(),
          y: ySliced.map(item => "OTU "+(item.toString())),
          text: textSliced,
          type: "bar",
          name: "Biodiversity",
          orientation: "h"
        }
        
        // Bar graph layout
        var layout1 = {
            yaxis: {
                type: "category",
                title: "OTU ID"
            },
            title: "Top 10 Bacteria Cultures Found"
        }
      
        Plotly.newPlot("bar", [trace1], layout1);

        // Bubble Chart
        var trace2 = {
            x: y,
            y: x,
            mode: "markers",
            marker: {
                color: y,
                size: x
            },
            text: text
        }
        var layout2 = {
            xaxis: {
                title: "OTU ID"
            },
            title: "Bacteria Cultures Per Sample"
        }
        Plotly.newPlot("bubble", [trace2], layout2);

        // Gauge
        var trace3 = {
                domain: { x: [0, 1], y: [0, 1] },
                value: data.metadata[indexID].wfreq,
                title: { text: "Bellybutton Wash Frequency (Scrubs/Week)" },
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: {
                        visible: true,
                        range: [0, 9],
                        tick0: 0,
                        dtick: 1
                    }
                    
                }
        }
        var layout3 = {
            yaxis: {
              tickmode: "linear",
              tick0: 0,
              dtick: 1
            }
        }
        Plotly.newPlot("gauge", [trace3], layout3);
    }
});



