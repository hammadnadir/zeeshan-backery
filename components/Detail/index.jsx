import React, { useState, useEffect } from "react";
import Link from "next/link";
import {  useSelector } from "react-redux";
import { useRouter } from "next/router";
import ReactStarsRating from 'react-awesome-stars-rating';
// import InnerImageZoom from 'react-inner-image-zoom';

export default function DetailPage() {
    const [show, setShow] = useState("");
    const [mainData, setMainData] = useState({});
    const [added, setAdded] = useState(false);
    const [loader2, setLoader2] = useState(false)

    const router = useRouter();

    const { products } = useSelector((state) => state.product)
    const { id } = router?.query;

    const category = id?.split("=")?.[1]

    // const filtered = products?.webkit && products?.webkit?.find((item) => {
    //     return item.products_slug === id
    // });

    const filtered = products && products?.webkit && products?.webkit?.find((item) => {
        return item.products_slug === router?.query?.name
    });

    const onChange = (value) => {
        // console.log(`React Stars Rating value is ${value}`);
    };

    const handleFlavourChange = (e) => {
        const selectedImage = products?.webkit?.find(item => item.products_slug === e.target.value);
        if (selectedImage) {
            // router.push(`/detail/${selectedImage?.products_slug}`)
            router.push(`/detail/category=${selectedImage.slug}?name=${selectedImage?.products_slug}`);
        }
    };

    const handleButton = () => {
        if (filtered?.buy_wholesale) {
            router.push(filtered?.buy_wholesale)
        }
    }
    

    return (
        <div>
            <div className="pt-[90px] md:pt-[150px] pb-[30px]">
                <div className=" 2xl:w-[65%] md:w-[80%] w-[90%] container m-auto">
                    <div className="container m-auto">
                        <div className="mb-[50px]">
                            <nav className="flex pt-[4rem] ml-[20px] " aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <Link
                                            href="/"
                                            className="inline-flex items-center text-[12px] md:text-[14px] font-medium uppercase "
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg
                                                className="w-6 h-6 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <Link
                                                href={`/product/${filtered?.slug}`}
                                                className="ml-1 text-[12px] md:text-[14px] font-medium uppercase"
                                            >
                                                {filtered?.slug}
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg
                                                className="w-6 h-6 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <p className="ml-1 text-[12px] md:text-[14px] font-medium uppercase ">
                                                {filtered?.name}
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row  justify-center gap-[40px] lg:gap-[80px] 2xl:gap-[100px] px-[10px] mt-[31px]">
                        <div className="  ">
                            <div className="border md:w-[500px]">
                                <div className=" relative overflow-hidden bg-cover bg-no-repeat px-[20px]">
                                    <img
                                        loading="lazy"
                                        className={`flex items-center w-[100%]  transition duration-500 ease-in-out hover:scale-105  justify-center m-auto ${loader2 ? "blur-[1.5px]" : ""}`}
                                        src={filtered?.d1}
                                        alt={filtered?.name}
                                    />
                                    {/* <InnerImageZoom zoomScale="2" src={filtered?.d1} zoomSrc={filtered?.d1} className={`flex items-center w-[100%]  transition duration-500 ease-in-out justify-center m-auto ${loader2 ? "blur-[1.5px]" : ""}`}/> */}
                                </div>

                            </div>
                        </div>
                        <div>
                            {/* <div className="w-[120px]">
                                {mainData?.product?.stock > 0 ? (
                                    <p className="bg-[#5FB75D] px-[7px] text-[15px]   rounded-md text-center uppercase text-white">IN STOCK</p>
                                ) : (
                                    <p className="px-[7px] w-[130px] text-white bg-red-500 text-[15px] text-center  rounded-md  uppercase">OUT OF STOCK</p>
                                )}
                            </div> */}

                            {/* tittle */}
                            <h1 className="md:text-[25px]  text-[16px] font-bold mb-[25px] mt-[15px] text-black ">
                                {filtered?.name}
                            </h1>
                            <div className="flex items-center gap-[52px]">
                                {/* raiting */}
                                <div className="">{/* <Raiting /> */}</div>
                                <p className="md:text-[15px] text-[12px] text-[#5FB75D] mt-[3px] font-bold">
                                </p>
                            </div>

                            <p className=" text-[14px] text-justify mb-[30px]">
                                {filtered?.description}
                            </p>

                            <div className="flex items-center md:gap-[20px] gap-[10px]  mt-[10px] md:mt-[5px] mb-[20px]">
                                <p className="font-bold md:text-[20px] text-[15px] text-[#EB001B] ">
                                    ${filtered?.discount_price}
                                </p>
                                <p className=" line-through md:text-[17px] text-[12px]">
                                    ${((filtered?.discount_price / 100) * 105).toFixed(2)}
                                </p>
                            </div>
                            <div className="flex items-center mb-[20px]">
                                <p className="m-0 pr-[30px] font-[500] text-[19px]">Reviews:</p>
                                <ReactStarsRating isEdit={false} onChange={onChange} value={filtered?.star} className="flex justify-center mb-[10px]" />
                            </div>
                            <div className="w-full mt-[15px] ">
                                <select
                                    className="w-full h-[45px] outline outline-1 outline-gray-200 pl-[3px] border-[1px] mb-[15px]"
                                    name=""
                                    id=""
                                    placeholder="Select Another Flavours"
                                    onChange={handleFlavourChange}
                                >
                                    {/* <option className="md:text-[18px]" value=""> */}
                                    {products?.webkit?.map((item, i) => {
                                        return (
                                            <option key={i}
                                                selected={filtered?.products_slug === item.products_slug}
                                                value={item?.products_slug}
                                            >
                                                {item?.name} {item?.gram}
                                            </option>
                                            // <option selected={Train Wreck}>{item?.name}</option>
                                        );
                                    })}
                                    {/* <span className="font-extrabold"> */}
                                    {/* {productdetail?.flavours[0]?.name} */}
                                    {/* </span> */}
                                    {/* </option> */}
                                    {/* <option value="">{productdetail?.flavours[1]?.name}</option>1 */}
                                </select>
                            </div>
                            <div className="">
                                <button onClick={handleButton} className="w-full bg-black text-white py-[11px] text-[15px] hover:bg-[#516527] text-center mt-[20px] rounded-md cursor-pointer">
                                    Buy Whole Sale
                                </button>
                            </div>
                            <div className="text-right mt-[10px]">
                                <p className="md:text-[12px] text-[9px] fonr-semibold text-[#EB001B]">
                                    Not Intended for use by those under the age of 21.
                                </p>
                            </div>


                            {/* <p className=" text-[14px] text-justify mb-[30px]">
                                {filtered?.seo_description}
                            </p> */}
                        </div>
                    </div>
                    <div className="md:mt-[100px] mt-[50px]">
                        <p className="md:text-[25px] text-[18px] font-bold text-center ">
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
