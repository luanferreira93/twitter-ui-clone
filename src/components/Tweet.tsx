interface TweetProps{
  text: string,
  user: string,
};


export function Tweet({text,user}:TweetProps){
  return(
    <div>
      <h1>{text}</h1>
      <small>{user}</small>
    </div>
  );
};