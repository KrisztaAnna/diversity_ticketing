(function(){
  this.CustomizedMap = function(eventCountries, ticketsCountries) {
    var mapData = {};

    var sumEvents = function(a, b){
      return a + b
    };

    var totalEvents = Object.values(eventCountries).reduce(sumEvents);

    var maxScore = Math.max.apply(null, Object.values(eventCountries)) / totalEvents;

  // This "normalizes" the opacity based on the number of events each country has in order to avoid polarization of the values
  // Maybe could be moved to the controller
    defineOpacity = function(numberOfEvents) {
      countryScore = numberOfEvents / totalEvents;
      return (countryScore / maxScore) + maxScore;
    };

    var keys = Object.keys(eventCountries);
    keys.forEach(function(key){
      mapData[key] = { fillKey: "events", numberOfEvents: eventCountries[key], opacityKey: defineOpacity(eventCountries[key]), numberOfTickets: ticketsCountries[key] };
    });
    map = new Datamap({
      element: document.getElementById("map_events"),
      geographyConfig: {
        highlightBorderColor: '#27AAE1',
        highlightFillColor: '#65BE66',
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo">' + geography.properties.name + ' <p>Number of events: ' +  data.numberOfEvents + ' <p>Number of tickets: ' + data.numberOfTickets
        },
        highlightBorderWidth: 1
      },
      projection: 'mercator',
      data: mapData,
      fills: {
        defaultFill: "#E7E8E9",
        events: "#EA5755"
      }
    });
  }
}).call(this);
