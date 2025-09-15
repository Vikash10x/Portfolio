import React from "react";

export const Education = () => {
  return (
    <div className="mt-11">
      <h2 className="text-[20px] sm:text-[22px] font-bold mb-2">Education</h2>

      <div className="flex gap-2.5 sm:gap-4">
        <div>
          <img
            className="rounded-full"
            src="https://media.licdn.com/dms/image/v2/C4E0BAQE15MzIdWxf2g/company-logo_100_100/company-logo_100_100/0/1631317435376?e=1759968000&v=beta&t=LIIjZRTjn6YLM2TFAEJSOqKAZFrkdFkfFONtEuqWF0U"
            alt=""
            width={50}
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between w-full">
            <h3 className="text-[13px] sm:text-lg font-bold">
              Poornima University
            </h3>
            <div className="opacity-50">2023 - 2027</div>
          </div>
          <h5 className="text-[13px]">
            Bachelor's Degree of Computer Science (B.Tech CSE)
          </h5>
        </div>
      </div>
    </div>
  );
};
