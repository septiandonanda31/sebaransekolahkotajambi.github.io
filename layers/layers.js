var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdm_1 = new ol.format.GeoJSON();
var features_BatasAdm_1 = format_BatasAdm_1.readFeatures(json_BatasAdm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdm_1.addFeatures(features_BatasAdm_1);
var lyr_BatasAdm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdm_1, 
                style: style_BatasAdm_1,
                popuplayertitle: 'Batas Adm ',
                interactive: true,
                title: '<img src="styles/legend/BatasAdm_1.png" /> Batas Adm '
            });
var format_jambi_desa_2 = new ol.format.GeoJSON();
var features_jambi_desa_2 = format_jambi_desa_2.readFeatures(json_jambi_desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jambi_desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jambi_desa_2.addFeatures(features_jambi_desa_2);
var lyr_jambi_desa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jambi_desa_2, 
                style: style_jambi_desa_2,
                popuplayertitle: 'jambi_desa',
                interactive: true,
                title: '<img src="styles/legend/jambi_desa_2.png" /> jambi_desa'
            });
var format_KONTUR_3 = new ol.format.GeoJSON();
var features_KONTUR_3 = format_KONTUR_3.readFeatures(json_KONTUR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONTUR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONTUR_3.addFeatures(features_KONTUR_3);
var lyr_KONTUR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONTUR_3, 
                style: style_KONTUR_3,
                popuplayertitle: 'KONTUR',
                interactive: true,
                title: '<img src="styles/legend/KONTUR_3.png" /> KONTUR'
            });
