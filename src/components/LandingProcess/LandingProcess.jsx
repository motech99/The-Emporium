export default function LandingProcess({ processRef, processIsVisible }) {
  return (
    <>
      <section ref={processRef} className={`snap-start snap-always opacity-0 ${processIsVisible ? "opacity-100 duration-1000" : ""}`}>
        <div className="text-left max-w-xl text mx-20 my-28 bg-secondary p-10 rounded-xl">
          <h2 className="font-extrabold text-5xl text-left my-4">
            How it all works
          </h2>
          <p className="text-lg">
            We have crafted our website to be both intuitive and user-friendly,
            guaranteeing a seamless experience when it comes to buying and
            selling items.
          </p>
        </div>
        <div className={`md:flex border-b border-contrast mb-20 opacity-0 ${processIsVisible ? "opacity-100 duration-1000 delay-700" : ""}`}>
          <div className="mx-20 md:max-w-md">
            <img src="images/trolley.gif" alt="" className="h-1/4 rounded-lg" />
            <h3 className="text-left font-bold text-2xl my-4">Easy Bidding</h3>
            <p className="text-left text-lg">
              Bidding on our marketplace is a breeze. Simply find the item you
              desire, place your bid, and watch the competition unfold in
              real-time.
            </p>
          </div>
          <div className="mx-20 md:max-w-md">
            <img src="images/celebrate.gif" alt="" className="h-1/4 rounded-lg" />
            <h3 className="text-left font-bold text-2xl my-4">
              Winning Made Simple
            </h3>
            <p className="text-left text-lg">
              Winning an auction is as exciting as it gets. If your bid reigns
              supreme when the auction clock runs out, congratulations, the item
              is yours!
            </p>
          </div>
          <div className="mx-20 md:max-w-md">
            <img src="images/coins.gif" alt="" className="h-1/4 rounded-lg" />
            <h3 className="text-left font-bold text-2xl my-4">
              Seamless Selling Experience
            </h3>
            <p className="text-left text-lg">
              Selling items is a snap too. Just create a listing with details
              and images, set your price, and let potential buyers make their
              move. Easy money!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
