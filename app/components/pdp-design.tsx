const ASSETS = {
  productImage: "https://www.figma.com/api/mcp/asset/a0e7e6fd-9f03-445e-9459-a4a23d458d17",
  sliderDots: "https://www.figma.com/api/mcp/asset/8a7f63f4-e244-44f5-b345-7a14f481ea83",
  adThumb: "https://www.figma.com/api/mcp/asset/cc641fb6-a6ed-42c4-a559-03fdeed9bf5f",
  gift: "https://www.figma.com/api/mcp/asset/47365067-b95b-4e06-9376-a4bf4c5d7089",
  airpods: "/airpods.png",
  back: "/icons/back.svg",
  search: "/icons/search.svg",
  wishlist: "/icons/wishlist.svg",
  share: "/icons/share.svg",
  store: "/icons/store.svg",
  chevronRight: "/icons/chevron-right.svg",
  chevronDown: "/icons/chevron-down.svg",
  combo: "/icons/combo.svg",
  express: "/icons/express.svg",
  star: "/icons/star.svg",
  verified: "/icons/verified.svg",
  card: "/icons/card.svg",
  info: "/icons/info.svg",
  lowPrice: "/icons/low-price.svg",
  couponBg: "/icons/coupon-bg.svg",
  couponPercent: "/icons/coupon-percent.svg",
  bestseller: "/icons/bestseller.png",
};

