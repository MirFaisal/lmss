import React from "react";
import Title from "../Titles/Title";

const Faq = () => {
  return (
    <>
      <div className="pt-12 pb-24">
        <div className="max-w-screen-xl mx-auto">
          <Title className="!max-w-full" title={"সচরাচর জিজ্ঞাসা"} />

          <div
            className="border border-[#ebebeb] rounded-xl overflow-hidden max-w-[900px] mx-auto"
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white text-gray-900 "
            data-inactive-classes="text-gray-500 "
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between pr-4 w-full font-medium text-left text-gray-500 border-b border-gray-200  "
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <summary className="list-none cursor-pointer py-2 pl-2 pr-8 text-sm hover:text-inherit md:px-6 md:py-4 md:pr-8 md:text-lg">
                  কোর্সগুলো কাদের জন্য?
                </summary>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className="hidden"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 ">
                <div className="prose max-w-none px-2 pb-6 text-xs text-gray-500 prose-a:text-blue md:px-6 md:text-base">
                  {" "}
                  কোর্সগুলো এডমিশন পরীক্ষার্থীদের জন্য
                </div>
              </div>
            </div>

            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between pr-4 w-full font-medium text-left text-gray-500 border-b border-gray-200  "
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <summary className="list-none cursor-pointer py-2 pl-2 pr-8 text-sm hover:text-inherit md:px-6 md:py-4 md:pr-8 md:text-lg">
                  কোর্সগুলো কাদের জন্য?
                </summary>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 ">
                <div className="prose max-w-none px-2 pb-6 text-xs text-gray-500 prose-a:text-blue md:px-6 md:text-base">
                  {" "}
                  না, কোর্সটি বাংলা মিডিয়াম শিক্ষার্থীদের জন্য সাজানো হয়েছে।{" "}
                </div>
              </div>
            </div>

            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between pr-4 w-full font-medium text-left text-gray-500 border-b border-gray-200  "
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <summary className="list-none cursor-pointer py-2 pl-2 pr-8 text-sm hover:text-inherit md:px-6 md:py-4 md:pr-8 md:text-lg">
                  কোর্সগুলো কাদের জন্য?
                </summary>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-3"
              className="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 ">
                <div className="prose max-w-none px-2 pb-6 text-xs text-gray-500 prose-a:text-blue md:px-6 md:text-base">
                  {" "}
                  না, কোর্সটি বাংলা মিডিয়াম শিক্ষার্থীদের জন্য সাজানো হয়েছে।{" "}
                </div>
              </div>
            </div>

            <h2 id="accordion-flush-heading-4">
              <button
                type="button"
                className="flex items-center justify-between pr-4 w-full font-medium text-left text-gray-500 border-b border-gray-200 "
                data-accordion-target="#accordion-flush-body-4"
                aria-expanded="false"
                aria-controls="accordion-flush-body-4"
              >
                <summary className="list-none cursor-pointer py-2 pl-2 pr-8 text-sm hover:text-inherit md:px-6 md:py-4 md:pr-8 md:text-lg">
                  কোর্সগুলো কাদের জন্য?
                </summary>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-4"
              className="hidden"
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="py-5 border-b border-gray-200 ">
                <div className="prose max-w-none px-2 pb-6 text-xs text-gray-500 prose-a:text-blue md:px-6 md:text-base">
                  {" "}
                  না, কোর্সটি বাংলা মিডিয়াম শিক্ষার্থীদের জন্য সাজানো হয়েছে।{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
