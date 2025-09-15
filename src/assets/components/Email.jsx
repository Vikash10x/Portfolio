import React from "react";

export const Email = () => {
  return (
    <div className="mt-20">
      <div className="text-center p-">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vvikash0012@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center border border-gray-300 text-gray-600 text-[15px] font-medium rounded-full px-6 py-2 shadow-md hover:shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-all duration-300 mb-3"
        >
          📧 vvikash0012@gmail.com
        </a>

        <h1 className="text-3xl sm:text-5xl font-bold mb-3">Get in Touch</h1>
        <h5 className="text-[18px] md:text-xl opacity-50">
          Want to chat? Just shoot me a dm&nbsp;&nbsp;
          <a className="text-[#4b8cf7]" href="https://x.com/vikashkumawattt">
            with a direct question on twitter&nbsp;&nbsp;
          </a>
          and I'll respond whenever I can. I will ignore all soliciting.
        </h5>
      </div>
    </div>
  );
};
