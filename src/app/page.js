'use client'; 

import Image from "next/image";
import tarot from '@/app/tarot/page'

export default function Home() {
  return <RedirectToTarot />;

  function RedirectToTarot() {
    const router = useRouter();
    useEffect(() => {
      router.push('/tarot');
    }, []);
    return null;
  }
}
