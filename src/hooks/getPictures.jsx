import { useQuery } from "@tanstack/react-query";

let apiUrl = import.meta.env.VITE_APIURL;
let accessKey = import.meta.env.VITE_ACCESSKEY;

const getPictures = () =>
  useQuery({
    queryKey: ["pictures"],
    queryFn: async () => {
      try {
        const res = await fetch(`${apiUrl}?query=africa&per_page=8`, {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data.results;
      } catch (error) {
        console.error(error);
      }
    },
  });

export default getPictures;
