import { getUrl } from 'aws-amplify/storage';

const linkToStorageFile = await getUrl({
  path: "album/2024/1.jpg",
  // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
});


export const Test = () => {
  return (
    <div>
      <a href={linkToStorageFile.url.toString()} target="_blank" rel="noreferrer">
        {"fileName"}
      </a>
    </div>
  )
}