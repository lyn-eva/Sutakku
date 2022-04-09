import Iconify from "../utility/Iconify";

function Location({ editable, value, rename, ref, handleChange, handleRename }) {
  // const [location, setLocation] = useState({line : '', file : ''});
  // const [rename, setRename] = useState(initial);
  // const lineRef = useRef(null);
  // const fileRef = useRef(null);
  
  // const handleRename = () => {
  //   setRename(prev => !prev)
  //   setTimeout(() => lineRef.current.focus(), 0);
  // }

  // const handleChange = (e) => {
  //   const newLocation = {...location, [e.target.name]: e.target.value};
  //   setLocation(newLocation);
  //   if (!dispatchForm) return;
  //   dispatchForm({type: 'LOCATION', value: newLocation});
  // }

  console.log(rename, editable)
  return (
    <div className="font-exo font-light text-sm pl-6 relative group">
      {editable && (
        <button
          onClick={handleRename}
          className="absolute top-0 left-0 opacity-0 group-hover:opacity-100"
        >
          <Iconify data-width={13} data-icon="fa6-solid:pencil" />
        </button>
      )}
      {rename && editable ? (
        <>
          <label className="mr-3 font-medium">Line: </label>
          <input
            onChange={handleChange}
            value={value.line ?? ''}
            name="line"
            ref={ref}
            maxLength="5"
            type="number"
            placeholder="69"
            className="text-black rounded-sm px-1 text-md outline-none w-14 text-center"
          />
          <label className="mx-3 font-medium">from: </label>
          <input
            onChange={handleChange}
            value={value.file ?? ''}
            name="file"
            maxLength="34"
            type="text"
            placeholder="CustomForm.js"
            className="text-black rounded-sm px-1 text-md outline-none w-[17rem] text-center"
          />
        </>
      ) : (
        <p className="font-exo font-light text-sm ">
          {/* {value.line && (
            <> */}
              line <span className="text-[#23dc41] mx-1">{value.line}</span>
            {/* </>
          )} */}
          {/* {value.file && (
            <> */}
              at
              <span className="text-[#1BF9F9] mx-1">{value.file}</span>
            {/* </>
          )} */}
        </p>
      )}
    </div>
  );
}

export default Location;
