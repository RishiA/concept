$(document).ready(function() { initialize(); });

function initialize(){
    var mapOptions = {
        center: new google.maps.LatLng(37.556501, -122.301169),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-wrap"), mapOptions);
                           
    var styles = [
					  {
					    stylers: [
					      { visibility: "simplified" },
					      { gamma: 1.56 },
					      { saturation: -10 },
					      { hue: "#3399ff" }
					    ]
					  }
					];
	map.setOptions({styles: styles, scrollwheel: false});
	
	var info_window = new google.maps.InfoWindow({
        content: 'loading'
    });
    
    var herz = {
	  path: "M36.3,17.5L20,32.4L3.7,17.5c-4.2-4-4.2-10.3,0-14.2c3.8-3.4,9.9-3.4,13.7,0L20,5.6l2.6-2.3c3.7-3.4,9.8-3.4,13.6,0C40.5,7.2,40.5,13.5,36.3,17.5z",
	  fillColor: "#ff46af",
	  fillOpacity: 1,
	  scale: 1,
	  strokeColor: "white",
	  anchor: new google.maps.Point(20,30)
	};
    
    var t = [];
    var x = [];
    var y = [];
    var h = [];

    

    t.push('San Mateo Marriott');
    x.push(37.556501);
    y.push(-122.301169);
    h.push('<p class="highlight-map txtpink">10am: Ceremony<br>12 noon: Luncheon Reception</p><br><p class="map"><strong>San Mateo Marriott</strong><br>1717 Amphlett Blvd<br>San Mateo, CA 94066</p><br><p class="map"><span class="entypo">&#10150;</span>Complimentary self-parking<br><a href="#"><span class="entypo">&#128197;</span> Calendar Invite</a></p><br>'); 

    var i = 0;
    for ( item in t ) {
        var m = new google.maps.Marker({
            map:       map,
            animation: google.maps.Animation.DROP,
            title:     t[i],
            position:  new google.maps.LatLng(x[i],y[i]),
            html:      h[i],
            icon: 		herz
        });

        google.maps.event.addListener(m, 'click', function() {
            info_window.setContent(this.html);
            info_window.open(map, this);
        });
        i++;
    }		
}

google.maps.event.addDomListener(window, 'load', initialize);

