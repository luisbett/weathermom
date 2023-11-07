import { DataProps } from '../types/data'

export default function useProcessData(data: DataProps) {

    //Variable that receive the mom answer
    let itemsString = []

    const temp = Math.round(Number(data.main.temp))
    const humidity = data.main.humidity
    const wind = data.wind.speed * 3.6

    //Wind
    if(wind <= 2) {
        itemsString.push('wind1')
    } else if(wind > 2 && wind <= 11) {
        itemsString.push('wind2')
    } else if(wind > 12 && wind <= 19) {
        itemsString.push('wind3')
    } else if(wind > 20 && wind <= 28) {
        itemsString.push('wind4')
    } else if(wind > 29 && wind <= 38) {
        itemsString.push('wind5')
    } else if(wind > 39 && wind <= 49) {
        itemsString.push('wind6')
    } else if(wind > 50 && wind <= 61) {
        itemsString.push('wind7')
    } else if(wind > 62) {
        itemsString.push('wind8')
    }

    //Clothing
    if(temp <= -3) {
        itemsString.push('clothing1')
    } else if (temp > -3 && temp <= 6) {
        itemsString.push('clothing2')
    } else if (temp > 6 && temp <= 17) {
        itemsString.push('clothing3')
    } else if (temp > 17 && temp <= 26) {
        itemsString.push('clothing4')
    } else {
        itemsString.push('clothing5')
    }
    
    //Sunscream
    itemsString.push('sunscreen1')

    //Sunglasses
    itemsString.push('sunglasses1')

    //Umbrella
    if (humidity < 85) {
        itemsString.push('umbrella1')
    } else if (humidity >= 85) {
        itemsString.push('umbrella2')
    }

    return itemsString
}