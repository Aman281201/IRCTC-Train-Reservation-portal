import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Route = () => {
  const [classCode, setClass] = React.useState("");
  const [train, setTrain] = React.useState("");
  const [trainRoute, setTrainRoute] = React.useState("");
  const [seats, setTrainSeats] = React.useState("");
  const [trainId, setTrainId] = React.useState("");
  const [dateOfdeparture, setDateofdeparture] = React.useState("");

  const Postdata = () => {
    console.log(train)
    fetch("/addroute", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classCode,
        train,
        trainRoute,
        seats,
        trainId,
        dateOfdeparture,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>

      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900 px-5">
                ADD A NEW ROUTE FOR A TRAIN
              </h3>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="tname"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Train Name
                      </label>
                      <input
                        value={train}
                        onChange={(event) => {
                          setTrain(event.target.value);
                        }}
                        type="text"
                        name="tname"
                        id="tname"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="tname"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Train Id
                      </label>
                      <input
                        value={trainId}
                        onChange={(event) => {
                          setTrainId(event.target.value);
                        }}
                        type="text"
                        name="tname"
                        id="tname"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="tid"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Train Route (space Separated)
                      </label>
                      <input
                        value={trainRoute}
                        onChange={(event) => {
                          setTrainRoute(event.target.value);
                        }}
                        type="text"
                        name="trainId"
                        id="tid"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="eg - A1C,E2C,B24"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="date"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Date of Departure yyyy-mm-dd
                      </label>
                      <input
                        value={dateOfdeparture}
                        onChange={(event) => {
                          setDateofdeparture(event.target.value);
                        }}
                        type="text"
                        name="trainId"
                        id="date"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="eg - A1C,E2C,B24"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="cid"
                        class="block text-sm font-medium text-gray-700"
                      >
                        classes (space Separated)
                      </label>
                      <input
                        value={classCode}
                        onChange={(event) => {
                          setClass(event.target.value);
                        }}
                        type="text"
                        name="trainId"
                        id="cid"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="eg - A1C,E2C,B24"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="sid"
                        class="block text-sm font-medium text-gray-700"
                      >
                        seats (space Separated)
                      </label>
                      <input
                        value={seats}
                        onChange={(event) => {
                          setTrainSeats(event.target.value);
                        }}
                        type="text"
                        name="trainId"
                        id="sid"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="eg - A1C,E2C,B24"
                      />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Link to="../AdminHome">
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => Postdata()}
                    >
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
