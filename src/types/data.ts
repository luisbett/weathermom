export type DataProps = {
    main: {
        temp: number,
        humidity: number
    },
    weather: [{
        id: number
    }],
    wind: {
        speed: number
    }
}