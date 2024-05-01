import Header from "@/components/headers/header";
import Hero from "@/components/headers/hero";
import SectionCode from "@/components/section-code";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 overflow-hidde mt-14 sm:mt-28">
        <SectionCode />
      </div>
    </>
  );
}
