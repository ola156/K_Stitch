import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center mt-14 mb-12 ">
      <p className="text-2xl font-medium text-gray-900">
        Can't Find Any Product That Matches Your Taste. We still got you covered
      </p>
      <p className="text-2xl text-gray-700 mb-5">
        {" "}
        Subscribe to get in touch with our designers.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="
        w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-red-500 text-white text-xs px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
