interface MapLayers {
  id: number
  label: string
  url: string
  attribution: string
  ext?: string
}

const layers: MapLayers[] = [
  {
    id: 1,
    label: 'Open Street',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },

  {
    id: 2,
    label: 'Open Topo',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  },

  {
    id: 3,
    label: 'Stadia Stamen',
    url: 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}',
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
  },

  {
    id: 4,
    label: 'Temperature',
    url: 'http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=c8de53bec21fd6904f961b4f2759445a',
    attribution: '&copy; <a href="http://owm.io">VANE</a>'
  },

  {
    id: 5,
    label: 'Clouds',
    url: 'http://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=c8de53bec21fd6904f961b4f2759445a',
    attribution: '&copy; <a href="http://owm.io">VANE</a>'
  }
]

export default layers
