import classes from "./Response.module.css";
const Response = (props) => {
  console.log(props.response);
  const response = props.response;
  return (
    <div className={classes.RTable}>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{response[0]}</td>
            <td>{response[1].description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Response;
