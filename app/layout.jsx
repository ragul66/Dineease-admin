// import Nav from "@/components/Nav";
// import "../styles/globals.css";

// export const metadata = {
//   title: "Dineease",
//   description: "Dine Now",
// };

// const RootLayout = ({ children }) => {
//   return (
//     <html lang="en">
//       <body>
//         <div className="">
//           <div className=""></div>
//         </div>

//         <main className="">
//           <Nav />
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;

import Nav from "../components/Nav"; // Assuming you have the Nav component
import "../styles/globals.css";
export const metadata = {
  title: "Dineease",
  description: "Dine Now",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          {/* <Nav /> */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