var format_PENDIDIKAN_4 = new ol.format.GeoJSON();
var features_PENDIDIKAN_4 = format_PENDIDIKAN_4.readFeatures(json_PENDIDIKAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_4.addFeatures(features_PENDIDIKAN_4);
var lyr_PENDIDIKAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_4, 
                style: style_PENDIDIKAN_4,
                popuplayertitle: 'PENDIDIKAN',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_4.png" /> PENDIDIKAN'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BatasAdm_1.setVisible(true);lyr_jambi_desa_2.setVisible(true);lyr_KONTUR_3.setVisible(true);lyr_PENDIDIKAN_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BatasAdm_1,lyr_jambi_desa_2,lyr_KONTUR_3,lyr_PENDIDIKAN_4];
lyr_BatasAdm_1.set('fieldAliases', {'qc_id': 'qc_id', 'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_jambi_desa_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'provinsi': 'provinsi', 'id_prov': 'id_prov', 'kab_kota': 'kab_kota', 'id_kab_kot': 'id_kab_kot', 'kecamatan': 'kecamatan', 'id_kec': 'id_kec', 'desa': 'desa', 'id_desa': 'id_desa', 'dana': 'dana', 'penggunaan': 'penggunaan', 'penyerapan': 'penyerapan', 'p1': 'p1', 'p2': 'p2', 'p3': 'p3', 'p4': 'p4', 'p5': 'p5', });
lyr_KONTUR_3.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'valknt': 'valknt', 'tipknt': 'tipknt', 'idxknt': 'idxknt', 'fcode': 'fcode', 'jnsknt': 'jnsknt', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'shape_leng': 'shape_leng', });
lyr_PENDIDIKAN_4.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'luas': 'luas', 'katpdk': 'katpdk', 'jlpddk': 'jlpddk', 'fggpdk': 'fggpdk', 'remark': 'remark', 'fcode': 'fcode', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'jjgpdf': 'jjgpdf', 'jnspdl': 'jnspdl', });
lyr_BatasAdm_1.set('fieldImages', {'qc_id': '', 'kdppum': '', 'namobj': '', 'remark': '', 'kdpbps': '', 'fcode': '', 'luaswh': '', 'uupp': '', 'srs_id': '', 'lcode': '', 'metadata': '', 'kdebps': '', 'kdepum': '', 'kdcbps': '', 'kdcpum': '', 'kdbbps': '', 'kdbpum': '', 'wadmkd': '', 'wiadkd': '', 'wadmkc': '', 'wiadkc': '', 'wadmkk': '', 'wiadkk': '', 'wadmpr': '', 'wiadpr': '', 'tipadm': '', 'shape_leng': '', 'shape_area': '', });
lyr_jambi_desa_2.set('fieldImages', {'qc_id': '', 'fid': '', 'provinsi': '', 'id_prov': '', 'kab_kota': '', 'id_kab_kot': '', 'kecamatan': '', 'id_kec': '', 'desa': '', 'id_desa': '', 'dana': '', 'penggunaan': '', 'penyerapan': '', 'p1': '', 'p2': '', 'p3': '', 'p4': '', 'p5': '', });
lyr_KONTUR_3.set('fieldImages', {'qc_id': '', 'namobj': '', 'valknt': '', 'tipknt': '', 'idxknt': '', 'fcode': '', 'jnsknt': '', 'remark': '', 'srs_id': '', 'lcode': '', 'metadata': '', 'shape_leng': '', });
lyr_PENDIDIKAN_4.set('fieldImages', {'qc_id': '', 'namobj': '', 'luas': '', 'katpdk': '', 'jlpddk': '', 'fggpdk': '', 'remark': '', 'fcode': '', 'srs_id': '', 'lcode': '', 'metadata': '', 'jjgpdf': '', 'jnspdl': '', });
lyr_BatasAdm_1.set('fieldLabels', {'qc_id': 'hidden field', 'kdppum': 'hidden field', 'namobj': 'hidden field', 'remark': 'inline label - always visible', 'kdpbps': 'hidden field', 'fcode': 'hidden field', 'luaswh': 'hidden field', 'uupp': 'hidden field', 'srs_id': 'hidden field', 'lcode': 'hidden field', 'metadata': 'hidden field', 'kdebps': 'hidden field', 'kdepum': 'hidden field', 'kdcbps': 'hidden field', 'kdcpum': 'hidden field', 'kdbbps': 'hidden field', 'kdbpum': 'hidden field', 'wadmkd': 'hidden field', 'wiadkd': 'hidden field', 'wadmkc': 'hidden field', 'wiadkc': 'hidden field', 'wadmkk': 'hidden field', 'wiadkk': 'hidden field', 'wadmpr': 'hidden field', 'wiadpr': 'hidden field', 'tipadm': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_jambi_desa_2.set('fieldLabels', {'qc_id': 'hidden field', 'fid': 'hidden field', 'provinsi': 'hidden field', 'id_prov': 'hidden field', 'kab_kota': 'hidden field', 'id_kab_kot': 'hidden field', 'kecamatan': 'hidden field', 'id_kec': 'hidden field', 'desa': 'hidden field', 'id_desa': 'hidden field', 'dana': 'hidden field', 'penggunaan': 'hidden field', 'penyerapan': 'hidden field', 'p1': 'hidden field', 'p2': 'hidden field', 'p3': 'hidden field', 'p4': 'hidden field', 'p5': 'hidden field', });
lyr_KONTUR_3.set('fieldLabels', {'qc_id': 'hidden field', 'namobj': 'hidden field', 'valknt': 'hidden field', 'tipknt': 'hidden field', 'idxknt': 'hidden field', 'fcode': 'hidden field', 'jnsknt': 'hidden field', 'remark': 'inline label - always visible', 'srs_id': 'hidden field', 'lcode': 'hidden field', 'metadata': 'hidden field', 'shape_leng': 'hidden field', });
lyr_PENDIDIKAN_4.set('fieldLabels', {'qc_id': 'hidden field', 'namobj': 'inline label - always visible', 'luas': 'hidden field', 'katpdk': 'hidden field', 'jlpddk': 'hidden field', 'fggpdk': 'hidden field', 'remark': 'hidden field', 'fcode': 'hidden field', 'srs_id': 'hidden field', 'lcode': 'hidden field', 'metadata': 'hidden field', 'jjgpdf': 'hidden field', 'jnspdl': 'hidden field', });
lyr_PENDIDIKAN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});