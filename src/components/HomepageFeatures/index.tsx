import type { ReactNode } from "react";
import FeatureCard from "./FeatureCard";
import { FEATURES } from "./features";
import styles from "./styles.module.css";

/**
 * Homepage section listing what makes ModulixOS different, as a three-card
 * grid.
 */
export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} index={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
