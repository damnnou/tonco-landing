import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import xLogo from "@/assets/xLogo.svg";

const TONCO = () => (
    <svg width="149" height="32" viewBox="0 0 149 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.86086 0.472579H26.7959C27.6759 0.472579 28.3221 0.582579 28.7346 0.802579C29.1471 0.995079 29.4221 1.31133 29.5596 1.75133C29.6971 2.19133 29.7659 2.76883 29.7659 3.48383C29.7659 4.19883 29.6971 4.77633 29.5596 5.21633C29.4221 5.62883 29.1884 5.91758 28.8584 6.08258C28.3634 6.33008 27.6621 6.45383 26.7546 6.45383H18.8759V27.2026C18.8759 27.8351 18.8484 28.3026 18.7934 28.6051C18.7659 28.9076 18.6421 29.2651 18.4221 29.6776C18.2296 30.0626 17.8721 30.3376 17.3496 30.5026C16.8271 30.6676 16.1396 30.7501 15.2871 30.7501C14.4346 30.7501 13.7471 30.6676 13.2246 30.5026C12.7296 30.3376 12.3721 30.0626 12.1521 29.6776C11.9596 29.2651 11.8359 28.9076 11.7809 28.6051C11.7534 28.2751 11.7396 27.7938 11.7396 27.1613V6.45383H3.81961C2.93961 6.45383 2.29336 6.35758 1.88086 6.16508C1.46836 5.94508 1.19336 5.61508 1.05586 5.17508C0.918359 4.73508 0.849609 4.15758 0.849609 3.44258C0.849609 2.72758 0.918359 2.16383 1.05586 1.75133C1.19336 1.31133 1.42711 1.00883 1.75711 0.843829C2.25211 0.596329 2.95336 0.472579 3.86086 0.472579Z"
            fill="white"
        />
        <path
            d="M43.7857 0.142578C47.8557 0.142578 51.3895 1.61383 54.387 4.55633C57.3845 7.49883 58.8832 11.1563 58.8832 15.5288C58.8832 19.8738 57.4532 23.5863 54.5932 26.6663C51.7332 29.7188 48.2132 31.2451 44.0332 31.2451C39.8532 31.2451 36.292 29.7326 33.3495 26.7076C30.4345 23.6826 28.977 20.0801 28.977 15.9001C28.977 13.6176 29.3895 11.4863 30.2145 9.50633C31.0395 7.49883 32.1395 5.82133 33.5145 4.47383C34.8895 3.12633 36.4707 2.06758 38.2582 1.29758C40.0457 0.527578 41.8882 0.142578 43.7857 0.142578ZM36.2782 15.6938C36.2782 18.1413 37.062 20.1351 38.6295 21.6751C40.2245 23.1876 41.9982 23.9438 43.9507 23.9438C45.9032 23.9438 47.6632 23.2013 49.2307 21.7163C50.7982 20.2313 51.582 18.2376 51.582 15.7351C51.582 13.2326 50.7845 11.2251 49.1895 9.71258C47.622 8.20008 45.862 7.44383 43.9095 7.44383C41.957 7.44383 40.197 8.21383 38.6295 9.75383C37.062 11.2663 36.2782 13.2463 36.2782 15.6938Z"
            fill="white"
        />
        <path
            d="M81.0918 1.79258C81.3668 1.29758 81.7656 0.967579 82.2881 0.802579C82.8106 0.637578 83.4568 0.555078 84.2268 0.555078C85.0243 0.555078 85.6568 0.623828 86.1243 0.761328C86.6193 0.898827 86.9768 1.06383 87.1968 1.25633C87.4443 1.44883 87.6231 1.73758 87.7331 2.12258C87.8981 2.56258 87.9806 3.26383 87.9806 4.22633V27.1201C87.9806 27.7801 87.9531 28.2613 87.8981 28.5638C87.8706 28.8663 87.7468 29.2238 87.5268 29.6363C87.1418 30.3788 86.0693 30.7501 84.3093 30.7501C83.2368 30.7501 82.4943 30.6676 82.0818 30.5026C81.6693 30.3376 81.3256 30.0763 81.0506 29.7188C74.8631 21.4688 70.7931 16.0788 68.8406 13.5488V27.1201C68.8406 27.7801 68.8131 28.2613 68.7581 28.5638C68.7306 28.8663 68.6068 29.2238 68.3868 29.6363C68.0018 30.3788 66.9293 30.7501 65.1693 30.7501C63.4643 30.7501 62.4193 30.3788 62.0343 29.6363C61.8143 29.2238 61.6768 28.8526 61.6218 28.5226C61.5943 28.1926 61.5806 27.7113 61.5806 27.0788V4.06133C61.5806 3.01633 61.7043 2.26008 61.9518 1.79258C62.2268 1.29758 62.6256 0.967579 63.1481 0.802579C63.6706 0.637578 64.3443 0.555078 65.1693 0.555078C65.9943 0.555078 66.6406 0.637578 67.1081 0.802579C67.6031 0.940079 67.9468 1.10508 68.1393 1.29758C68.2493 1.38008 68.5656 1.73758 69.0881 2.37008C74.8906 10.2626 78.7681 15.4738 80.7206 18.0038V4.06133C80.7206 3.01633 80.8443 2.26008 81.0918 1.79258Z"
            fill="white"
        />
        <path
            d="M110.162 22.8301L110.904 22.2938C111.839 21.7438 112.499 21.4688 112.884 21.4688C113.737 21.4688 114.658 22.2388 115.648 23.7788C116.253 24.7413 116.556 25.5113 116.556 26.0888C116.556 26.6663 116.363 27.1476 115.978 27.5326C115.621 27.9176 115.194 28.2613 114.699 28.5638C114.204 28.8663 113.723 29.1551 113.256 29.4301C112.816 29.7051 111.894 30.0626 110.492 30.5026C109.089 30.9426 107.728 31.1626 106.408 31.1626C105.116 31.1626 103.796 30.9976 102.448 30.6676C101.128 30.3101 99.753 29.7326 98.323 28.9351C96.9205 28.1101 95.6555 27.1201 94.528 25.9651C93.4005 24.7826 92.4655 23.2838 91.723 21.4688C91.008 19.6263 90.6505 17.6326 90.6505 15.4876C90.6505 13.3426 91.008 11.4038 91.723 9.67133C92.438 7.91133 93.3455 6.46758 94.4455 5.34008C95.573 4.18508 96.8518 3.22258 98.2818 2.45258C100.977 0.967579 103.686 0.22508 106.408 0.22508C107.701 0.22508 109.007 0.431329 110.327 0.843829C111.674 1.22883 112.692 1.62758 113.379 2.04008L114.369 2.61758C114.864 2.92008 115.249 3.16758 115.524 3.36008C116.239 3.93758 116.597 4.59758 116.597 5.34008C116.597 6.05508 116.308 6.81133 115.731 7.60883C114.658 9.09383 113.696 9.83633 112.843 9.83633C112.348 9.83633 111.647 9.53383 110.739 8.92883C109.584 7.99383 108.044 7.52633 106.119 7.52633C104.332 7.52633 102.572 8.14508 100.839 9.38258C100.014 9.98758 99.3268 10.8401 98.7768 11.9401C98.2268 13.0401 97.9518 14.2913 97.9518 15.6938C97.9518 17.0688 98.2268 18.3063 98.7768 19.4063C99.3268 20.5063 100.028 21.3726 100.881 22.0051C102.558 23.2151 104.304 23.8201 106.119 23.8201C106.972 23.8201 107.769 23.7101 108.512 23.4901C109.282 23.2701 109.832 23.0501 110.162 22.8301Z"
            fill="white"
        />
        <path
            d="M133.456 0.142578C137.526 0.142578 141.06 1.61383 144.057 4.55633C147.055 7.49883 148.554 11.1563 148.554 15.5288C148.554 19.8738 147.124 23.5863 144.264 26.6663C141.404 29.7188 137.884 31.2451 133.704 31.2451C129.524 31.2451 125.962 29.7326 123.02 26.7076C120.105 23.6826 118.647 20.0801 118.647 15.9001C118.647 13.6176 119.06 11.4863 119.885 9.50633C120.71 7.49883 121.81 5.82133 123.185 4.47383C124.56 3.12633 126.141 2.06758 127.929 1.29758C129.716 0.527578 131.559 0.142578 133.456 0.142578ZM125.949 15.6938C125.949 18.1413 126.732 20.1351 128.3 21.6751C129.895 23.1876 131.669 23.9438 133.621 23.9438C135.574 23.9438 137.334 23.2013 138.901 21.7163C140.469 20.2313 141.252 18.2376 141.252 15.7351C141.252 13.2326 140.455 11.2251 138.86 9.71258C137.292 8.20008 135.532 7.44383 133.58 7.44383C131.627 7.44383 129.867 8.21383 128.3 9.75383C126.732 11.2663 125.949 13.2463 125.949 15.6938Z"
            fill="white"
        />
    </svg>
);

const Header: React.FC = () => {
    return (
        <header
            className="flex justify-between items-center w-full h-fit sticky p-10 pb-0 animate-pea-fly-in opacity-0 animate-fill-forwards animate-duration-500"
            style={{ animationDelay: "1.2s" }}
        >
            <TONCO />
            <nav className="flex gap-5 items-center">
                <Button variant="secondary">
                    More Info
                    <Image alt="x" src={xLogo} quality={100} />
                </Button>
                <Button variant="primary">Launch_App</Button>
            </nav>
        </header>
    );
};

export default Header;
