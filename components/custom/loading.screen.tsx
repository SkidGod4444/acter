import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen min-h-[100vh]">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold text-muted-foreground">
          Acter is syncing...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
