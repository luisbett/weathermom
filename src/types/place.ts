export type PlaceProps = {
    address_components:[{
        long_name: string
    }],
    geometry: {
        location: {
            lat: Function,
            lng: Function
        }
    }
}