import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import { useImagesLoaded } from "@/hooks/useImagesLoaded";

export default function Home() {
    const isLoaded = useImagesLoaded();

    if (!isLoaded) {
        return <div className="w-screen h-screen bg-gradient-to-r from-black/90 to-pink-400"></div>;
    }

    return (
        <div className="flex flex-col items-center max-w-[1440px] mx-auto">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
