import React, { Component } from "react";

import { MDBBox, MDBRow, MDBCol, MDBDataTable, MDBBtn } from "mdbreact";

import Navbar from "../components/Navbar";
// import TableDraft from "../components/TableDraft";

import "../css/style.css";
import PictName from "../components/PictName";
// import Pagination from "../components/Pagination";

class DashboardDraft extends Component {
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
          color: "pink",
        },
        {
          label: "Created At",
          field: "created_at",
          sort: "asc",
          width: 200,
        },
        {
          label: "Segments",
          field: "segment",
          sort: "asc",
          width: 270,
        },
        {
          label: "Delete",
          field: "delete",
          sort: "asc",
          width: 150,
        },
      ],
      rows: [
        {
          title: "Tiger Nixon",
          created_at: "2011/07/25",
          segment: "System Architect",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Garrett Winters",
          created_at: "2011/07/25",
          segment: "Accountant",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Ashton Cox",
          created_at: "2011/07/25",
          segment: "Junior Technical Author",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Cedric Kelly",
          created_at: "2011/07/25",
          segment: "Senior Javascript Developer",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Airi Satou",
          created_at: "2008/11/28",
          segment: "Accountant",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Brielle Williamson",
          created_at: "Integration Specialist",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Herrod Chandler",
          created_at: "Sales Assistant",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Rhona Davidson",
          created_at: "Integration Specialist",
          segment: "Tokyo",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Colleen Hurst",
          created_at: "Javascript Developer",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Sonya Frost",
          created_at: "Software Engineer",
          segment: "Edinburgh",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Jena Gaines",
          created_at: "segment Manaddressr",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Quinn Flynn",
          created_at: "Support Lead",
          segment: "Edinburgh",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Charde Marshall",
          created_at: "Regional Director",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Haley Kennedy",
          created_at: "Senior Marketing Designer",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Tatyana Fitzpatrick",
          created_at: "Regional Director",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Michael Silva",
          created_at: "Marketing Designer",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Paul Byrd",
          created_at: "Chief Financial segmentr (CFO)",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Gloria Little",
          created_at: "Systems Administrator",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Bradley Greer",
          created_at: "Software Engineer",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Dai Rios",
          created_at: "Personnel Lead",
          segment: "Edinburgh",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Jenette Caldwell",
          created_at: "Development Lead",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Yuri Berry",
          created_at: "Chief Marketing segmentr (CMO)",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Caesar Vance",
          created_at: "Pre-Sales Support",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Doris Wilder",
          created_at: "Sales Assistant",
          segment: "Sidney",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Angelica Ramos",
          created_at: "Chief Executive segmentr (CEO)",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Gavin Joyce",
          created_at: "Developer",
          segment: "Edinburgh",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Jennifer Chang",
          created_at: "Regional Director",
          segment: "Singapore",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Brenden Wagner",
          created_at: "Software Engineer",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Fiona Green",
          created_at: "Chief Operating segmentr (COO)",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Shou Itou",
          created_at: "Regional Marketing",
          segment: "Tokyo",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Michelle House",
          created_at: "Integration Specialist",
          segment: "Sidney",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Suki Burks",
          created_at: "Developer",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Prescott Bartlett",
          created_at: "Technical Author",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Gavin Cortez",
          created_at: "Team Leader",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Martena Mccray",
          created_at: "Post-Sales support",
          segment: "Edinburgh",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Unity Butler",
          created_at: "Marketing Designer",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Howard Hatfield",
          created_at: "segment Manaddressr",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Hope Fuentes",
          created_at: "Secretary",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Vivian Harrell",
          created_at: "Financial Controller",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Timothy Mooney",
          created_at: "segment Manaddressr",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Jackson Bradshaw",
          created_at: "Director",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Olivia Liang",
          created_at: "Support Engineer",
          segment: "Singapore",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Bruno Nash",
          created_at: "Software Engineer",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Sakura Yamamoto",
          created_at: "Support Engineer",
          segment: "Tokyo",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Thor Walton",
          created_at: "Developer",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Finn Camacho",
          created_at: "Support Engineer",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Serge Baldwin",
          created_at: "Data Coordinator",
          segment: "Singapore",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Zenaida Frank",
          created_at: "Software Engineer",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Zorita Serrano",
          created_at: "Software Engineer",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Jennifer Acosta",
          created_at: "Junior Javascript Developer",
          segment: "Edinburgh",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Cara Stevens",
          created_at: "Sales Assistant",
          segment: "New York",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Hermione Butler",
          created_at: "Regional Director",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Lael Greer",
          created_at: "Systems Administrator",
          segment: "London",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Jonas Alexander",
          created_at: "Developer",
          segment: "San Francisco",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Shad Decker",
          created_at: "Regional Director",
          segment: "Edinburgh",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Michael Bruce",
          created_at: "Javascript Developer",
          segment: "Singapore",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </MDBBtn>
          ),
        },
        {
          title: "Donna Snider",
          created_at: "Customer Support",
          segment: "New York",
          delete: (
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
              Manage Draft
            </span>
          </MDBBox>
          {/* end title */}
          {/* main row */}
          <MDBRow
            style={{
              margin: "20px",
            }}
          >
            <MDBCol size="2">
              <PictName />
            </MDBCol>
            <MDBCol size="10">
              <MDBDataTable
                hover
                data={this.data}
                style={{
                  backgroundColor: "white",
                }}
              />
            </MDBCol>
          </MDBRow>
          {/* end main row */}
        </MDBBox>
      </MDBBox>
    );
  }
}
export default DashboardDraft;
