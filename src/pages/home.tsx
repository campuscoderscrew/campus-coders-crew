import { Header } from "../components/Header";
import { Footer } from "../components/home_components/Footer";
import { Team } from "src/components/Team";
import { Padding } from "src/components/Padding";
import HomeSection from "../components/home_components/HomeSection";
import { Welcome } from "../components/home_components/Welcome";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FFF2F2] flex flex-col">
            <Header />
            <main className="flex-grow flex flex-col">
                <HomeSection />
                <div className="h-40" />
                <Team/>
                <div className="h-40"/>
                <Footer />
            </main>
        </div>
    )
}