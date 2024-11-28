import React from 'react'

const FooterForm = () => {
  return (
    <div className='w-full z-50'>
        <div class="flex items-center justify-center p-12">
            <div class="w-full bg-slate-900 p-8 rounded-md shadow-md">
            <form>
    <div class="-mx-3 flex flex-wrap">
        {/* <!-- Pet Owner Name --> */}
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label for="fName" class="mb-3 block text-base font-medium text-white">
                    First Name
                </label>
                <input type="text" name="fName" id="fName" placeholder="First Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label for="lName" class="mb-3 block text-base font-medium text-white">
                    Last Name
                </label>
                <input type="text" name="lName" id="lName" placeholder="Last Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
        </div>
    </div>

    {/* <!-- Pet Information --> */}
    <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label for="petName" class="mb-3 block text-base font-medium text-white">
                    Pet Name
                </label>
                <input type="text" name="petName" id="petName" placeholder="Pet's Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label for="petBreed" class="mb-3 block text-base font-medium text-white">
                    Pet Breed
                </label>
                <input type="text" name="petBreed" id="petBreed" placeholder="e.g., Labrador, Poodle"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
        </div>
    </div>

    {/* <!-- Appointment Date & Time --> */}
    <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label for="date" class="mb-3 block text-base font-medium text-white">
                    Preferred Date
                </label>
                <input type="date" name="date" id="date"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label for="time" class="mb-3 block text-base font-medium text-white">
                    Preferred Time
                </label>
                <input type="time" name="time" id="time"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
        </div>
    </div>

    {/* <!-- Service Selection --> */}
    <div class="mb-5">
        <label for="service" class="mb-3 block text-base font-medium text-white">
            Select a Service
        </label>
        <select name="service" id="service"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
            <option value="basic">Basic Bath & Brush</option>
            <option value="deluxe">Deluxe Grooming</option>
            <option value="spa">Pampered Pup Spa Day</option>
            <option value="full">Ultimate Full Groom</option>
        </select>
    </div>

    {/* <!-- Add-ons --> */}
    <div class="mb-5 text-white">
        <label class="mb-3 block text-base font-medium">
            Add-ons (Optional)
        </label>
        <div class="flex flex-wrap gap-4">
            <label class="flex items-center gap-2">
                <input type="checkbox" name="addons" value="teeth-brushing" class="h-5 w-5" />
                <span>Teeth Brushing</span>
            </label>
            <label class="flex items-center gap-2">
                <input type="checkbox" name="addons" value="paw-balm" class="h-5 w-5" />
                <span>Paw Balm</span>
            </label>
            <label class="flex items-center gap-2">
                <input type="checkbox" name="addons" value="flea-treatment" class="h-5 w-5" />
                <span>Flea & Tick Treatment</span>
            </label>
            <label class="flex items-center gap-2">
                <input type="checkbox" name="addons" value="de-shedding" class="h-5 w-5" />
                <span>De-shedding Treatment</span>
            </label>
        </div>
    </div>

    {/* <!-- Notes --> */}
    <div class="mb-5">
        <label for="notes" class="mb-3 block text-base font-medium text-white">
            Additional Notes or Requests
        </label>
        <textarea name="notes" id="notes" rows="4" placeholder="Let us know anything special about your pet!"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
    </div>

    {/* <!-- Submit --> */}
    <div>
        <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Book Now
        </button>
    </div>
</form>

            </div>
        </div>
    </div>
  )
}

export default FooterForm