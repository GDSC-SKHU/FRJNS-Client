import { useEffect, useState } from "react";
import { ProgressBar } from "react95";

interface Props {
  isLoading: boolean;
}

export default function LoadingProgressBar({ isLoading }: Props) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev === 100) return 0;

        const diff = Math.random() * 10;
        return Math.min(prev + diff, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <ProgressBar key="pgb" value={Math.floor(percent)} style={{ width: "80%" }} />
      ) : (
        <ProgressBar key="pgb" value={100} style={{ width: "80%" }} />
      )}
    </>
  );
}
