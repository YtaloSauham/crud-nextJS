export default function Hero(props) {
    return (
      <div id={props.id}>
        <article>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <h4>{props.subtitle}</h4>
          <p>{props.children}</p>
        </article>
      </div>
    );
  }
  