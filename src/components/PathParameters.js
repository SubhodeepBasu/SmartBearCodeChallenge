import Parameter from "./Parameter";

const PathParameters = (props) => {
  const parameters = props.parameters;
  return (
    <div>
      <h3>Parameters</h3>
      <ul>
        {parameters.map((parameter) => (
          <li key={Math.random()}>
            <Parameter parameter={parameter} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PathParameters;
