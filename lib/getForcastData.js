export default async function getForcastData(searchTerm) {
  try {
    const result =
      await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ca98d66223f34543bd9190426231511&q=${searchTerm}&days=7
      `);

    const data = result;

    return data.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getForcastDataFromGeoLocation(lat, lon) {
  try {
    const result =
      await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ca98d66223f34543bd9190426231511&q=${lat},${lon}&days=7
      `);

    const data = result;

    return data.json();
  } catch (error) {
    console.log(error);
  }
}
