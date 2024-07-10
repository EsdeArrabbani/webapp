  google.script.run.withSuccessHandler(displayData).getDataFromSheet();

  function displayData(data) {
    console.log('Data received:', data);

    var table = document.getElementById('dataTable');
    var tbody = document.getElementById('dataBody');

    // Clear existing data
    tbody.innerHTML = '';

    // Check if data is an array
    if (Array.isArray(data) && data.length > 0) {
      // Create header row
      var headersRow = document.createElement('tr');
      for (var key in data[0]) {
        var th = document.createElement('th');
        th.textContent = key;
        headersRow.appendChild(th);
      }
      table.querySelector('thead').appendChild(headersRow);

      // Populate table with data
      data.forEach(function(row) {
        // Check if row has any non-empty value
        if (Object.values(row).some(value => value !== "")) {
          var tr = document.createElement('tr');
          Object.values(row).forEach(function(value) {
            var td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        }
      });
    } else {
      // Handle case where data is empty or not an array
      console.error('Data is empty or not an array:', data);
      tbody.innerHTML = '<tr><td colspan="5">Failed to load data</td></tr>';
    }
  }
