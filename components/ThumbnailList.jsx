import Thumbnail from "./Thumbnail";

export default function ThumbnailList({
  thumbnailUrls,
  addToRefArray,
  updateActive,
}) {
  return (
    <ul className="thumbnail-list flex gap-8">
      {thumbnailUrls.map((image, index) => (
        <li key={index} ref={addToRefArray}>
          <Thumbnail
            index={index}
            image={`${image}`}
            updateActive={updateActive}
          />
        </li>
      ))}
    </ul>
  );
}
