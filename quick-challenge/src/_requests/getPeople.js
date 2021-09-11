import axios from "axios";

export async function getPeople() {
  try {
    const {
      data: { results },
    } = await axios.get("https://randomuser.me/api/?results=5");
    return results;
  } catch (err) {
    // handle error
    throw err;
  }
}
