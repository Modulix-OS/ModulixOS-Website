import type { ReactNode } from "react";
import { useCountUp } from "@site/src/hooks/useCountUp";

/**
 * Figure that counts up from zero once it is allowed to start.
 *
 * @param props.value Final value to reach.
 * @param props.suffix Unit appended right after the number. Omit for none.
 * @param props.active Whether the count-up may start.
 */
export default function CountUpValue({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}): ReactNode {
  const current = useCountUp(value, active);

  return (
    <>
      {current}
      {suffix}
    </>
  );
}
