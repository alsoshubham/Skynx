import axios from "axios";

export async function getRepos() {
  try {
    let result = await axios
      .get(
        ""
      )
      .then((res) => res.data);

    result = result.items.map((item) => ({
      id: item.id,
      title: item.name,
      description: item.description,
      image: ``,
      tag: ["All", "Web"],
      gitUrl: item.html_url,
      previewUrl: item.html_url,
    }));

    return result;
  } catch (error) {
    return error;
  }
}