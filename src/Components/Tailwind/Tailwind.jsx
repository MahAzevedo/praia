import React from 'react';
import styles from './Tailwind.module.css';
import { Carousel, initTWE } from "tw-elements";
initTWE({ Carousel });

const Tailwind = () => {

    return (
        <div
            id="carouselExampleCrossfade"
            class="relative"
            data-twe-carousel-init
            data-twe-ride="carousel">
        <div
            class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-twe-carousel-indicators>
            <button
                type="button"
                data-twe-target="#carouselExampleCrossfade"
                data-twe-slide-to="0"
                data-twe-carousel-active
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1">
            </button>
            <button
                type="button"
                data-twe-target="#carouselExampleCrossfade"
                data-twe-slide-to="1"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2">
            </button>
            <button
                type="button"
                data-twe-target="#carouselExampleCrossfade"
                data-twe-slide-to="2"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3">
            </button>
            </div>

            <div
                class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
            >
                
            <div
                class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-fade
                data-twe-carousel-item
                data-twe-carousel-active
            >
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                    class="block w-full"
                    alt="Wild Landscape" 
                />
            </div>

            <div
                class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-fade
                data-twe-carousel-item
            >
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                    class="block w-full"
                    alt="Camera" 
                />
            </div>

            <div
                class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-fade
                data-twe-carousel-item
            >
            <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                class="block w-full"
                alt="Exotic Fruits" 
            />
            </div>
        </div>

            <button
                class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-twe-target="#carouselExampleCrossfade"
                data-twe-slide="prev">
                <span class="inline-block h-8 w-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </span>
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                </span>
            </button>

            <button
                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-twe-target="#carouselExampleCrossfade"
                data-twe-slide="next">
                <span class="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Next
                </span>
            </button>
        </div>
    );
};

export default Tailwind;
