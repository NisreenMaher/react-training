export default function formrequset() {
    return (
      <>
        <form>
          <div>
            <input
              class="   w-full pb-3 mb-2 text-white border-b border-white 
              bg-transparent placeholder-white placeholder-opacity-90 
               outline-none "
              type="text"
              name="username"
              placeholder="Your name"
            />
          </div>
          <div>
            <input
              class=" w-full pb-3 mb-2 text-white border-b border-white bg-transparent placeholder-white placeholder-opacity-90  outline-none "
              type="text"
              name="username"
              placeholder="Email"
            />
          </div>
          <div class="relative inline-block w-full text-white text-opacity-90 ">
            <select
              class="  w-full
              pb-3 mb-2  border-b border-white bg-transparent   
              outline-none
              text-xs text-opacity-90 font-semibold font-opensans form-select
               block form-multiselect
              "
            >
              <option selected disabled>
                Service category
              </option>
              <option>Another option</option>
              <option>And one more</option>
            </select>
          </div>
          <div>
            <input
              class=" w-full pb-3 mb-8 text-white border-b border-white bg-transparent placeholder-white placeholder-opacity-90  outline-none "
              type="text"
              name="username"
              placeholder="Date Picker"
            />
          </div>
          <div>
            <input
              class="w-full mt-6 bg-transparent text-white font-semibold font-opensans py-3.5 px-4 mb-6 
              border-2 uppercase text-xs
              border-custom
              rounded-3xl"
              type="submit"
            />
          </div>
        </form>
      </>
    );
  }
  