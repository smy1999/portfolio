import { getUrl } from 'aws-amplify/storage';
import outputs from "../../../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { useEffect, useState } from "react";

Amplify.configure(outputs);

export const Test = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const linkToStorageFile = await getUrl({
          path: ({ identityId }) => `media/${identityId}/1.jpg`,
        });
        setUrl(linkToStorageFile.url.toString());
      } catch (error) {
        console.error("Error fetching URL:", error);
      }
    };

    fetchUrl();
  }, []);

  return (
    <div>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          fileName
        </a>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};