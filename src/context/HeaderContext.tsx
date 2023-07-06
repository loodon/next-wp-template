// 'use client';
// import { createContext, useState, ReactNode, useEffect } from 'react';
// import axios from 'axios';

// import { GetHeaderQuery } from '@/queries';

// type HeaderItemType = {
//   logo?: string;
//   logoAlt?: string;
//   pages?: string;
// } | null;

// type HeaderContextType = {
//   header?: HeaderItemType | null;
//   headerSet?: any;
// } | null;

// export const HeadersContext = createContext<HeaderContextType>(null);

// const Context = ({ children }: { children?: ReactNode }) => {
//   const [header, headerSet] = useState(null);

//   const getHeader = async () => {
//     try {
//       axios({
//         url: `${process.env.NEXT_PUBLIC_API_URL}`,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         method: 'header',
//         data: {
//           query: GetHeaderQuery,
//         },
//       }).then((result) => {
//         console.log('result', result);
//         // put return object into headerSet
//       });
//     } catch (error) {
//       console.log('error', error);
//     }
//   };

//   useEffect(() => {
//     getHeader();
//   }, []);

//   return (
//     <HeadersContext.Provider value={{ header, headerSet }}>
//       {children}
//     </HeadersContext.Provider>
//   );
// };

// export default Context;
