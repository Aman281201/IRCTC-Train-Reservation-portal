import React from 'react'

const Train = () => {
    var [classCode,setClass] = React.useState("");
    var [train,setTrain] = React.useState("");
    var [trainId,setTrainId] = React.useState("");
    var [seats,setTrainSeats] = React.useState("");
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
        <h3 class="text-lg font-medium leading-6 text-gray-900 px-5" >ADD A NEW TRAIN</h3>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="tname" class="block text-sm font-medium text-gray-700">Train Name</label>
                <input value={train}  onChange = { (event) => { setTrain( (train = event.target.value) ) }}   type="text" name="tname" id="tname" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="tid" class="block text-sm font-medium text-gray-700">Tain ID</label>
                <input value={trainId} onChange = { (event) => { setTrainId( (trainId = event.target.value) ) }} type="text" name="trainId" id="tid" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder='Enter a number between 0 to 1000'/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="seats" class="block text-sm font-medium text-gray-700">No. of Seats in Train</label>
                <input value = {seats} onChange = { (event) => { setTrainSeats( (seats = event.target.value) ) }} type="text" name="totalSeats" id="seats" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>  
              <div class="col-span-6">
                <label for="class" class="block text-sm font-medium text-gray-700">Class Code</label>
                <input value={classCode} onChange = { (event) => { setClass( (classCode = event.target.value) ) }}  type="text" name="ClassCode" id="class" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>        
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  )
}

export default Train