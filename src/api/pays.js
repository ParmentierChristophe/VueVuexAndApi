import axios from "axios";

export async function getPays() {
  const getPays = await axios.get("https://restcountries.eu/rest/v2/region/europe")
return getPays
  
}
