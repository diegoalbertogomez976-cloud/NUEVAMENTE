var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PPP_2 = new ol.format.GeoJSON();
var features_PPP_2 = format_PPP_2.readFeatures(json_PPP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPP_2.addFeatures(features_PPP_2);
var lyr_PPP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPP_2, 
                style: style_PPP_2,
                popuplayertitle: 'PPP',
                interactive: true,
                title: '<img src="styles/legend/PPP_2.png" /> PPP'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_PPP_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_PPP_2];
lyr_PPP_2.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', 'NOMBRE': 'NOMBRE', 'Fract_sub': 'Fract_sub', 'Fract_part': 'Fract_part', 'Fract_area': 'Fract_area', 'DIVISON_DE': 'DIVISON_DE', 'MATRICULA': 'MATRICULA', 'AREA_1': 'AREA_1', 'NOMBRE_1': 'NOMBRE_1', 'FICHA': 'FICHA', });
lyr_PPP_2.set('fieldImages', {'Id': 'Range', 'AREA': 'TextEdit', 'NOMBRE': 'TextEdit', 'Fract_sub': 'TextEdit', 'Fract_part': 'TextEdit', 'Fract_area': 'TextEdit', 'DIVISON_DE': 'TextEdit', 'MATRICULA': 'TextEdit', 'AREA_1': 'TextEdit', 'NOMBRE_1': 'TextEdit', 'FICHA': 'TextEdit', });
lyr_PPP_2.set('fieldLabels', {'Id': 'hidden field', 'AREA': 'hidden field', 'NOMBRE': 'hidden field', 'Fract_sub': 'hidden field', 'Fract_part': 'hidden field', 'Fract_area': 'hidden field', 'DIVISON_DE': 'hidden field', 'MATRICULA': 'hidden field', 'AREA_1': 'inline label - always visible', 'NOMBRE_1': 'inline label - always visible', 'FICHA': 'inline label - always visible', });
lyr_PPP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});