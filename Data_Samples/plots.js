d3.json("samples.json").then(function(data){
    console.log(data);
});

// Extract wfreq data, sort array in descending order & remove null values.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
        person.wfreq).sort((a, b) => b -a);
        filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// Display the metadata of any individual from the dataset.
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});