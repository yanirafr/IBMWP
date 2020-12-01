const Macroinvertebrate = (props) => {
  return (
    <article id={props.cardData.id}>
      <h2>{props.cardData.name}</h2>
      <p>{props.cardData.description}</p>
      <p>Índice IBMWP: {props.cardData.index}</p>
      <p>Tolerancia: {props.cardData.tolerance}</p>
    </article>
  );
};

export default Macroinvertebrate;
