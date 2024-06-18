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

      <div className="p-12 flex justify-between">
        <h1 className="text-4xl">
          Vendor Contact for Indonesia Film Festival 2024
        </h1>
        <AddVendorForm />
      </div>
      <div className="grid grid-cols-3 gap-4 p-12">
        {data.map((item) => {
          return <VendorCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}
