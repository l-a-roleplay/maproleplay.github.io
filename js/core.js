var layer,mapExtent=[0,-8192,8192,0],mapMinZoom=1,mapMaxZoom=6,mapMaxResolution=.25,mapMinResolution=Math.pow(2,mapMaxZoom)*mapMaxResolution,tileExtent=[0,-8192,8192,0],crs=L.CRS.Simple;crs.transformation=new L.Transformation(1,-tileExtent[0],-1,tileExtent[3]),crs.scale=function(r){return Math.pow(2,r)/mapMinResolution},crs.zoom=function(r){return Math.log(r*mapMinResolution)/Math.LN2};var map=new L.Map("map",{maxZoom:mapMaxZoom,minZoom:mapMinZoom,crs:crs});layer=L.tileLayer("{z}/{x}/{y}.png",{minZoom:mapMinZoom,maxZoom:mapMaxZoom,tileSize:512,attribution:'&copy; L.A Roleplay</a>',noWrap:!0,tms:!1}).addTo(map),map.fitBounds([crs.unproject(L.point(mapExtent[2],mapExtent[3])),crs.unproject(L.point(mapExtent[0],mapExtent[1]))]),L.control.mousePosition().addTo(map);var numMarker=L.Icon.extend({options:{iconSize:[32,37],iconAnchor:[16,37]}}),cardIcon1=new numMarker({iconUrl:"markers/concessionnaire.png"}),cardIcon2=new numMarker({iconUrl:"markers/lspd.png"}),cardIcon3=new numMarker({iconUrl:"markers/lhopital.png"}),cardIcon4=new numMarker({iconUrl:"markers/gouv.png"}),cardIcon5=new numMarker({iconUrl:"markers/ltd.png"}),cardIcon6=new numMarker({iconUrl:"markers/lscustom.png"}),cardIcon7=new numMarker({iconUrl:"markers/airport.png"}),cardIcon8=new numMarker({iconUrl:"markers/feteforaine.png"}),cardIcon9=new numMarker({iconUrl:"markers/chilliad.png"}),cardIcon10=new numMarker({iconUrl:"markers/port.png"}),cardIcon11=new numMarker({iconUrl:"markers/prison.png"}),cardIcon12=new numMarker({iconUrl:"markers/taxi.png"}),cardIcon13=new numMarker({iconUrl:"markers/bank.png"}),cardIcon14=new numMarker({iconUrl:"markers/pbank.png"}),cardIcon15=new numMarker({iconUrl:"markers/immo.png"}),cardIcon16=new numMarker({iconUrl:"markers/ammu.png"}),cardIcon17=new numMarker({iconUrl:"markers/yjb.png"}),cardIcon18=new numMarker({iconUrl:"markers/chantier.png"}),cardIcon19=new numMarker({iconUrl:"markers/observatoire.png"}),cardIcon20=new numMarker({iconUrl:"markers/journaliste.png"}),cardIcon21=new numMarker({iconUrl:"markers/tribunal.png"}),cardIcon22=new numMarker({iconUrl:"markers/pe.png"}),cardIcon23=new numMarker({iconUrl:"markers/club.png"}),cardIcon24=new numMarker({iconUrl:"markers/bdn.png"}),cardIcon25=new numMarker({iconUrl:"markers/labo.png"}),cardIcon26=new numMarker({iconUrl:"markers/dsm.png"}),cardIcon27=new numMarker({iconUrl:"markers/hotel.png"}),cardIcon28=new numMarker({iconUrl:"markers/latransit.png"}),cardIcon29=new numMarker({iconUrl:"markers/eboueur.png"}),cardIcon30=new numMarker({iconUrl:"markers/fort.png"}),cardIcon31=new numMarker({iconUrl:"markers/casino.png"}),cardIcon32=new numMarker({iconUrl:"markers/entretien.png"}),cardIcon33=new numMarker({iconUrl:"markers/jardin.png"}),cardIcon34=new numMarker({iconUrl:"markers/arcarde.png"}),cardIcon35=new numMarker({iconUrl:"markers/entrepot.png"}),cardIcon36=new numMarker({iconUrl:"markers/marker_36.png"}),cardIcon37=new numMarker({iconUrl:"markers/marker_37.png"}),cardIcon38=new numMarker({iconUrl:"markers/marker_38.png"}),cardIcon39=new numMarker({iconUrl:"markers/marker_39.png"}),cardIcon40=new numMarker({iconUrl:"markers/marker_40.png"}),cardIcon41=new numMarker({iconUrl:"markers/marker_41.png"}),cardIcon42=new numMarker({iconUrl:"markers/marker_42.png"}),cardIcon43=new numMarker({iconUrl:"markers/marker_43.png"}),cardIcon44=new numMarker({iconUrl:"markers/marker_44.png"}),cardIcon45=new numMarker({iconUrl:"markers/marker_45.png"}),cardIcon46=new numMarker({iconUrl:"markers/marker_46.png"}),cardIcon47=new numMarker({iconUrl:"markers/marker_47.png"}),cardIcon48=new numMarker({iconUrl:"markers/marker_48.png"}),cardIcon49=new numMarker({iconUrl:"markers/marker_49.png"}),cardIcon50=new numMarker({iconUrl:"markers/marker_50.png"}),cardIcon51=new numMarker({iconUrl:"markers/marker_51.png"}),cardIcon52=new numMarker({iconUrl:"markers/marker_52.png"}),cardIcon53=new numMarker({iconUrl:"markers/marker_53.png"}),cardIcon54=new numMarker({iconUrl:"markers/marker_54.png"});var hash = new L.Hash(map);
