import classes from "./InfoData.module.css";
const InfoData = (props) => {
  return (
    <div className={classes.overlay}>
      <h2>Info</h2>
      <h3>Description</h3>
      <p>{props.storeInfo.description}</p>
      <h3>Version</h3>
      <p>{props.storeInfo.version}</p>
      <h3>Title</h3>
      <p>{props.storeInfo.title}</p>
      <h3>Terms Of Service</h3>
      <p>
        <a href={props.storeInfo.termsOfService}>
          {props.storeInfo.termsOfService}
        </a>
      </p>
      <h3>Email</h3>
      <p>{props.storeInfo.contact.email}</p>
      <h3>License</h3>
      <p>
        <b>Name: </b>
        {props.storeInfo.license.name}
      </p>
      <p>
        <b> URL: </b>
        <a href={props.storeInfo.license.url}>{props.storeInfo.license.url}</a>
      </p>
    </div>
  );
};

export default InfoData;
