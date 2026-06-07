import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import getPictures from "@/hooks/getPictures";

const Pictures = () => {
  const [selected, setSelected] = useState();
  const [altDes, setAltDes] = useState();

  console.log("seleted id is: ", selected);

  let isSelected = (id) => {
    setSelected(id);
  };

  let isAltDes = (id) => {
    setAltDes(id);
  };

  let { data: pics, isLoading } = getPictures();

  const skeleton = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];

  return (
    // <div className="p-4">
    // Pictures
    // <div className="border-2 relative">
    //     <div className="bg-[#dde2e9] p-20 mx-auto w-[90%]">
    //     <label className="input w-full bg-white text-slate-900 ">
    //         <svg
    //         className="h-[1em] opacity-50"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //         >
    //         <g
    //             strokeLinejoin="round"
    //             strokeLinecap="round"
    //             strokeWidth="2.5"
    //             fill="none"
    //             stroke="currentColor"
    //         >
    //             <circle cx="11" cy="11" r="8"></circle>
    //             <path d="m21 21-4.3-4.3"></path>
    //         </g>
    //         </svg>
    //         <input
    //         type="search"
    //         required
    //         placeholder="Search for pictures"
    //         className=""
    //         />
    //     </label>
    //     </div>

    //     <div className="absolute top-40 left-55 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[70%] mx-auto gap-4">
    //     {pics.map((pics) => {
    //         return (
    //         <div key={pics.id}>
    //             <div className="relative">
    //             <img
    //                 src={`${pics.urls.full}`}
    //                 alt={`${pics.alt_description}`}
    //                 className="h-80 w-80 rounded-lg opacity-80"
    //             />
    //             <div className="absolute bottom-1 p-2">
    //                 <p>{pics.slug}</p>
    //             </div>
    //             </div>
    //         </div>
    //         );
    //     })}
    //     </div>
    // </div>
    // </div>

    <div className="p-4">
      Pictures
      <div className=" relative">
        <div className="bg-[#dde2e9]  p-20 mx-auto md:w-[90%]">
          <label className="input w-full bg-white text-slate-900">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search for pictures" />
          </label>
        </div>

        <div
          className={`-mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:w-[70%] mx-auto gap-4 px-4`}
        >
          {isLoading
            ? skeleton.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex w-65 max-sm:w-full flex-col gap-10"
                  >
                    <div className="relative bg-[#f5f5f5] h-60 w-full p-2">
                      <div className="mt-45 flex flex-col gap-2">
                        <div className="skeleton bg-[#e8e8e8] h-4 w-3/4"></div>
                        <div className="skeleton bg-[#e8e8e8] h-4 w-1/4"></div>
                      </div>
                    </div>
                    {/* <div className="skeleton h-4 w-28"></div> */}
                  </div>
                );
              })
            : pics?.map((pic, index) => (
                <div
                  className={`hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer`}
                  key={pic.id}
                  onClick={() => {
                    isSelected(pic.urls.full);
                    isAltDes(pic.alt_description);
                  }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative">
                        <img
                          src={pic.urls.full}
                          alt={pic.alt_description}
                          className={`${index % 2 === 0 ? "h-60 w-80  rounded-xl max-sm:object-center max-sm:w-full" : "h-80 w-80 rounded-xl sm:object-center max-sm:w-full"} `}
                        />
                        <div className="absolute inset-0 bg-slate-900/30 rounded-xl"></div>
                        <div className="absolute bottom-1 p-2">
                          <p className="text-white">{pic.alt_description}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent
                      aria-describedby={undefined}
                      showCloseButton={false}
                      className="sm:max-w-3xl p-0"
                    >
                      <DialogTitle className={`hidden`}></DialogTitle>
                      <div className="">
                        <img
                          src={selected}
                          className="h-60 sm:h-120 min-w-full "
                          alt=""
                        />
                        <p className="m-2 p-2 font-bold text-lg">{altDes}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
