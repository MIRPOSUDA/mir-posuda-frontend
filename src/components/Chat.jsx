import React, { useEffect } from 'react';

function Chat() {
  useEffect(() => {
    window.replainSettings = { id: "be00318d-9b25-4f15-87df-f027ab5d2dc2" };
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://widget.replain.cc/dist/client.js";
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs only once after mounting

  return null; // You can return null because this component doesn't render anything visible
}

export default Chat;
