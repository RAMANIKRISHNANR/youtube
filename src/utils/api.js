import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US';

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
      'X-RapidAPI-Key': 'b747da412emsh991e29815463d98p125615jsn9f861c425d61'
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

