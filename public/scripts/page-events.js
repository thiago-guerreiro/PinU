//criação do mapa
const map = L.map('map')
map.locate({setView: true, maxZoom: 15})


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id, title, lat, lng}){

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight:240
    }).setContent(`${title} <a href="/evento?id=${id}"><img src="/images/Arrowarrow-white.svg"</a>`)
    
    L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup)
}

const eventsSpan = document.querySelectorAll('.events span')
eventsSpan.forEach(eventElement => {
    const event = {
        id: eventElement.dataset.id,
        title: eventElement.dataset.title,
        lat: eventElement.dataset.lat,
        lng: eventElement.dataset.lng

    }
    addMarker(event)
})  