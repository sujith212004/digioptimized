import React, { useEffect, useState, useRef } from 'react';

export default function CountUp({ from = 0, to = 10, duration = 1000, suffix = '' , easing = t => t }) {
  const [value, setValue] = useState(from);
  const startRef = useRef(null);

  useEffect(() => {
    let rafId;
    const start = performance.now();
    const diff = to - from;

    function tick(now) {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easing(t);
      const current = Math.round((from + diff * eased) * 10) / 10;
      setValue(current);
      if (t < 1) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [from, to, duration, easing]);

  // Render integer if both from/to are integers, else show one decimal
  const isInteger = Number.isInteger(from) && Number.isInteger(to);
  return <>{isInteger ? Math.round(value) + suffix : value.toFixed(1) + suffix}</>;
}
