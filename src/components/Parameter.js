import classes from "./Parameter.module.css";
const Parameter = (props) => {
  return (
    <div className={classes.PTable}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.parameter.name}</td>
            <td>{props.parameter.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Parameter;
