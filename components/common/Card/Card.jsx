


export default function Card({ title, description, Icon }) {
  return (
    <div className="relative px-8 pt-12 pb-8 bg-white rounded-md md:pt-16 mb-14 lg:mb-0">
      <div className="absolute p-4 rounded-full w-fit bg-blue-600 top-[-40px] sm:left-8 left-[50%] translate-x-[-50%] sm:translate-x-0">
        <Icon className="text-white h-9" />
      </div>
      <h5 className="pb-5 text-xl font-semibold text-slate-900 ">{title}</h5>
      <div className="text-base text-gray-600">{description}</div>
    </div>
  );
}
