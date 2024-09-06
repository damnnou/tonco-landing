const Footer = () => {
    return (
        <footer className="flex flex-col my-16 gap-8 items-center w-fit justify-center">
            <div className="text-7xl text-center text-green-700 font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Follow us to stay
                <br />
                in touch.
            </div>
            <div className="flex gap-10 items-start self-center mt-16 max-md:mt-10">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/577d8d86514803ae67376a2579ada6cb48ef22b8bdb1c000be099eed093ec8ba?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                    className="object-contain shrink-0 aspect-square w-[108px]"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/227a224b92a7e68a543239eb0400196397d2fe8ddc9d4fa66192ac5106bd0e7f?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                    className="object-contain shrink-0 aspect-square w-[108px]"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab667edaf8fdf0c754d5116486d010b57450225f3e478bf2f7f6575c185adc08?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                    className="object-contain shrink-0 aspect-square w-[108px]"
                />
            </div>
            <div className="mt-16 text-base tracking-wider leading-9 text-center text-green-700 max-md:mt-10 max-md:max-w-full">
                © 2024 Tonco! All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
