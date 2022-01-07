function makeLink(element, container) {
    var text_container = document.createElement("div");
    text_container.setAttribute('class', 'text-container');
    text_container.style.width = element['width']+'%';
    text_container.style.cssText += element['custom_style'];
    {
        var link = document.createElement("a");
        link.src = element['url'];
        link.innerHTML = element['title'];
        link.setAttribute('class', 'hyperlink');
        text_container.appendChild(link);
    }
    container.appendChild(text_container);
}

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
