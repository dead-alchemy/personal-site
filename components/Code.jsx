import styles from "./Code.module.scss";

const Code = (props) => {
	return <div className={styles["code__main"]}>{props.children}</div>;
};

export default Code;
