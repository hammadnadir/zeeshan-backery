import { wrapper } from "@/store";
import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Topbar from "@/components/common/topbar";
import { Header } from "@/components/common";

function App({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);
  const [isSSR2, setIsSSR2] = useState(false);

  useEffect(() => {
    setIsSSR(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isSSR) {
    return null;
  }

  return (
    <>
      <head>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"></link>
      </head>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
