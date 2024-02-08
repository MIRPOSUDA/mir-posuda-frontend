import { useEffect } from "react";

function Chat() {
  useEffect(() => {
    window.replainSettings = { id: "be00318d-9b25-4f15-87df-f027ab5d2dc2" };
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://widget.replain.cc/dist/client.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}

export default Chat;
