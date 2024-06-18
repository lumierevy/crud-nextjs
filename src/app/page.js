import { Header } from "@/components/Header";
import { VendorCard } from "@/components/VendorCard";
import { VendorForm } from "@/components/VendorForm";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/QtnFeQNT1elQ", {
    cache: "no-store",
  });
  const { data } = await res.json();
  // console.log(data);

  return (
    <div className="text-white">
      <Header />
      <div className="p-12 ">
        <h1 className="text-4xl">
          Vendor List for Indonesia Film Festival 2024
        </h1>
        {/* <button className="bg-indigo-500 px-3 py-2 rounded-xl h-10 ">
          + Add Vendor
        </button> */}
        <div className="pt-4">
          <VendorForm />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-12">
        {data.map((item) => {
          return <VendorCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}
