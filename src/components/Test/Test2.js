import { getUrl } from 'aws-amplify/storage';
import outputs from "../../../amplify_outputs.json";
import {Amplify} from "aws-amplify";
import {useEffect, useState} from "react";


Amplify.configure(outputs);


export const Test2 = async () => {

  // useEffect(() => {
  //   fetchUrl();
  // }, [])
  // const fetchUrl = async () => {
  //   const linkToStorageFile = await getUrl({
  //     path: ({ identityId }) => `media/${identityId}/1.jpg`,
  //   });
  //   setUrl(linkToStorageFile.url.toString())
  // }

  const [url, setUrl] = useState("")

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const linkToStorageFile = await getUrl({
          path: ({ identityId }) => `media/${identityId}/1.jpg`,
        });
        // 设置 URL 到 state
        setUrl(linkToStorageFile.url.toString());
      } catch (error) {
        console.error("Error fetching URL:", error);
      }
    };

    fetchUrl(); // 调用异步函数
  }, []);


  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        {"fileName"}
      </a>
    </div>
  )
}