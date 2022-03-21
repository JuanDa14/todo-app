const base = process.env.REACT_APP_API_URL;

export const fetchHelper = async (endpoint = "", method = "", body = {}) => {
  try {
    const resp = await fetch(`${base}${endpoint}`, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
