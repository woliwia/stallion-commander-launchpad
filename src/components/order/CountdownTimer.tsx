import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="bg-destructive text-destructive-foreground py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-2 font-bold text-sm md:text-base">
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
            <span className="uppercase">Hurry - this is our best deal on Stallion Commander and it expires soon</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-semibold">Time Remaining:</span>
            <div className="flex items-center gap-1 bg-destructive-foreground text-destructive px-2 md:px-3 py-1 rounded font-mono font-bold text-base md:text-lg">
              <span>{formatTime(minutes)}</span>
              <span className="animate-pulse">:</span>
              <span>{formatTime(seconds)}</span>
            </div>
          </div>
          
          {timeLeft <= 60 && timeLeft > 0 && (
            <div className="font-bold text-xs md:text-sm animate-bounce">
              FINAL MINUTE - ACT NOW!
            </div>
          )}
          
          {timeLeft === 0 && (
            <div className="font-bold text-xs md:text-sm">
              OFFER EXPIRED - Contact support for special pricing
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;