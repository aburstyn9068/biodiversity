# biodiversity.github.io
This repository contains the JavaScript and HTML code files for an interactive dahsboard. The dashboard displays information about data from a study done on "Belly Button Biodiversity." The data collected was about the volumes of microbial species, or operational taxonomic units (OTUs) found in human navels.

The collected data was stored in a JSON file and its contents were imported using JavaScript. All the subject IDs were collected and added to the HTML file to allow for the user to select which subject ID they want to view. A dropdown menu is included on the website to allow for user selection. The page will default to display subject 940.

The page displays the following demographic info of the selected subject:
- AGE
- BBTYPE
 -ETHNICITY
- GENDER
- LOCATION
- BWFREQ
- ID

The dashboard also includes a horizontal bar graph, bubble chart, and guage chart.

The bar graph displays the top 10 bacteria cultures found in each subject. The x-axis shows the volume of cultures found, and the y-axis displays its ID. Hovering over an individual bar with the mouse cursor will display its volume and the name of the OTU.

The bubble chart gives a different visual represenation of the number of cultures found for each OTU. Moving along the x-axis shows the different OTU IDs found in the subject. The colors of the bubbles vary for the different OTUs (lighter grey for smaller ID numbers and darker red for larger ID numbers). The y-axis shows the volume of cultrures found, with the size of each bubble relevant to the volume (smaller bubbles for OTUs with less cultures and larger bubbles for OTUs with more cultures). Hovering over a specific bubble with the mouse cursor will display its volume and the name of the OTU.

The gauge chart shows the frewuency of belly button washes each week. The gauge ranges from 0 to 9. It fills in a green line display the number of washes per week. A numerical display also shows the number of washes per week.

All the information displayed will automatically adjust to display the appropriate data from the user selected subject ID.
