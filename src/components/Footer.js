import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
function Footer() {
    return (
        <div className="bg-gray-100 w-auto -mt-5 py-16 px-16 ">
            <div className="bg-amazon_blue flex flex-grow items-center rounded-lg ">
                <div className="flex flex-grow items-center justify-start">
                    <div>
                        <p className="text-2xl text-white font-extralight flex flex-grow items-center justify-center ml-5 pl-2">Download App Today</p>
                        <p className="text-xs text-white font-extralight flex flex-grow items-center justify-center ml-5 pl-2">Download our app today for</p>
                        <p className="text-xs text-white font-extralight flex flex-grow items-center justify-center ml-5 pl-2">Android & IOS. Its Free</p>
                        <div className="flex flex-grow items-center space-x-5 mt-5 justify-center ml-5">
                            <div className=" flex  items-center justify-center rounded-lg  text-white bg-green-600 px-5  ">

                                <ShopIcon className="text-gray-100" />
                                <div className="ml-2">
                                    <p className="text-xs font-extralight">Download on the</p>
                                    <p>Google Play</p>
                                </div>

                            </div>
                            <div className="flex  items-center justify-center rounded-lg  text-white bg-green-600 px-5 ">
                                <AppleIcon className="text-gray-100" />
                                <div className="ml-2">
                                    <p className="text-xs font-extralight">Download on the</p>
                                    <p>App Store</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-grow items-center justify-center mr-5 pr-2 ">
                    <img
                        src="Images/Group 195.png"
                        objectFit="contain"
                        height={200}
                        width={250}
                    />

                </div>
            </div>
            <div className="flex items-center justify-evenly ">
                <div className="">
                    <div className="">
                        <img src="Images/logo.svg"
                            width={40}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer active:transform active:scale-90 mt-2 mb-2 pt-2 pb-2" />
                    </div>
                    <p className="text-sm font-extralight">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <p className="text-sm font-extralight">Lorem Ipsum has been the industry</p>
                    <p className="text-sm font-extralight">dummy text ever since 1500s.</p>
                    <p className="text-sm font-extralight ">When an unknown printer.</p>
                </div>
                <div className="">
                    Quick Links
                    <div className="flex ">
                        <p className="flex flex-grow items-center  mt-2 m-2 text-sm font-extralight">
                            <img src="Images/Polygon 1.svg"
                                width={10}
                                height={10}
                                objectFit="contain"
                                className="cursor-pointer active:transform active:scale-90 mr-2" />
                            Home</p>
                        <p className="flex flex-grow items-center  mt-2 m-2 text-sm font-extralight">
                            <img src="Images/Polygon 1.svg"
                                width={10}
                                height={10}
                                objectFit="contain"
                                className="cursor-pointer active:transform active:scale-90 mr-2" />How It Works</p>
                    </div>
                    <div className="flex flex-grow items-center mt-2 m-2 text-sm font-extralight">
                        <p className="flex">
                            <img src="Images/Polygon 1.svg"
                                width={10}
                                height={10}
                                objectFit="contain"
                                className="cursor-pointer active:transform active:scale-90 mr-2" />
                            About Us</p>
                        <p className="flex flex-grow items-center mt-2 m-2 text-sm font-extralight">
                            <img src="Images/Polygon 1.svg"
                                width={10}
                                height={10}
                                objectFit="contain"
                                className="cursor-pointer active:transform active:scale-90 mr-2" />
                            Pricing</p>
                    </div>
                    <div className="flex flex-grow items-center mt-2 m-2 text-sm font-extralight">
                        <p className="flex">
                            <img src="Images/Polygon 1.svg"
                                width={10}
                                height={10}
                                objectFit="contain"
                                className="cursor-pointer active:transform active:scale-90 mr-2" />
                            Features</p>
                    </div>

                </div>
                <div>
                    Social Links
                    <div className="flex space-x-4 mt-4">
                        <img src="Images/Facebook.svg"
                            width={40}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer active:transform active:scale-90" />
                        <img src="Images/Instagram.svg"
                            width={40}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer active:transform active:scale-90" />
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <img src="Images/Twitter.svg"
                            width={40}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer active:transform active:scale-90" />
                        <img src="Images/Youtube.svg"
                            width={40}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer active:transform active:scale-90" />
                    </div>
                </div>

            </div>
            <div >


            </div>
        </div>
    )
}

export default Footer
