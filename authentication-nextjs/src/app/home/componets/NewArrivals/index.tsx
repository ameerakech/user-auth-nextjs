import Image from "next/image";
import Link from "next/link";

const NewArrivals = () => {
  return (
    <div className="space-y-10">
      <div className="relative h-[380px] bg-gray-800">

        <div className="absolute top-4 left-[220px] text-white p-4 max-w-xs">
          <p className="font-bold text-2xl mb-1.5">PlayStation 5</p>
          <p className="mb-3">
            Black and White version of the PS5 <br /> coming out on sale
          </p>
          <Link href="#" className="underline underline-offset-2">
            Shop
          </Link>
        </div>
      </div>

      <div className="bg-black text-white flex justify-around w-[720px] mt-7 h-[260px]">
        <div className="mt-7 max-w-xs">
          <p className="text-3xl font-semibold">Womens Collections</p>
          <p className="mt-2">
            Featured woman collections that <br /> give you another vibe
          </p>
          <Link href="#" className="underline underline-offset-2">
            Shop
          </Link>
        </div>
        <Image
          src="/lady.jpg"
          alt="Girl"
          width={500}
          height={400}
        />
      </div>

      <div className="flex gap-8">
        <div className="relative bg-black text-white flex justify-around w-[340px] mt-5 h-[350px]">
          <Image
            src="/hoofers.png"
            alt="Speaker"
            width={300}
            height={300}
          />
          <div className="absolute top-4 left-4 text-white">
            <p className="font-bold text-lg">Speakers</p>
            <p>Amazon speakers</p>
            <Link href="#" className="underline underline-offset-2">
              Shop
            </Link>
          </div>
        </div>

        <div className="relative bg-black text-white flex justify-around w-[340px] mt-5 h-[350px]">
          <Image
            src="/perfume.png"
            alt="Perfume"
            width={300}
            height={300}
          />
          <div className="absolute top-4 left-4 text-white">
            <p className="font-bold text-lg">Perfume</p>
            <p>GUCCI INTENSE OUD EDP</p>
            <Link href="#" className="underline underline-offset-2">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
