import Header from "@components/Header";
import Home from "@components/Home";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
}
