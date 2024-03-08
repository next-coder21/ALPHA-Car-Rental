import React from "react";

function Review() {
  return (
    <>
      <section className="py-5 px-3 md:px-10 pb-4 md:pb-16">
        <div>
          <h1 className="text-4xl text-center font-extrabold py-6 text-slate-700">Customer's Feedback</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <figure className=" bg-slate-100 rounded-xl p-8 pt-5 ">
              <img
                className=" w-32 h-32 rounded-full mx-auto
                "
                src="https://ucarecdn.com/543c2408-d931-47f9-8891-89b53412e5c3/-/preview/767x856/"
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">
                    “I found my dream car in no time at all, and the rental
                    process was a breeze. Planning to upgrade to legend!, so that i can drive my Dream Car”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">Ajith B</div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Smart User, Chennai
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className=" bg-slate-100 rounded-xl p-8 pt-5 ">
              <img
                className=" w-32 h-32 rounded-full mx-auto
                "
                src="https://ucarecdn.com/543c2408-d931-47f9-8891-89b53412e5c3/-/preview/767x856/"
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">
                    “The customer service was friendly and they answered all my
                    questions quickly and clearly. I would definitely rent from
                    here again!”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">Abi</div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Legend User, Chennai
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className=" bg-slate-100 rounded-xl p-8 pt-5 ">
              <img
                className=" w-32 h-32 rounded-full mx-auto
                "
                src="https://ucarecdn.com/eab677f7-674d-4869-a316-9acf8550b5e3/file.enc"
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">
                    “The selection of cars was great, but the prices were even
                    better. I got my rental at a great price and was able to
                    save money.”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    Anu Elango
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Starters User, Chennai
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>{" "}
        </div>
      </section>
    </>
  );
}

export default Review;
