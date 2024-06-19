import { AddVendorForm } from "@/components/AddVendorForm";
import { Header } from "@/components/Header";
import { VendorCard } from "@/components/VendorCard";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/QtnFeQNT1elQ", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <div className="text-white">
      <Header />

      <div className="p-12 space-y-4 sm:space-y-0 sm:flex justify-between">
        <h1 className="text-xl sm:text-2xl md:text-4xl tracking-wide">
          Vendor Contact for{" "}
          <span className="font-bold text-5xl sm:text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  via-blue-600-600 to-emerald-500">
            Indonesia Film Festival{" "}
            <span className="font-bold text-6xl sm:text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-300  via-emerald-500 to-cyan-500">
              2024
            </span>
          </span>
        </h1>
        <div className="flex justify-end">
          <AddVendorForm />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-12">
        {data.map((item) => {
          return <VendorCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}
