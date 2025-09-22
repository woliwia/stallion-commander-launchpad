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
    <>
      <div className="bg-destructive text-destructive-foreground py-3 px-4 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-2 font-bold text-sm md:text-base">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
              <span className="uppercase">CONGRATULATIONS! You have qualified for our greatest offer!</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">Time Remaining:</span>
              <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded font-mono font-bold text-lg">
                <span>{formatTime(minutes)}</span>
                <span className="animate-pulse">:</span>
                <span>{formatTime(seconds)}</span>
              </div>
            </div>
            
            {timeLeft <= 60 && timeLeft > 0 && (
              <div className="font-bold text-sm animate-bounce text-red-600 ml-4">
                FINAL MINUTE - ACT NOW!
              </div>
            )}
            
            {timeLeft === 0 && (
              <div className="font-bold text-sm text-red-600 ml-4">
                OFFER EXPIRED - Contact support for special pricing
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;