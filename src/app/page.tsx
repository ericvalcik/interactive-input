export default function Home() {
  return (
    <>
      <input type="checkbox" id="toggle" name="toggle" />
      <label htmlFor="toggle">Hide the overlay to see what&apos;s inside</label>

      <main>
        <div id="a"></div>
        <div id="b"></div>
      </main>
    </>
  );
}
