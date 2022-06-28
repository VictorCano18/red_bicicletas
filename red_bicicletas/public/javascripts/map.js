var map = L.map('main_map').setView([19.260225, -99.632754], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([19.260225, -99.632754]).addTo(map);


$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            var marker = L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        })
    }
})

