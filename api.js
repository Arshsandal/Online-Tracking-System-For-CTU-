const selectFromStation = document.querySelector('#stationFrom')
var placeholderOption = document.createElement("option");
placeholderOption.value = "";
placeholderOption.textContent = "Select Station From";
placeholderOption.disabled = true;
placeholderOption.selected = true;
selectFromStation.appendChild(placeholderOption);
fetch('http://127.0.0.1:5500/api/formatted_bus_routes.json')
  .then(res => res.json())
  .then(data => {
    data.forEach((item) => {
      const Rno = item.route_number;
      const From = item.start;
      const option = document.createElement("option")
      option.value = From;
      option.textContent = `${Rno} ${From}`;
      selectFromStation.appendChild(option)
    });
  })





  

const selectToStation = document.querySelector('#selectToStation')
var placeholderOption = document.createElement("option");
placeholderOption.value = "";
placeholderOption.textContent = "Select Station To";
placeholderOption.disabled = true;
placeholderOption.selected = true;
selectToStation.appendChild(placeholderOption);
fetch('http://127.0.0.1:5500/api/formatted_bus_routes.json')
  .then(res => res.json())
  .then(data => {
    data.forEach((item) => {
      const To = item.start;
      const option = document.createElement("option")
      option.value = To;
      option.textContent = To;
      selectToStation.appendChild(option)
    });
  })
