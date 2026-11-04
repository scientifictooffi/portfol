/**
 * Page background: a CSS gradient that is present on the very first frame
 * (no WebGL, nothing swaps in later) with a slow drift, plus light film grain.
 */
export function PageBackground() {
  return (
    <>
      <div aria-hidden="true" className="bg-drift pointer-events-none fixed inset-0 -z-20" />
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 -z-10" />
    </>
  );
}
