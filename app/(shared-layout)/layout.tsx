import { Navbar } from "@/components/web/navbar";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto pt-[75px] px-10 w-full">{children}</div>
    </div>
  );
}
