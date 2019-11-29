let map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      new ol.layer.Vector({  // makers layer
          source: new ol.source.Vector(),
          style: new ol.style.Style({
              image: new ol.style.Icon({
                  src: 'https://maps.google.com/mapfiles/ms/micons/blue.png',
                  anchor:[0.5, 32],
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'pixels',
                  opacity: 1,
                  scale: 1
              })
          })
      }),
      new ol.layer.Vector({ // lineString layer
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#8d0000',
                width: 5
            })
        })
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([21.6165, 63.0951]),
      zoom: 9
    })
  });




  function showBuses(evt) {
    console.log("Show buses");
  }

  function showRoute(evt) {
    console.log("Show Route");
  }

  function refresh(evt) {
    console.log("Refresh");
  }
