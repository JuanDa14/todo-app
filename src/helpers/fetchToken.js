const base = process.env.REACT_APP_API_URL;

export const fetchTokenHelper = async (
  endpoint = "",
  method = "",
  token = "",
  body = {},
  id = ""
) => {
  try {
    if (method === "GET") {
      const resp = await fetch(`${base}${endpoint}`, {
        method,
        headers: {
          "x-token": token,
        },
      });

      const data = await resp.json();

      return data;
    }

    if (method === "DELETE" || method === "PUT") {
      const resp = await fetch(`${base}${endpoint}/${id}`, {
        method,
        headers: {
          "Content-type": "application/json",
          "x-token": token,
        },
        body: JSON.stringify(body),
      });

      const data = await resp.json();

      return data;
    }

    const resp = await fetch(`${base}${endpoint}`, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(body),
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
