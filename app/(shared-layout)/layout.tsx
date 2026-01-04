import { Navbar } from "@/components/web/navbar";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-[75px]">{children}</div>
    </div>
  );
}
