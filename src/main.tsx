import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/body/Body.tsx";
import OurServices from "./components/body/Our Services/OurServices.tsx";
import Contectus from "./components/body/contectUs/Contectus.tsx";
import RequestCallback from "./components/body/RequestCallback/RequestCallback.tsx";
import TestimonialSection from "./components/body/TestimonialSection/TestimonialSection.tsx";
import WhyChooseUsSection from "./components/body/WhyChooseUsSection/WhyChooseUsSection.tsx";
import Sppace from "./components/sppace.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Services",
        element: (
          <>
            <Sppace />
            <OurServices />
          </>
        ),
      },
      {
        path: "/Contact",
        element: (
          <>
            <Sppace />
            <Contectus />
            <RequestCallback />
          </>
        ),
      },
      {
        path: "/ourwork",
        element: (
          <>
            <Sppace />
            <TestimonialSection />
            <WhyChooseUsSection />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
