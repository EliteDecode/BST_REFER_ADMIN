import { IWithdrawal } from "@/types/wallet.types";
import { SearchOutlined } from "@ant-design/icons";
import { Box } from "@mui/material";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { FaRegEye } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { LuPartyPopper } from "react-icons/lu";
import { MdCancel, MdInfoOutline } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

type DataIndex = keyof IWithdrawal;

const WithdrawalTable: React.FC = () => {
  const { status } = useParams();
  const { withdrawals } = useSelector((state: any) => state.wallet);

  const filteredWithdrawals =
    status === "approved"
      ? withdrawals?.filter(
          (withdrawal: IWithdrawal) => withdrawal?.status === "approved"
        )
      : status === "pending"
        ? withdrawals?.filter(
            (withdrawal: IWithdrawal) => withdrawal?.status === "pending"
          )
        : withdrawals?.filter(
            (withdrawal: IWithdrawal) => withdrawal?.status === "declined"
          );

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<IWithdrawal> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}>
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}>
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<IWithdrawal> = [
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      ...getColumnSearchProps("amount"),
      render: (_, record) => (
        <span className="text-[12px] flex space-x-2 items-center justify-center">
          <FaNairaSign /> <span>{record?.amount.toLocaleString()}</span>
        </span>
      ),
    },

    {
      title: "Transaction Status",
      render: (_, record) => (
        <Box>
          {record.status === "approved" ? (
            <div className="text-green-500 flex items-center space-x-1 sm:w-[65%] w-full m-auto justify-center capitalize border text-[11px]  bg-green-50 rounded-lg py-0.5 px-1 ">
              <LuPartyPopper /> <span className="text-[9px]">Paid</span>
            </div>
          ) : record.status === "pending" ? (
            <div className="text-orange-500 flex items-center space-x-1 sm:w-[65%] w-full m-auto justify-center capitalize border text-[11px]  bg-orange-50 rounded-lg py-0.5 px-1 ">
              <MdInfoOutline /> <span className="text-[9px]">Pending</span>
            </div>
          ) : (
            <div className="text-red-500 flex items-center space-x-1 sm:w-[65%] w-full m-auto justify-center capitalize border text-[11px]  bg-red-50 rounded-lg py-0.5 px-1 ">
              <MdCancel /> <span className="text-[9px]">Declined</span>
            </div>
          )}
        </Box>
      ),
    },
    {
      title: "Date",
      width: 150,
      render: (_, record) => (
        <Box>
          <div className="text-purple-500 flex items-center space-x-1 sm:w-[65%] w-full m-auto justify-center capitalize border text-[11px]  bg-purple-50 rounded-lg py-0.5 px-1 ">
            <SlCalender />{" "}
            <span className="text-[9px]">
              {new Date(record.date).toLocaleString("en", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
            </span>
          </div>
        </Box>
      ),
    },
    {
      title: "Action",

      key: "action",

      render: (_, record) => (
        <Link to={`/dashboard/view-withdrawal/${record?._id}`}>
          <div className="text-blue-500 flex items-center space-x-1   w-full m-auto justify-center capitalize border text-[11px]  bg-blue-50 rounded-lg cursor-pointer py-1 px-1 ">
            <FaRegEye /> <span className="text-[9px]">View Withdrawal</span>
          </div>
        </Link>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={filteredWithdrawals} size="small" />
  );
};

export default WithdrawalTable;
