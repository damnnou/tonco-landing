import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="flex flex-col items-center max-w-[1440px] mx-auto">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
