import React, { Component } from "react";

import { MDBBox, MDBRow, MDBCol, MDBDataTable, MDBBtn } from "mdbreact";

import Navbar from "../components/Navbar";

import "../css/style.css";
import PictName from "../components/PictName";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
    // this.toggle = this.toggle.bind(this);
    this.data = {
      columns: [
        {
          label: "Title",
          field: "title",
          sort: "asc",
          width: 150,
        },
        {
          label: "Open rate",
          field: "open_rate",
          sort: "asc",
          width: 270,
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
          width: 150,
        },
        {
          label: "Segment",
          field: "segment",
          sort: "asc",
          width: 150,
        },
        {
          label: "Created At",
          field: "created_at",
          sort: "asc",
          width: 200,
        },
      ],
      rows: [
        {
          title: "Tiger Nixon",
          created_at: "2011/07/25",
          open_rate: "100%",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Garrett Winters",
          created_at: "2011/07/25",
          open_rate: "Accountant",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "blue",
                borderRadius: "40px",
              }}
            >
              RUNNING
            </MDBBox>
          ),
        },
        {
          title: "Ashton Cox",
          created_at: "2011/07/25",
          open_rate: "Junior Technical Author",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Cedric Kelly",
          created_at: "2011/07/25",
          open_rate: "Senior Javascript Developer",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Airi Satou",
          created_at: "2008/11/28",
          open_rate: "Accountant",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Brielle Williamson",
          created_at: "Integration Specialist",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Herrod Chandler",
          created_at: "Sales Assistant",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Rhona Davidson",
          created_at: "Integration Specialist",
          open_rate: "Tokyo",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Colleen Hurst",
          created_at: "Javascript Developer",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Sonya Frost",
          created_at: "Software Engineer",
          open_rate: "Edinburgh",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Jena Gaines",
          created_at: "open_rate Manaddressr",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Quinn Flynn",
          created_at: "Support Lead",
          open_rate: "Edinburgh",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Charde Marshall",
          created_at: "Regional Director",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Haley Kennedy",
          created_at: "Senior Marketing Designer",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Tatyana Fitzpatrick",
          created_at: "Regional Director",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Michael Silva",
          created_at: "Marketing Designer",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Paul Byrd",
          created_at: "Chief Financial open_rater (CFO)",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Gloria Little",
          created_at: "Systems Administrator",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Bradley Greer",
          created_at: "Software Engineer",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Dai Rios",
          created_at: "Personnel Lead",
          open_rate: "Edinburgh",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Jenette Caldwell",
          created_at: "Development Lead",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Yuri Berry",
          created_at: "Chief Marketing open_rater (CMO)",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Caesar Vance",
          created_at: "Pre-Sales Support",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Doris Wilder",
          created_at: "Sales Assistant",
          open_rate: "Sidney",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Angelica Ramos",
          created_at: "Chief Executive open_rater (CEO)",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Gavin Joyce",
          created_at: "Developer",
          open_rate: "Edinburgh",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Jennifer Chang",
          created_at: "Regional Director",
          open_rate: "Singapore",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Brenden Wagner",
          created_at: "Software Engineer",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Fiona Green",
          created_at: "Chief Operating open_rater (COO)",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Shou Itou",
          created_at: "Regional Marketing",
          open_rate: "Tokyo",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Michelle House",
          created_at: "Integration Specialist",
          open_rate: "Sidney",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Suki Burks",
          created_at: "Developer",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Prescott Bartlett",
          created_at: "Technical Author",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Gavin Cortez",
          created_at: "Team Leader",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Martena Mccray",
          created_at: "Post-Sales support",
          open_rate: "Edinburgh",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Unity Butler",
          created_at: "Marketing Designer",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Howard Hatfield",
          created_at: "open_rate Manaddressr",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Hope Fuentes",
          created_at: "Secretary",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Vivian Harrell",
          created_at: "Financial Controller",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Timothy Mooney",
          created_at: "open_rate Manaddressr",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Jackson Bradshaw",
          created_at: "Director",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Olivia Liang",
          created_at: "Support Engineer",
          open_rate: "Singapore",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Bruno Nash",
          created_at: "Software Engineer",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Sakura Yamamoto",
          created_at: "Support Engineer",
          open_rate: "Tokyo",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Thor Walton",
          created_at: "Developer",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Finn Camacho",
          created_at: "Support Engineer",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Serge Baldwin",
          created_at: "Data Coordinator",
          open_rate: "Singapore",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Zenaida Frank",
          created_at: "Software Engineer",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Zorita Serrano",
          created_at: "Software Engineer",
          open_rate: "San Francisco",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Jennifer Acosta",
          created_at: "Junior Javascript Developer",
          open_rate: "Edinburgh",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Cara Stevens",
          created_at: "Sales Assistant",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Hermione Butler",
          created_at: "Regional Director",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Lael Greer",
          created_at: "Systems Administrator",
          open_rate: "London",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Jonas Alexander",
          created_at: "Developer",
          open_rate: "100%",
          segment: "manager",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Shad Decker",
          created_at: "Regional Director",
          open_rate: "Edinburgh",
          segment: "accountant",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Michael Bruce",
          created_at: "Javascript Developer",
          open_rate: "Singapore",
          segment: "accountant",
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          ),
        },
        {
          title: "Donna Snider",
          created_at: "Customer Support",
          open_rate: "New York",
          segment: "manager",
          status: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
      ],
    };
  }
  render() {
    return (
      <MDBBox>
        <Navbar
          isLogin={this.state.isLogin}
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          style={{ position: "fixed" }}
        />
        <MDBBox
          style={{
            backgroundColor: "#f7f7f7",
            padding: "100px 0 1px 0",
          }}
        >
          {/* title */}
          <MDBBox className="d-flex align-items-center mx-5 pb-3">
            <span
              className="text-left"
              style={{
                fontWeight: "600",
                color: "#192e35",
                fontSize: "28px",
              }}
            >
              Manage Broadcast
            </span>
          </MDBBox>
          {/* end title */}
          {/* main row */}
          <MDBRow
            style={{
              margin: "20px",
            }}
          >
            {/* side bar */}
            <MDBCol size="2">
              <PictName />
            </MDBCol>
            {/* end side bar */}
            {/* table */}
            <MDBCol size="10">
              <MDBDataTable
                hover
                data={this.data}
                style={{
                  backgroundColor: "white",
                }}
              />
            </MDBCol>
            {/* end table */}
          </MDBRow>
          {/* end main row */}
        </MDBBox>
      </MDBBox>
    );
  }
}
export default Dashboard;
