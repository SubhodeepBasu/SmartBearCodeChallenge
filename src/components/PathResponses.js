import Response from "./Response";

const PathResponses = (props) => {
  const responses = Object.entries(props.responses);
  return (
    <div>
      <h3>Response</h3>
      <ul>
        {responses.map((response) => (
          <li key={response[0]}>
            <Response response={response} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PathResponses;
