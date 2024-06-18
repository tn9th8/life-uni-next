import style from "../app/styles.module.scss";

function AppContainer({ children }) {
  return <div className={style.appContainer}>{children}</div>;
}

export default AppContainer;
