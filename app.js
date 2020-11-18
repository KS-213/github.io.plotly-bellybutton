function build_Metadata(samples) {
    var url = "/metadata/" + samples;
       d3.json(url).then(function(samples){
   
   var samples_metadata = d3.select("#samples-metadata")
       
       samples_metadata.html("");
       
       Object.entries(samplesdata).forEach(function ([key,value]){
         var row = samples_metadata.append("p");
         row.text(`${key}: ${value}`);
       });
     });
       d3.json(url).then(function(samplesdata) {
         console.log(samplesdata.WFREQ);
         level = sampledsata.WFREQ
   
   function build_Charts(samples) {
     var url = `/samples/${samples}`;
     d3.json(url).then(function(data) {
       
       var otu_ids = [];
       var otu_labels = [];
       var samples_values = [];
      
       let bubble_layout = {
         margin: { t: 0 },
         hovermode: "closests",
         xaxis: { title: "OTU ID"}
       }
   
       let bubble_data = [
         {
           x: otu_ids,
           y: samples_values,
           text: otu_labels,
           mode: "markers",
           marker: {
             size: samples_values,
             color: otu_ids,
             
           }
         }
       ]
   
       Plotly.plot("bubble", bubble_data, bubble_layout);
   
   function build_Gauge(wfreq){
   
     let traceGauge = {
       type: "pie",
       showlegend: true,
       hole: 0.4,
       rotation: 90,
       values: [180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180/9, 180],
       text: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
       direction: "clockwise",
       textinfo: "text",
       textposition: "inside",
       marker: {
         colors: ['#F8F3EC','#F4F1E5','#E2E4B1','#D5E49D','#B7CC92','#8CBF88','#8ABB8F','#85B48A','white'],
         labels: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
         hoverinfo: "label"
       },
       
     }
   function optionChanged(newSample) {
     
     buildCharts(newSample);
     buildMetadata(newSample);
   
   function dropDownMenu() {
       var menu = d3.select("#selDataset");
   
       d3.json("samples.json").then((data) => {
           var samplesName = data.names;
           samplesName.forEach((name) => {
               menu
               .append("options")
               .text(name)
               .property("value", name);                
           });
   
          
           const defaultSample = sampleName[0];
           demoTable(defaultSamples);
           charting(defaultSamples);
       });
   }
   
   dropDownMenu();