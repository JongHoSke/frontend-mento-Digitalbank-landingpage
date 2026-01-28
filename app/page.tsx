import "@/app/globals.css";
import "@posts/page";
import FirstSection from "@components/landing/FirstSection";
import SecondSection from "@components/landing/SecondSection";
import ThirdSection from "@components/landing/ThirdSection";
export default function Home() {
  return (
    <main className="flex-auto justify-center text-center">
      <section>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </section>
    </main>
  );
}
