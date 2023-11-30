import React from "react";

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ photo }) => {
  return (
    <li key={photo.id}>
      <img src={photo.url} alt={photo.title} />
    </li>
  );
});

const List = React.memo(({ photos }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <ListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
});

const PhotoTwo = React.memo(({ message = "", photos = [] }) => {
  return (
    <div>
      <h1>PhotoTwo</h1>
      <Message message={message} />
      <List photos={photos} />
    </div>
  );
});

export default React.memo(PhotoTwo);
// export default PhotoTwo;
