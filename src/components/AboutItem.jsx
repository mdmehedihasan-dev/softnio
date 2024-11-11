import Button from './Button'

const AboutItem = () => {
  return (
    <div className="mt-6 lg:mt-8">
    <h2 className="text-2xl sm:text-[32px] uppercase font-bold leading-tight lg:leading-[44px] mb-4">
      Exceptional culinary experience and delicious food
    </h2>
    <p className="text-sm sm:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
      odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
      sit amet consectetur adipiscing elit do eiusmod tempor
      incididunt ut labore et dolore magna minim veniam nostrud
      exercitation.
    </p>
    <div className="flex items-center gap-4 mt-6 lg:mt-8 sm:gap-x-8">
      <Button title={"About More"} />
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6 sm:w-8 sm:h-8"
          src="/image/call-alt.png"
          alt="Call Icon"
        />
        <span className="font-bold text-base sm:text-[18px]">
          01703946056
        </span>
      </div>
    </div>
  </div>
  )
}

export default AboutItem