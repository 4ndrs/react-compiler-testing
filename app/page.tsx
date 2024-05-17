"use client";

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8 flex-col">
      <Header />
      <Count count={count} setCount={setCount} />
      <Count count={count2} setCount={setCount2} />
      <Footer />
    </div>
  );
};

const Header = () => {
  return <div>Hellowo</div>;
};

const Footer = () => {
  return <div>halllowo</div>;
};

const Count = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <button onClick={() => setCount((count) => count + 1)} className="block">
    {count} - Increment
  </button>
);

export default Page;
