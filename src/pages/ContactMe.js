export default function ContactMe() {

    const style = {
        display: 'none'
    }
  return (
    <div>
      <div class="flex items-center min-h-screen  dark:bg-gray-900">
        <div class="container mx-auto ">
          <div class="max-w-md mx-auto my-10 bg-gray-300 p-5 rounded-md shadow-sm">
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Contact Us
              </h1>
              <p className="text-gray-700 dark:text-gray-400">
                Fill up the form below to send me a message.
              </p>
            </div>
            <div className="m-7">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="23be717e-f0b6-4e87-8c30-a65a26b38f40"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Web3Forms"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  id=""
                  style={style}
                />
                <div className="mb-6">
                 
                 
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Your Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                  ></textarea>
                </div>
                <div class="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
                <p className="text-base text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
