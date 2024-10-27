// import { useEffect, useState } from "react"

// export const useInscriptions = () => {
//     const [inscriptions, setInscriptions] = useState({});

//     const [loading, setLoading] = useState(true);

//     const fetchInscriptions = async () => {
//       setLoading(true);
//       try {
//         const response = await new Promise<Meditation[]>(resolve =>
//           setTimeout(() => resolve(MEDITATION_MOCK), 1000)
//         );
//         setInscriptions(response);
//       } catch (error) {
//         console.error('Failed to fetch reminders:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
    
  
  
//     useEffect(() => {
//         fetchInscriptions();
//     }, []);
//     return {
//         inscriptions,
//         loading
//     }
// }

