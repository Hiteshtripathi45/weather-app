export async function info(city){
    const response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=U6KDWQPJXVCU8EMMEY95A7CGH`)
    const data = await response.json()
    return data

}

