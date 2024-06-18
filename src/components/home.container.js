import style from "../app/styles.module.scss";

function HomeContainer({ children }) {
  return <div className={style.homeContainer}>{children}</div>;
}

export default HomeContainer;
