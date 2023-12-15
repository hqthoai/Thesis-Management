import { useState, useEffect, useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DebouncedInput from "./DebouncedInput";
import userService from "../../services/userServices";
import BaseTable from "./BaseTable.js";

const Table = ({ type }) => {
  const columnHelper = createColumnHelper();
  // initial columns if there is no data
  const [data, setData] = useState(() => {
    switch (type) {
      case "students":
        return [
          {
            firstName: "Luân ",
            lastName: "Heo",
            email: "student1@gmail.com",
            phone: "0987654321",
            address: "số 1 vvn ",
            studentId: "20110380",
            birthday: "",
            major: "",
          },
        ];
        break;
    }
  });
  const loadPage = async () => {
    try {
      let result;
      switch (type) {
        case "students":
          result = await userService.getAllStudent();
          console.log(result.length);

          if (result.length !== 0) {
            console.log("vo day 1");
            const processedResults = result.map((element) => ({
              studentId: element.studentId,
              fullName: element.firstName + " " + element.lastName,
              email: element.email,
              phone: element.phone,
              address: element.address,
              //   birthday: (element.birthday).toLocaleString().replace(''),
              birthday: parseDate(element.birthday),
              major: element.major,
            }));
            setData([...processedResults]);
          } else {
            console.log("vo day 2");
            setData([
              {
                firstName: "Luân ",
                lastName: "Heo",
                email: "student1@gmail.com",
                phone: "0987654321",
                address: "số 1 vvn ",
                studentId: "20110380",
                birthday: "",
                major: "",
              },
            ]);
          }

          break;

        default:
          break;
      }
    } catch (err) {
      //   toast.error("Failed", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
    }
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <div className="p-2 max-w-8xl mx-auto text-white fill-gray-400">
      <div className="flex justify-between mb-2">
        <div className="w-full flex items-center gap-1">
          <SearchIcon />
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="p-2 bg-gray-600 outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500 text-black rounded-md "
            placeholder="Search all columns..."
          />
        </div>

        {/* {isPT && type === "exercises" && (
          <div>
            <button
              type="reset"
              className="bg-red-700 text-white h-[40px] w-[120px] hover:border-3  px-2 hover:opacity-80"
              onClick={() => setOpenAddExerciseModel((state) => !state)}
            >
              Add Exercise
            </button>
          </div>
        )}
        {isAdmin && type === "pts" && (
          <div>
            <button
              type="reset"
              className="bg-red-700 text-white h-[60px] w-[150px] hover:border-3  px-2 hover:opacity-80"
              onClick={() => setOpenAddTrainerModal((state) => !state)}
            >
              Add Personal Trainer
            </button>
          </div>
        )} */}
      </div>
      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-red-800 text-center">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="capitalize px-3.5 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`
                ${i % 2 === 0 ? "bg-gray-900 " : "bg-gray-800"}
                `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2 text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32 text-black">
              <td colSpan={12}>No Record Found!</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex items-center justify-end mt-2 gap-2">
        <button
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {">"}
        </button>

        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 bg-transparent"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-transparent"
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

function parseDate(string) {
  const birthday = new Date(string);

  // Lấy ngày, tháng, năm
  const day = birthday.getDate();
  const month = birthday.getMonth() + 1; // Ghi chú: getMonth trả về giá trị từ 0 đến 11
  const year = birthday.getFullYear();

  // Tạo chuỗi ngày tháng năm
  return `${day}/${month}/${year}`;
}
export default Table;
