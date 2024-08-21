import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-4">
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              width: "40%",
            }}
          >
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="united-states">
                United States
              </option>
              <option value="canada">Canada</option>
              <option value="france">France</option>
              <option value="germany">Germany</option>
              <option value="india">India</option>
              <option value="england">England</option>
              <option value="japan">Japan</option>
            </select>
          </div>

          <div
            style={{
              width: "40%",
            }}
          >
            <label
              for="language"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Language
            </label>
            <select
              id="language"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="english">
                English
              </option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="hindi">Hindi</option>
              <option value="japanese">Japanese</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
