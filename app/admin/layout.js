/* eslint-disable @next/next/no-css-tags */
import Script from "next/script";
import React from "react";

export default function AdminLayout({ children }) {
  return (
    <>
      <head>
        <link rel="stylesheet" href="assets/css/nucleo-svg.css" />
        <link rel="stylesheet" href="assets/css/nucleo-icons.css" />
        <link rel="stylesheet" href="assets/css/flex-slider.css" />
        <link rel="stylesheet" href="assets/css/material-dashboard.css" />
        <link rel="stylesheet" href="assets/css/material-dashboard.css.map" />

        <Script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />

        <link
          id="pagestyle"
          href="assets/css/material-dashboard.css"
          rel="stylesheet"
        />
      </head>
      {/* <div>AdminLayout</div> */}
      {children}
      {/* <Script src="assets/js/plugins/perfect-scrollbar.min.js" /> */}
      {/* <Script src="assets/js/plugins/smooth-scrollbar.min.js" /> */}
    </>
  );
}
