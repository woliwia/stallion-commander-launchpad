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
    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6 animate-pulse">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2 text-destructive font-bold text-sm md:text-base">
          <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
          <span className="uppercase">Hurry - this is our best deal on Stallion Commander and it expires soon</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base font-semibold text-muted-foreground">Time Remaining:</span>
          <div className="flex items-center gap-1 bg-destructive text-destructive-foreground px-3 py-1 rounded-lg font-mono font-bold text-lg md:text-xl">
            <span>{formatTime(minutes)}</span>
            <span className="animate-pulse">:</span>
            <span>{formatTime(seconds)}</span>
          </div>
        </div>
        
        {timeLeft <= 60 && timeLeft > 0 && (
          <div className="text-destructive font-bold text-sm animate-bounce">
            FINAL MINUTE - ACT NOW!
          </div>
        )}
        
        {timeLeft === 0 && (
          <div className="text-destructive font-bold text-sm">
            OFFER EXPIRED - Contact support for special pricing
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;