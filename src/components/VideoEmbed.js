import { useEffect, useState } from "react";
import YouTube from "react-youtube";

function VideoEmbed() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const opts1 = {
    height: "300",
    width: "420",
    playerVars: {
      autoplay: 1,
    },
  };
  const opts2 = {
    height: "250",
    width: "370",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube videoId="O-buiiyp_xU" opts={screenWidth < 600 ? opts2 : opts1} />
  );
}

export default VideoEmbed;
