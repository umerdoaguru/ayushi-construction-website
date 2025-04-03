import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import UserLogin from './UserLogin';
import Logout from "./Logout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {  BsTrash } from "react-icons/bs";
import * as XLSX from 'xlsx';
const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  
  const [currentPage, setCurrentPage] = useState(0);       
  const [itemsPerPage] = useState(10);
  const [filterText, setFilterText] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const token = user?.token;
  useEffect(() => {
  

    fetchUserdata();
  }, []);
  const fetchUserdata = async () => {
    try {
      const response = await axios.get(`https://ayushiconstruction.com/api/user-data`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }});
      setUserData(response.data);
  
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };
  const handleDeleteClick = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (isConfirmed) {
      try {
        await axios.delete(`https://ayushiconstruction.com/api/user-data/${id}`);
        fetchUserdata(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting lead:", error);
      }
    }
  };


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setCurrentPage(0); 
};

const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
    setCurrentPage(0); 
};

const uniqueYears = [...new Set(userData.map(user => moment(user.created_date).format("YYYY")))];
  const monthOrder = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const uniqueMonths = yearFilter
    ? [...new Set(
      userData
        .filter(user => moment(user.created_date).format("YYYY") === yearFilter)
        .map(user => moment(user.created_date).format("MMMM"))
    )].sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
    : [];

  const filteredUserData = userData.filter(user => {
    const fullName = user.name.toLowerCase().trim();
    const lowerSearchQuery = filterText.toLowerCase().trim();
    const formattedDate = moment(user.created_date).format("YYYY-MM-DD");
    const userYear = moment(user.created_date).format("YYYY");
    const userMonth = moment(user.created_date).format("MMMM");

    return (
      (fullName.includes(lowerSearchQuery) || user.email.toLowerCase().trim().includes(lowerSearchQuery)) &&
      (!dateFilter || formattedDate === dateFilter) &&
      (!yearFilter || userYear === yearFilter) &&
      (!monthFilter || userMonth === monthFilter)
    );
  });



  const downloadExcel = () => {
    const formattedData = filteredUserData.map((user, index) => ({
      ID: index + 1,
      "User Name": user.name,
      "Email Id": user.email,
      "Mobile Number": user.mobile_no,
      Subject: user.subject,
      Address: user.address,
      Message: user.message,
      "Created Date": moment(user.created_date).format("DD-MM-YYYY"), // Format date
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");

    XLSX.writeFile(workbook, `UserData_${yearFilter || "All"}_${monthFilter || "All"}.xlsx`);
  };

  const offset = currentPage * itemsPerPage;
  const currentUserData = filteredUserData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredUserData.length / itemsPerPage);

  return (
    <Wrapper>
      <div className="container-fluid d-flex justify-content-between ">
        <div className="div"><UserLogin/></div>
        <div className="div"><Logout/></div>
      </div>
      <div className="container">
        <h2>List of User Data Ayushi Construction</h2>
      
            {/* <div className="row mb-3">
                <div className="col-lg-3">  <input
            type="text"
            placeholder="Filter by User Name or Email"
            value={filterText}
            onChange={handleFilterChange}
            className="form-control "
          /></div>
                <div className="col-lg-2">  <input
            type="date"
            value={dateFilter}
            onChange={handleDateFilterChange}
            className="form-control dateset"
          /></div>
            </div> */}
        
            <div className="row mb-3">
        <div className="col-lg-3">
          <input type="text" placeholder="Filter by Name or Email" value={filterText} onChange={(e) => setFilterText(e.target.value)} className="form-control" />
        </div>
        <div className="col-lg-2">
          <input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="form-control" />
        </div>
        <div className="col-lg-2">
          <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="form-control">
            <option value="">All Years</option>
            {uniqueYears.map(year => <option key={year} value={year}>{year}</option>)}
          </select>
        </div>
        {yearFilter && (
          <div className="col-lg-2">
            <select value={monthFilter} onChange={(e) => setMonthFilter(e.target.value)} className="form-control">
              <option value="">All Months</option>
              {uniqueMonths.map(month => <option key={month} value={month}>{month}</option>)}
            </select>
          </div>
        )}
        <div className="col-lg-2">
          <button className="btn btn-success" onClick={downloadExcel}>Download Excel</button>
        </div>
      </div>
       
        <div className="" style={{ overflowY: "auto" }}>
          {currentUserData.length > 0 ? (
            <>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email Id</th>
                    <th>Mobile Number</th>
                    <th>Subject</th>
                    <th>Address</th>
                    <th>Message</th>
                    <th>Created Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUserData.map((userdata, index) => (
                    <tr key={userdata.id}>
                      <td>{index + 1 + currentPage * itemsPerPage}</td>
                      <td>{userdata.name}</td>
                      <td>{userdata.email}</td>
                      <td>{userdata.mobile_no}</td>
                      <td>{userdata.subject}</td>
                      <td>{userdata.address}</td>
                      <td>{userdata.message}</td>
                      <td>{moment(userdata.created_date).format('DD/MM/YYYY')}</td>
                      <td> <button
                          className="text-red-500 hover:text-red-700 mx-2"
                          onClick={() => handleDeleteClick(userdata.id)}
                        >
                          <BsTrash size={20} />
                        </button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                forcePage={currentPage} 
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
              />
            </>
          ) : (
            <div className="text-center">
              <p>No data found</p>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminDashboard;

const Wrapper = styled.div`
  h2 {
    color: #f26a20;
    
  }
  th {
    color: white;
    background-color: #f26a20;
    white-space: nowrap;
  }
  .text-center {
    margin-top: 20px;
    font-size: 18px;
    color: #f26a20;
  }
  .dateset{
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
    }
  }
  .container-fluid{
margin-top: 7rem;
  }
`;



