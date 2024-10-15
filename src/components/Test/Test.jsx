import { getUrl } from 'aws-amplify/storage';
import outputs from "../../../amplify_outputs.json";
import {Amplify} from "aws-amplify";
import { generateClient } from "aws-amplify/data";

// const linkToStorageFile = await getUrl({
//   path: "data/1.jpg",
//   // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
// });

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export const Test = () => {
  return (
    <div>
      {/*<a href={linkToStorageFile.url.toString()} target="_blank" rel="noreferrer">*/}
      {/*  {"fileName"}*/}
      {/*</a>*/}
    </div>
  )
}