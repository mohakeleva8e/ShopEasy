import { useEffect } from "react";
import axios from "axios";
import { reverseGeocodeApi } from "../common";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const useGeoLocation = (geoSettings, setGeoSettings) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if ("geolocation" in navigator)
      navigator.geolocation.getCurrentPosition(async function (position) {
        try {
          // const response = await axios.get(
          //   reverseGeocodeApi(position.coords.latitude, position.coords.longitude)
          // );

          const response = {
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  id: "address.8505603811492908",
                  geometry: {
                    type: "Point",
                    coordinates: [77.049226, 28.595853],
                  },
                  properties: {
                    mapbox_id: "address.8505603811492908",
                    feature_type: "street",
                    full_address:
                      "Desh Bandhu Gupta Marg, Sector 12, 110078, Dwarka, South West Delhi, Delhi, India",
                    name: "Desh Bandhu Gupta Marg",
                    name_preferred: "Desh Bandhu Gupta Marg",
                    coordinates: {
                      longitude: 77.049226,
                      latitude: 28.595853,
                      routable_points: [
                        {
                          name: "default",
                          latitude: 28.595853,
                          longitude: 77.049226,
                        },
                      ],
                    },
                    place_formatted:
                      "Sector 12, 110078, Dwarka, South West Delhi, Delhi, India",
                    context: {
                      street: {
                        mapbox_id: "address.8505603811492908",
                        name: "Desh Bandhu Gupta Marg",
                      },
                      neighborhood: {
                        mapbox_id: "dXJuOm1ieHBsYzpDU1FzYXc",
                        name: "Sector 12",
                      },
                      postcode: {
                        mapbox_id: "dXJuOm1ieHBsYzpDYTVy",
                        name: "110078",
                      },
                      place: {
                        mapbox_id: "dXJuOm1ieHBsYzpBd0JJYXc",
                        name: "Dwarka",
                      },
                      district: {
                        mapbox_id: "dXJuOm1ieHBsYzpVR1py",
                        name: "South West Delhi",
                        wikidata_id: "Q2379189",
                      },
                      region: {
                        mapbox_id: "dXJuOm1ieHBsYzpBaVJy",
                        name: "Delhi",
                        wikidata_id: "Q1353",
                        region_code: "DL",
                        region_code_full: "IN-DL",
                      },
                      country: {
                        mapbox_id: "dXJuOm1ieHBsYzpJbXM",
                        name: "India",
                        wikidata_id: "Q668",
                        country_code: "IN",
                        country_code_alpha_3: "IND",
                      },
                    },
                  },
                },
                {
                  type: "Feature",
                  id: "dXJuOm1ieHBsYzpDU1FzYXc",
                  geometry: {
                    type: "Point",
                    coordinates: [77.041656, 28.591852],
                  },
                  properties: {
                    mapbox_id: "dXJuOm1ieHBsYzpDU1FzYXc",
                    feature_type: "neighborhood",
                    full_address:
                      "Sector 12, Dwarka, South West Delhi, Delhi, India",
                    name: "Sector 12",
                    name_preferred: "Sector 12",
                    coordinates: {
                      longitude: 77.041656,
                      latitude: 28.591852,
                    },
                    place_formatted: "Dwarka, South West Delhi, Delhi, India",
                    bbox: [77.0344948, 28.5878123, 77.0500969, 28.6018265],
                    context: {
                      postcode: {
                        mapbox_id: "dXJuOm1ieHBsYzpDYTVy",
                        name: "110078",
                      },
                      place: {
                        mapbox_id: "dXJuOm1ieHBsYzpBd0JJYXc",
                        name: "Dwarka",
                      },
                      district: {
                        mapbox_id: "dXJuOm1ieHBsYzpVR1py",
                        name: "South West Delhi",
                        wikidata_id: "Q2379189",
                      },
                      region: {
                        mapbox_id: "dXJuOm1ieHBsYzpBaVJy",
                        name: "Delhi",
                        wikidata_id: "Q1353",
                        region_code: "DL",
                        region_code_full: "IN-DL",
                      },
                      country: {
                        mapbox_id: "dXJuOm1ieHBsYzpJbXM",
                        name: "India",
                        wikidata_id: "Q668",
                        country_code: "IN",
                        country_code_alpha_3: "IND",
                      },
                      neighborhood: {
                        mapbox_id: "dXJuOm1ieHBsYzpDU1FzYXc",
                        name: "Sector 12",
                      },
                    },
                  },
                },
                {
                  type: "Feature",
                  id: "dXJuOm1ieHBsYzpDYTVy",
                  geometry: {
                    type: "Point",
                    coordinates: [77.049886, 28.596623],
                  },
                  properties: {
                    mapbox_id: "dXJuOm1ieHBsYzpDYTVy",
                    feature_type: "postcode",
                    full_address: "110078, Dwarka, Delhi, India",
                    name: "110078",
                    name_preferred: "110078",
                    coordinates: {
                      longitude: 77.049886,
                      latitude: 28.596623,
                    },
                    place_formatted: "Dwarka, Delhi, India",
                    bbox: [76.991656, 28.578615, 77.061258, 28.629119],
                    context: {
                      place: {
                        mapbox_id: "dXJuOm1ieHBsYzpBd0JJYXc",
                        name: "Dwarka",
                      },
                      district: {
                        mapbox_id: "dXJuOm1ieHBsYzpVR1py",
                        name: "South West Delhi",
                        wikidata_id: "Q2379189",
                      },
                      region: {
                        mapbox_id: "dXJuOm1ieHBsYzpBaVJy",
                        name: "Delhi",
                        wikidata_id: "Q1353",
                        region_code: "DL",
                        region_code_full: "IN-DL",
                      },
                      country: {
                        mapbox_id: "dXJuOm1ieHBsYzpJbXM",
                        name: "India",
                        wikidata_id: "Q668",
                        country_code: "IN",
                        country_code_alpha_3: "IND",
                      },
                      postcode: {
                        mapbox_id: "dXJuOm1ieHBsYzpDYTVy",
                        name: "110078",
                      },
                    },
                  },
                },
                {
                  type: "Feature",
                  id: "dXJuOm1ieHBsYzpBd0JJYXc",
                  geometry: {
                    type: "Point",
                    coordinates: [77.04999, 28.596563],
                  },
                  properties: {
                    mapbox_id: "dXJuOm1ieHBsYzpBd0JJYXc",
                    feature_type: "place",
                    full_address: "Dwarka, Delhi, India",
                    name: "Dwarka",
                    name_preferred: "Dwarka",
                    coordinates: {
                      longitude: 77.04999,
                      latitude: 28.596563,
                    },
                    place_formatted: "Delhi, India",
                    bbox: [76.991656, 28.569373, 77.104219, 28.629119],
                    context: {
                      district: {
                        mapbox_id: "dXJuOm1ieHBsYzpVR1py",
                        name: "South West Delhi",
                        wikidata_id: "Q2379189",
                      },
                      region: {
                        mapbox_id: "dXJuOm1ieHBsYzpBaVJy",
                        name: "Delhi",
                        wikidata_id: "Q1353",
                        region_code: "DL",
                        region_code_full: "IN-DL",
                      },
                      country: {
                        mapbox_id: "dXJuOm1ieHBsYzpJbXM",
                        name: "India",
                        wikidata_id: "Q668",
                        country_code: "IN",
                        country_code_alpha_3: "IND",
                      },
                      place: {
                        mapbox_id: "dXJuOm1ieHBsYzpBd0JJYXc",
                        name: "Dwarka",
                      },
                    },
                  },
                },
                {
                  type: "Feature",
                  id: "dXJuOm1ieHBsYzpVR1py",
                  geometry: {
                    type: "Point",
                    coordinates: [77.049984, 28.596564],
                  },
                  properties: {
                    mapbox_id: "dXJuOm1ieHBsYzpVR1py",
                    feature_type: "district",
                    full_address: "South West Delhi, Delhi, India",
                    name: "South West Delhi",
                    name_preferred: "South West Delhi",
                    coordinates: {
                      longitude: 77.049984,
                      latitude: 28.596564,
                    },
                    place_formatted: "Delhi, India",
                    bbox: [76.838855, 28.500739, 77.104219, 28.669914],
                    context: {
                      region: {
                        mapbox_id: "dXJuOm1ieHBsYzpBaVJy",
                        name: "Delhi",
                        wikidata_id: "Q1353",
                        region_code: "DL",
                        region_code_full: "IN-DL",
                      },
                      country: {
                        mapbox_id: "dXJuOm1ieHBsYzpJbXM",
                        name: "India",
                        wikidata_id: "Q668",
                        country_code: "IN",
                        country_code_alpha_3: "IND",
                      },
                      district: {
                        mapbox_id: "dXJuOm1ieHBsYzpVR1py",
                        name: "South West Delhi",
                        wikidata_id: "Q2379189",
                      },
                    },
                  },
                },
                {
                  type: "Feature",
                  id: "dXJuOm1ieHBsYzpBaVJy",
                  geometry: {
                    type: "Point",
                    coordinates: [77.2090057, 28.6138954],
                  },
                  properties: {
                    mapbox_id: "dXJuOm1ieHBsYzpBaVJy",
                    feature_type: "region",
                    full_address: "Delhi, India",
                    name: "Delhi",
                    name_preferred: "Delhi",
                    coordinates: {
                      longitude: 77.2090057,
                      latitude: 28.6138954,
                    },
                    place_formatted: "India",
                    bbox: [76.838855, 28.404263, 77.347105, 28.883588],
                    context: {
                      country: {
                        mapbox_id: "dXJuOm1ieHBsYzpJbXM",
                        name: "India",
                        wikidata_id: "Q668",
                        country_code: "IN",
                        country_code_alpha_3: "IND",
                      },
                      region: {
                        mapbox_id: "dXJuOm1ieHBsYzpBaVJy",
                        name: "Delhi",
                        wikidata_id: "Q1353",
                      },
                    },
                  },
                },
                {
                  type: "Feature",
                  id: "dXJuOm1ieHBsYzpJbXM",
                  geometry: {
                    type: "Point",
                    coordinates: [78.476681027237, 22.1991660760527],
                  },
                  properties: {
                    mapbox_id: "dXJuOm1ieHBsYzpJbXM",
                    feature_type: "country",
                    full_address: "India",
                    name: "India",
                    name_preferred: "India",
                    coordinates: {
                      longitude: 78.476681027237,
                      latitude: 22.1991660760527,
                    },
                    bbox: [68.075438302, 6.671837336, 97.394981, 35.673248],
                    context: {
                      country: {
                        mapbox_id: "dXJuOm1ieHBsYzpJbXM",
                        name: "India",
                        country_code: "IN",
                        country_code_alpha_3: "IND",
                        wikidata_id: "Q668",
                      },
                    },
                  },
                },
              ],
              attribution:
                "NOTICE: © 2024 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained.",
            },
            status: 200,
            statusText: "",
            headers: {
              "cache-control":
                "max-age=432000,stale-while-revalidate=600,stale-if-error=86400",
              "content-type": "application/vnd.geo+json; charset=utf-8",
              "last-modified": "Tue, 20 Aug 2024 14:58:40 GMT",
              "x-rate-limit-interval": "60",
              "x-rate-limit-limit": "1000",
              "x-rate-limit-reset": "1724224377",
            },
            config: {
              transitional: {
                silentJSONParsing: true,
                forcedJSONParsing: true,
                clarifyTimeoutError: false,
              },
              adapter: ["xhr", "http", "fetch"],
              transformRequest: [null],
              transformResponse: [null],
              timeout: 0,
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN",
              maxContentLength: -1,
              maxBodyLength: -1,
              env: {},
              headers: {
                Accept: "application/json, text/plain, */*",
              },
              method: "get",
              url: "https://api.mapbox.com/search/geocode/v6/reverse?longitude=77.0485196&latitude=28.5963892&access_token=pk.eyJ1IjoibW9oYWsxIiwiYSI6ImNtMDNnbGF4bjBjMGUya3NjYXJ2c2hmdnEifQ.qNdxohHdWRoFAtL8G2J2uw",
            },
            request: {},
          };

          let language = "english";

          switch (
            response.data.features[0].properties.context.country.country_code
          ) {
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

          if (response.status === 200)
            setGeoSettings({
              region: response.data.features[0].properties.context.region.name,
              countryCode:
                response.data.features[0].properties.context.country
                  .country_code,
              language,
            });
          else toast.error("Something Went Wrong!");
        } catch (error) {
          toast.error("Something Went Wrong!");
          console.log(error);
        }
      });
    else console.log("Geolocation is not available in your browser.");
  }, []);

  useEffect(() => {
    i18n.changeLanguage(geoSettings.language);
  }, [geoSettings.language]);
};

export default useGeoLocation;
