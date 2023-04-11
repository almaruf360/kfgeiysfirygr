import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-4xl  text-black font-extrabold mt-12 mb-5 text-center ">
       Blog
      </h1>
           <div class="space-y-4 m-4">
  <details
    class="group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary class="flex items-center justify-between cursor-pointer">
      <h2 class="text-lg font-medium text-gray-900">
      When should you use context API?
      </h2>

      <span
        class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Context API in React should be used when you have data that needs to be accessed by multiple components at different levels in the component tree, such as theme switching, user authentication, localization, or app-wide state management. It allows passing data down without the need for props drilling.
    </p>
  </details>

  <details
    class="group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary class="flex items-center justify-between cursor-pointer">
      <h2 class="text-lg font-medium text-gray-900">
      What is a custom hook?
      </h2>

      <span
        class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    A custom hook is a reusable function in React that encapsulates logic and allows you to share it between components. It is a way to extract and share stateful logic, such as fetching data or managing forms, without having to write it in every component that needs it. Custom hooks start with the use prefix and follow the rules of hooks.
    </p>
  </details>
  <details
    class="group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary class="flex items-center justify-between cursor-pointer">
      <h2 class="text-lg font-medium text-gray-900">
      What is useRef?
      </h2>

      <span
        class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    useRef is a hook in React that returns a mutable ref object, which can be used to store a value that persists between renders. It can also be used to access the underlying DOM node of a component, allowing for direct manipulation of the DOM. useRef can be used to solve performance problems and improve efficiency in some cases.
    </p>
  </details>
  <details
    class="group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary class="flex items-center justify-between cursor-pointer">
      <h2 class="text-lg font-medium text-gray-900">
      What is useMemo?
      </h2>

      <span
        class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    useMemo is a hook in React that enables the caching of expensive computations so that they don't need to be re-evaluated on every render. It takes a function and an array of dependencies as arguments and returns a memoized value.</p>
  </details>
    </div>
        <Footer></Footer>
        </div>
    );
};

export default Blog;