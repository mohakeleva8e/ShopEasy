import React, { useContext } from "react";
import Context from "../context";

const Footer = () => {
  const { geoSettings, setGeoSettings } = useContext(Context);

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
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={geoSettings.countryCode}
              onChange={(e) => {
                const countryCode = e.target.value;
                let language = "english";

                switch (countryCode) {
                  case "IN":
                    language = "hindi";
                    break;

                  case "FR":
                    language = "french";
                    break;

                  case "DE":
                    language = "german";
                    break;

                  case "JP":
                    language = "japanese";
                }

                setGeoSettings({ countryCode, language });
              }}
            >
              <option selected value="US">
                United States
              </option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="IN">India</option>
              <option value="GB">England</option>
              <option value="JP">Japan</option>
            </select>
          </div>

          <div
            style={{
              width: "40%",
            }}
          >
            <label
              htmlFor="language"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Language
            </label>
            <select
              id="language"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={geoSettings.language}
              onChange={(e) =>
                setGeoSettings({ ...geoSettings, language: e.target.value })
              }
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
