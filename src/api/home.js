import axios from "axios";

export async function getHomePage() {
  try {
    const res = await axios.get(
      "http://localhost:1337/api/homepages?populate=*"
    );

    console.log("STRAPI DATA:", res.data);

    return res.data.data[0]?.attributes; // IMPORTANT
  } catch (error) {
    console.error("AXIOS ERROR:", error);
    return null;
  }
}