function HeaderButtons() {
  const btn =
    "h-10 w-10 rounded-full border border-bluegray-200 bg-white/90 flex items-center justify-center";
  return (
    <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-3">
      <button className={btn} aria-label="Back">
        <img src={ASSETS.back} alt="" className="h-5 w-5" />
      </button>
      <div className="flex gap-2">
        <button className={btn} aria-label="Search">
          <img src={ASSETS.search} alt="" className="h-5 w-5" />
        </button>
        <button className={btn} aria-label="Wishlist">
          <img src={ASSETS.wishlist} alt="" className="h-5 w-5" />
        </button>
        <button className={btn} aria-label="Share">
          <img src={ASSETS.share} alt="" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function CouponIcon() {
  return (
    <div className="relative h-6 w-6 shrink-0">
      <img src={ASSETS.couponBg} alt="" className="absolute inset-0 h-full w-full" />
      <img src={ASSETS.couponPercent} alt="" className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

function MainInfo() {
  return (
    <section className="mx-3 rounded-[16px] bg-accent-100 flex flex-col">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1 text-sm font-bold text-accent-700">
          <img src={ASSETS.store} alt="" className="h-6 w-6" />
          Apple
        </div>
        <div className="flex items-center gap-1 text-[13px] font-semibold text-accent-700">
          Visit Store
          <img src={ASSETS.chevronRight} alt="" className="h-3 w-3" />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-3 flex flex-col">
        <h1 className="text-base leading-5 font-medium text-bluegray-1000">
          iPhone Air 256GB Sky Blue 5G (eSim only) With FaceTime - International Version
        </h1>

        <div className="mt-2 flex gap-1 text-[13px]">
          <span className="flex items-center gap-1 rounded-md bg-bluegray-100 px-2 py-1 text-bluegray-1000 font-semibold leading-[18px]">
            <img src={ASSETS.star} alt="" className="h-3.5 w-3.5" />
            4.6 <span className="font-semibold text-bluegray-800">(1541 reviews)</span>
          </span>
          <span className="flex items-center gap-1 rounded-md bg-orange-50 px-2 py-1 text-bluegray-1000 font-medium leading-[18px]">
            <img src={ASSETS.card} alt="" className="h-4 w-4" />
            Prepaid Only
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-3">
          <div className="flex items-end gap-1">
            <span className="text-[22px] leading-6 font-bold text-bluegray-1000">AED 3699</span>
            <span className="text-base leading-5 text-bluegray-600 line-through">AED 4299</span>
            <span className="text-sm leading-[18px] font-semibold text-green-700">14%</span>
            <span className="text-sm leading-[18px] text-bluegray-600">(incl. of VAT)</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-50 to-white px-2 py-2 text-bluegray-800">
            <div className="flex items-center gap-2">
              <img src={ASSETS.combo} alt="" className="h-5 w-5" />
              <span className="text-sm font-medium">Saving 45 with Combo</span>
            </div>
            <img src={ASSETS.info} alt="" className="h-4 w-4" />
          </div>

          <div className="inline-flex items-center gap-1.5 self-start rounded bg-bluegray-100 px-1.5 py-1 text-sm text-bluegray-800">
            <span>500ml</span>
            <span className="h-3 w-px bg-bluegray-400" />
            <span>Ð2.35/ml</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="rounded bg-bg-supermall px-1.5 py-0.5 text-[13px] font-semibold leading-[17px] text-white">Mega Deal</span>
            <span className="flex items-center gap-1 rounded bg-gradient-to-r from-[#f3f5fc] to-white px-1 py-0.5">
              <img src={ASSETS.lowPrice} alt="" className="h-[18px] w-[18px]" />
              <span className="text-sm font-medium leading-[18px] text-bluegray-700">Lowest Price in 30 days</span>
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <div className="flex shrink-0 items-center gap-2 rounded-lg border border-dashed border-emerald-700/40 bg-[#f6fefd] py-1.5 pl-1.5 pr-2">
              <CouponIcon />
              <div className="flex items-center gap-1 text-sm font-semibold leading-[18px] text-text-primary">
                <span>Extra 10% Off</span>
                <span>CODE: SAVEBIG</span>
              </div>
              <img src={ASSETS.chevronRight} alt="" className="h-2.5 w-2.5" />
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-lg border border-dashed border-emerald-700/40 bg-[#f6fefd] py-1.5 pl-1.5 pr-2">
              <CouponIcon />
              <span className="text-sm font-semibold leading-[18px] text-text-primary whitespace-nowrap">Extra 10% off up to Ð150</span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex h-9 items-center justify-between rounded-[10px] bg-bluegray-100 px-2 py-3">
          <div className="flex items-center gap-2">
            <img src={ASSETS.bestseller} alt="" className="h-6 w-6" />
            <p className="text-sm italic leading-[19px] text-bluegray-900">
              Bestseller #27 in <span className="font-semibold text-accent-700">Chargers</span>
            </p>
          </div>
          <img src={ASSETS.chevronRight} alt="" className="h-3 w-3" />
        </div>
      </div>
    </section>
  );
}

function ComboCard() {
  return (
    <section className="mx-3 rounded-2xl bg-white px-4 py-3">
      <h2 className="text-lg leading-5 font-bold text-bluegray-1000">In this combo</h2>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 h-[72px]">
        {[1, 2].map((item) => (
          <article key={item} className="min-w-[228px] rounded-xl border border-bluegray-200 p-1.5">
            <div className="flex gap-3 items-center">
              <div className="relative h-[60px] w-[53px] overflow-hidden rounded-md bg-bluegray-50">
                <img src={ASSETS.airpods} alt="" className="h-full w-full object-contain" />
                <span className="absolute bottom-1 right-1 rounded-md border border-border-grey-a bg-white px-1 text-[10px]">x2</span>
              </div>
              <div className="flex-1 self-start">
                <p className="line-clamp-2 text-sm leading-[18px] text-[#212121]">Apple Airpods Pro 2 Wireless Earbuds</p>
                <div className="mt-1 flex items-center gap-1 text-sm">
                  <span className="font-bold text-bluegray-900">Ð899</span>
                  <span className="text-bluegray-600 line-through">1399</span>
                  <span className="font-semibold text-green-800">33%</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AdCard() {
  return (
    <section className="mx-3 rounded-lg bg-white">
      <div className="flex items-center justify-between rounded-md border border-border-primary px-2 h-8">
        <div className="flex items-center gap-2">
          <img src={ASSETS.adThumb} alt="" className="h-8 w-8 rounded bg-bluegray-50" />
          <p className="max-w-[160px] truncate text-xs italic text-noon-black">TCF09 40W Dual USB-C / Type-C...</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-base font-bold text-noon-black">Ð125</span>
          <img src={ASSETS.express} alt="" className="h-4 w-[53px]" />
        </div>
      </div>
    </section>
  );
}

function DeliveryCard() {
  return (
    <section className="mx-3 rounded-2xl bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-[15px] leading-5 font-bold text-bluegray-1000">Delivery Information</h3>
        <span className="text-xs text-bluegray-600">one member</span>
      </div>
      <div className="rounded-xl border border-bluegray-200 px-3 py-2">
        <p className="text-sm text-bluegray-900">Get it Tomorrow before 12 PM</p>
      </div>
      <button className="mt-2 flex w-full items-center justify-between rounded-xl bg-bluegray-100 px-3 py-3 text-sm leading-5 font-semibold text-bluegray-700">
        Other Delivery Options
        <img src={ASSETS.chevronDown} alt="" className="h-5 w-5" />
      </button>
    </section>
  );
}

function FreeGifts() {
  return (
    <section className="mx-3 rounded-2xl bg-white px-3 py-4">
      <h3 className="text-base leading-5 font-bold text-bluegray-1000">Free gifts for you</h3>
      <article className="mt-3 rounded-xl border border-bluegray-300 p-2">
        <div className="flex gap-3">
          <div className="relative h-[55px] w-14 rounded-lg border border-bluegray-100 bg-white">
            <img src={ASSETS.gift} alt="" className="h-full w-full object-contain" />
            <span className="absolute bottom-0 left-0 right-0 rounded-b-md bg-[#1155cb] text-center text-[13px] font-bold italic text-white">Free</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[15px] font-semibold italic leading-[18px] text-[#242a34]">Pepsi Gift Hamper</p>
            <p className="text-xs italic font-medium text-[#67778e]">Pack of 6 cans &amp; Hoodie or tote bag</p>
            <p className="text-[13px] font-semibold text-accent-700">View eligible products &gt;</p>
          </div>
        </div>
      </article>
    </section>
  );
}

function BottomBar() {
  return (
    <div className="sticky bottom-0 z-20 rounded-t-xl bg-white px-3 pt-3 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
      <div className="flex h-12 items-center gap-2">
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border border-bluegray-300">
          <span className="text-xs text-bluegray-500">QTY</span>
          <span className="text-base font-bold text-bluegray-800">1</span>
        </div>
        <button className="h-12 flex-1 rounded-[10px] border border-noon-blue text-sm font-bold text-noon-blue">Buy now</button>
        <button className="h-12 flex-1 rounded-[10px] bg-noon-blue text-sm font-bold text-white">Add to cart</button>
      </div>
      <div className="flex justify-center pb-2 pt-3">
        <div className="h-[5px] w-[124px] rounded-lg bg-[#0e0e0e]" />
      </div>
    </div>
  );
}

export default function PdpDesign() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[375px] bg-gradient-to-b from-white to-[#F3F3F7] flex flex-col gap-3">
      <section className="relative">
        <HeaderButtons />
        <img src={ASSETS.productImage} alt="iPhone" className="h-[512px] w-full object-cover" />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <img src={ASSETS.sliderDots} alt="" className="h-1.5 w-[50px]" />
        </div>
      </section>
      <MainInfo />
      <ComboCard />
      <AdCard />
      <DeliveryCard />
      <FreeGifts />
      <BottomBar />
    </main>
  );
}
