import { useDB } from "../context/dbProvider";
import RepoFrame from "./RepoFrame";

const Dues = ({dues}) => (
  <ul className="text-black mt-3">
    {dues.length === 0 && <p className='text-center text-text-gray mt-5'>there's no due :)</p>}
    {dues.length > 0 && dues.map(({ description }) => (
      <div key={description} className="bg-white mt-2 rounded-sm px-4 py-[5px] text-normal relative truncate">
        {/* <span
          className="absolute top-0 left-0 rounded-sm rounded-bl-none h-[5px] w-24"
          style={{ backgroundColor: clr}}
        ></span> */}
        {description}
      </div>
    ))}
  </ul>
);

function Repo({name, id, shrink, onClick}) {
  const { ideaList } = useDB();

  return (
    <div className=" bg-bg-dark w-[20rem] rounded-md">
      <RepoFrame onClick={onClick} name={name}/>
      {!shrink && <div className="p-6 text-white font-roboto">
        <h2 className="font-medium mb-1">Latest dues</h2>
        <hr />
        <Dues dues={ideaList[id] || []}/>
      </div>}
    </div>
  );
}

export default Repo;
