
var panZoomMap = svgPanZoom('#map', {
    controlIconsEnabled: true
  });
  // or
   var svgElement = document.querySelector('#map')
  var panZoomMap = svgPanZoom('#map', {
    viewportSelector: '.panzoom'
  , panEnabled: true
  , controlIconsEnabled: true
  , zoomEnabled: true
  , dblClickZoomEnabled: true
  , mouseWheelZoomEnabled: false
  , preventMouseEventsDefault: true
  , zoomScaleSensitivity: 0.2
  , minZoom: 0.5
  , maxZoom: 6
  , fit: true
  , contain: false
  , center: true
  , refreshRate: 'auto'
  , beforeZoom: function(){}
  , onZoom: function(){}
  , beforePan: function(){}
  , onPan: function(){}
  , customEventsHandler: {}
  , eventsListenerElement: null
  });
  
  
  // $( "#GL" ).click(function() {
  //   alert( "You clicked on Greenland" );
  // });
  
  $('#RU').magnificPopup({
    items: {
        src: '#test-popup',
        type: 'inline'
    },
     closeBtnInside: true,
    mainClass: 'mfp-fade'
  });

  

  var modalBtn = document.quertSelector('.modal-btn')
  var modalBg = document.quertSelector('.modal-bg')

  modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
  });