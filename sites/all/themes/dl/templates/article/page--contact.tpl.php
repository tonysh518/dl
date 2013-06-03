<div class="page">
    <div class="phd phd_clients">
        <?php print render($page['header']); ?>
    </div>
    <div class="pbd">
        <div class="mod mod_contact">
            <div id="googlemap"></div>
            <div class="contact_con">
                <div class="address">
                    <h2><?php print $node->title?></h2>
                    <?php print $node->body[und][0][value]?>
                </div>
                <div class="message">
                    <form id="contact_form" action="services/dl" method="post">
                        <div class="mess_fi"><input class="ipt_mess" type="text" name="name" value="Name" onfocus="if (value =='Name'){value =''}" onblur="if (value ==''){value='Name'}" /></div>
                        <div class="mess_fi"><input class="ipt_mess" type="text" name="email" value="Email" onfocus="if (value =='Email'){value =''}" onblur="if (value ==''){value='Email'}" /></div>
                        <div class="mess_fi"><textarea class="text_mess" cols="50" rows="8" name="message" type="text" value="Message" onfocus="if (value =='Message'){value =''}" onblur="if (value ==''){value='Message'}"></textarea></div>
                        <div class="mess_fi"><input class="ipt_btn" type="submit" value="SEND" /></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="pft">
        <?php print render($page['footer']); ?>
    </div>
</div>

<script src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>
<script>
    var styles = [
        {
            stylers: [
                { hue: "#000" },
                { saturation: -100 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 50 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "on" }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});
    var point = new google.maps.LatLng(31.225099,121.458331);
    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(31.225099,121.458331),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    infowindow = new google.maps.InfoWindow();
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('googlemap'),
        mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var marker = new google.maps.Marker({
        position: point,
        map: map,
        title: 'Strictly'
    });
</script>

<script>
    var page_path = 'contact';
</script>