function importProject(path) {
    loadCSV(path).then(function(data) {
    var container = document.getElementById("project-container");
    var indexes = getAllIndexes(data);
    var numlines = indexes.length-1;

    for (fuck=0; fuck < numlines; fuck++) {
        var start_slice = indexes[fuck] + 1;
        var end_slice = indexes[fuck+1];
        var row = data.slice(start_slice, end_slice);
        var row_container = document.createElement("div");
        container.appendChild(row_container);
        for (j=0; j<row.length; j++) {
                row_container.setAttribute('class', 'row');
                type_selector(row[j], row_container);
            }
        }
    }
});
}
