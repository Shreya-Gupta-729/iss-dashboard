import axios from "axios";

export async function fetchData()
{
    const response = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");

    return response.data;
}