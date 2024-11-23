"use server";

import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-evenly items-center bg-zinc-600">
        <p className="text-6xl font-bold text-zinc-300">İTÜ</p>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/itu.jpeg"}
            width={750}
            height={750}
            alt="En yakın zamande açılacak, bakımdayız."
          />
          <p className="text-zinc-200 p-6 italic">Bakımdayız!</p>
        </div>
      </div>
    </>
  );
}
