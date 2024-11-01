import Image from "next/image";
import styles from "./page.module.css";
import HomeContainer from "./components/homeContainer";
export default function Home() {
  return (
    <div className={styles.page}>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f0f0f0",
          }}
        >
          <HomeContainer />
        </div>
      </section>
    </div>
  );
}
