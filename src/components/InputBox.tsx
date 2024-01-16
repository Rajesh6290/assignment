import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  image: string;
  email: string;
}
const InputBox = () => {
  const users: User[] = [
    {
      id: 1,
      name: "Alice Smith",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      email: "alice@example.com",
    },
    {
      id: 2,
      name: "Bob Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      email: "bob@example.com",
    },
    {
      id: 3,
      name: "Charlie Brown",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      email: "charlie@example.com",
    },
    {
      id: 4,
      name: "David Lee",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      email: "david@example.com",
    },
    {
      id: 5,
      name: "Eve Davis",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      email: "eve@example.com",
    },
    {
      id: 6,
      name: "Frank White",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      email: "frank@example.com",
    },
    {
      id: 7,
      name: "Grace Taylor",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      email: "grace@example.com",
    },
    {
      id: 8,
      name: "Harry Anderson",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      email: "harry@example.com",
    },
    {
      id: 9,
      name: "Ivy Robinson",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      email: "ivy@example.com",
    },
    {
      id: 10,
      name: "Jack Miller",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      email: "jack@example.com",
    },
  ];
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<User[]>(users);
  const [selectedChip, setSelectedChip] = useState<User[]>([]);

  const handelChange = (item: string) => {
    setInputValue(item);
  };
  useEffect(() => {
    // Filter items based on input value
    const filtered = users.filter((item) =>
      item?.name?.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [inputValue, users]);

  //   when click search users operation
  const handleItemToggle = (item: User) => {
    setInputValue("");
    setSelectedChip((prevChips: User[]) =>
      prevChips.some(
        (selectedItem: { id: number }) => selectedItem.id === item.id
      )
        ? prevChips.filter(
            (selectedItem: { id: number }) => selectedItem.id !== item.id
          )
        : [...prevChips, item]
    );
  };

  //   Selected users removed operations
  const handleRemoveUser = (item: User) => {
    setSelectedChip((prevChips) =>
      prevChips.filter((selectedItem) => selectedItem.id !== item.id)
    );
  };

  return (
    <div className="w-full items-center  flex justify-center ">
      <div className="flex flex-col gap-2 w-fit bg-gray-50 rounded-xl p-4 items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <h1 className=" text-xl font-bold text-gray-800">
          Custom MultiSelect Input Box
        </h1>
        <h1 className=" text-sm  text-gray-800">
          Note:- Search Array in this code check then search else the search
          latter be the A to J.
        </h1>
        <div className="flex justify-center items-center w-fit max-w-[30rem] h-fit gap-2 flex-wrap border-2 border-red-500 rounded-lg p-2">
          {selectedChip?.map((item) => (
            <div
              key={item?.id}
              className="flex items-center justify-between gap-2 px-2 py-1 rounded-full bg-blue-100 "
            >
              <div className="flex items-center gap-1">
                <img
                  src={item?.image}
                  className=" rounded-full w-7 h-7"
                  alt=""
                />
                <p className="text-sm font-semibold text-gray-700 ">
                  {item?.name}
                </p>
              </div>
              <p
                onClick={() => handleRemoveUser(item)}
                className="text-lg font-semibold cursor-pointer text-gray-700"
              >
                X
              </p>
            </div>
          ))}
          <input
            type="text"
            className=" outline-none  bg-transparent"
            name=""
            id=""
            value={inputValue}
            placeholder="type and search user"
            onChange={(e) => handelChange(e?.target?.value)}
          />
        </div>
        <div
          className={`w-[17rem] duration-300 ease-out transition-all rounded-lg bg-gray-100 p-2 flex flex-col gap-1 items-center
      ${inputValue?.length > 0 ? ` opacity-100` : ` opacity-0 hidden`}
      `}
        >
          {filteredItems?.length > 0 ? (
            filteredItems?.map((item) => (
              <div
                key={item?.id}
                onClick={() => handleItemToggle(item)}
                className="flex items-center gap-5 cursor-pointer hover:bg-blue-50 rounded-lg duration-200 px-3 py-2"
              >
                <img
                  src={item?.image}
                  className="w-14 h-14 rounded-full object-center"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <p>{item?.name}</p>
                  <p>{item?.email}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-800 font-semibold">Users Not Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBox;
