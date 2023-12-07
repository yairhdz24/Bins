import axios from "axios";

export const Bins = async (bin) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3001/api/consultar-bin',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '1f14ca8ddcmsh599ff71dcb5bc2cp16d191jsn6e97d77cc515',
      'X-RapidAPI-Host': 'bin-ip-checker.p.rapidapi.com'
    },
    data: { bin: bin }, // Asegúrate de que la estructura sea correcta
    maxRedirects: 5,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud a la API:', error.message);
    throw error;
  }
};