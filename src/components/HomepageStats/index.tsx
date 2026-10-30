import type { ReactNode } from "react";
import { Reveal } from "@site/src/components/Reveal";
import StatCell from "./StatCell";
import { STATS } from "./stats";
import styles from "./styles.module.css";

/**
 * Homepage band showing a handful of key figures about the project.
 *
 * The band is revealed as one block, and its visibility is what releases the
 * count-up of every cell, so the figures only start running once they can be
 * read.
 */
export default function HomepageStats(): ReactNode {
  return (
    <section className={styles.stats}>
      <div className="container">
        <Reveal className={styles.grid}>
          {(isVisible) =>
            STATS.map((stat, idx) => (
              <StatCell key={idx} active={isVisible} {...stat} />
            ))
          }
        </Reveal>
      </div>
    </section>
  );
}
