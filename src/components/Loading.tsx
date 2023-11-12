import "@lottiefiles/lottie-player";

function Loading() {

  const style = {
    position: "fixed"as "fixed",
    top:0,
    zIndex: 999,
    width: "100%",
    height: "100%",
    background: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={style}>
     <lottie-player
        autoplay
        loop
        mode="normal"
        src='/loading.json'
        style={{width:"fit-content",height:"50dvh"}}
      ></lottie-player>
    </div>
  );
}

export default Loading;
