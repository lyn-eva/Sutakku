import { Icon } from "@iconify/react";

function Title({ value, rename, Ref, handleChange, handleRename }) {
  return (
    <div className="group relative mb-2 flex items-center pr-6">
      <label
        className={
          "mr-1 self-start pt-[2px] sm:pt-[3px] font-exo text-t-md font-semibold tracking-wide text-gray-300 sm:mr-3 sm:text-t-lg"
        }
      >
        Title:
      </label>
      <textarea
        onChange={handleChange}
        disabled={!rename}
        value={value}
        type="text"
        ref={Ref}
        placeholder="title"
        rows="1"
        className={`${
          rename ? "bg-white text-black" : "bg-transparent"
        } w-full rounded-sm px-2 text-t-md font-normal leading-5 tracking-wide outline-none sm:text-lg sm:leading-6 md:leading-7`}
      />
      <button
        onClick={handleRename}
        className="absolute top-[1px] -left-8 ml-4 text-t-sm  sm:-left-9  sm:opacity-0 sm:group-hover:opacity-100"
      >
        <Icon width={13} icon="fa6-solid:pencil" />
      </button>
    </div>
  );
}

export default Title;
