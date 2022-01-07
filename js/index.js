function makeLink(element, container) {
    var link_container = document.createElement("div");
    link_container.setAttribute('class', 'link-container');
    //link_container.style.width = element['width']+'%';
    //link_container.style.cssText += element['custom_style'];
    {
        var link = document.createElement("a");
        link.src = element['url'];
        link.innerHTML = element['title'];
        link.setAttribute('class', 'hyperlink');
        text_container.appendChild(link);
    }
    container.appendChild(text_container);
}

function getAllIndexes(arr) {
    var indexes = [-1];
    for (l = 0; l < arr.length; l++) {
        if (arr[l]['type'] == 'newline') {
            indexes.push(l);
        }
    }
    indexes.push(arr.length);
    return indexes;
}

function importProject(path) {
    loadCSV(path).then(function(data) {
    var container = document.getElementById("links");
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
                makeLink(row[j], row_container);
            }
    }
});
}
