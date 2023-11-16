import "@lottiefiles/lottie-player";

interface props{
  styled:{};
}

function Loading({styled}:props) {

  return (
    <div style={{
      position: "fixed"as "fixed",
      top:0,
      zIndex: 999,
      width: "100%",
      height: "100%",
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition:"opacity 0.5s ease",
      ...styled
    }}>
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
