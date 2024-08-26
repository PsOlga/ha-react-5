import logo from "../assets/logo.png";
import styles from "./style.module.css";

function Hedder () {

    return(
        <div className={styles.head_cont}>
            <a href="#">
                <img src={logo} alt="Logo" />
                </a>
        </div>
    )
}

export default Hedder;