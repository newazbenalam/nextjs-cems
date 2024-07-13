/* eslint-disable @next/next/no-css-tags */
import Script from "next/script";
import React from "react";

// export function PreloadResources() {
//   ReactDOM.preload('assets/css/nucleo-svg.css', { as: 'stylesheet' })
//   ReactDOM.preload('assets/css/nucleo-icons.css', { as: 'stylesheet' })
//   ReactDOM.preload('assets/css/material-dashboard.css', { as: 'stylesheet' })
//   ReactDOM.preload('assets/css/material-dashboard.css.map', { as: 'stylesheet' })
 
//   return null
// }

export default function AdminLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
