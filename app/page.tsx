import GradientBackground from "~/components/gradient-container";
import PersonalSummary from "~/components/personal-summary";

export default function Home() {
  return (
    <main>
      <GradientBackground>
        <PersonalSummary />
      </GradientBackground>
    </main>
  );
}
