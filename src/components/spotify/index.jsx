import  { ReactComponent as SubtractIcons } from "../../assets/Subtract.svg";
import { ReactComponent as GoogleIcons }  from "../../assets/google.svg";
import { ReactComponent as IxIcons}  from "../../assets/ix.svg";

import styles from "./style.module.css";
function Spotify() {
    return (
        <div className={styles.div_parent_Spotify}>

            <div className={styles.div_Spotify}>
            <h2 className={styles.h2_Spotify}>LIFE IS WASTED ON THE LIVING</h2>
            <p className={styles.p_Spotify}>
                Sing in <br /> with{" "}
            </p>
            </div>
            
            <div className={styles.div_buttons}>
            <button className={styles.btn}>
        <SubtractIcons className={styles.icon} />
        </button>

       <button className={styles.btn}>
       <GoogleIcons className={styles.icon} />
       </button>
<button className={styles.btn}>
        <IxIcons className={styles.icon} />
      </button>

            </div>


        </div>
    )
}

export default Spotify;