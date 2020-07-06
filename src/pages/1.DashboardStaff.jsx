import React, { Component } from "react";

import { MDBBox, MDBRow, MDBCol, MDBDataTable, MDBBtn } from "mdbreact";

import Navbar from "../components/Navbar";

import "../css/style.css";
import PictName from "../components/PictName";

class DashboardStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
    // this.toggle = this.toggle.bind(this);
    this.data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
          color: "pink",
        },
        {
          label: "Broadcast",
          field: "broadcast",
          sort: "asc",
          width: 270,
        },
        {
          label: "Created At",
          field: "created_at",
          sort: "asc",
          width: 200,
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
          name: "Tiger Nixon",
          created_at: "2011/07/25",
          broadcast: "System Architect",
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
          name: "Garrett Winters",
          created_at: "2011/07/25",
          broadcast: "Accountant",
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
          name: "Ashton Cox",
          created_at: "2011/07/25",
          broadcast: "Junior Technical Author",
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
          name: "Cedric Kelly",
          created_at: "2011/07/25",
          broadcast: "Senior Javascript Developer",
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
          name: "Airi Satou",
          created_at: "2008/11/28",
          broadcast: "Accountant",
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
          name: "Brielle Williamson",
          created_at: "Integration Specialist",
          broadcast: "New York",
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
          name: "Herrod Chandler",
          created_at: "Sales Assistant",
          broadcast: "San Francisco",
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
          name: "Rhona Davidson",
          created_at: "Integration Specialist",
          broadcast: "Tokyo",
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
          name: "Colleen Hurst",
          created_at: "Javascript Developer",
          broadcast: "San Francisco",
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
          name: "Sonya Frost",
          created_at: "Software Engineer",
          broadcast: "Edinburgh",
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
          name: "Jena Gaines",
          created_at: "broadcast Manaddressr",
          broadcast: "London",
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
          name: "Quinn Flynn",
          created_at: "Support Lead",
          broadcast: "Edinburgh",
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
          name: "Charde Marshall",
          created_at: "Regional Director",
          broadcast: "San Francisco",
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
          name: "Haley Kennedy",
          created_at: "Senior Marketing Designer",
          broadcast: "London",
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
          name: "Tatyana Fitzpatrick",
          created_at: "Regional Director",
          broadcast: "London",
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
          name: "Michael Silva",
          created_at: "Marketing Designer",
          broadcast: "London",
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
          name: "Paul Byrd",
          created_at: "Chief Financial broadcastr (CFO)",
          broadcast: "New York",
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
          name: "Gloria Little",
          created_at: "Systems Administrator",
          broadcast: "New York",
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
          name: "Bradley Greer",
          created_at: "Software Engineer",
          broadcast: "London",
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
          name: "Dai Rios",
          created_at: "Personnel Lead",
          broadcast: "Edinburgh",
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
          name: "Jenette Caldwell",
          created_at: "Development Lead",
          broadcast: "New York",
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
          name: "Yuri Berry",
          created_at: "Chief Marketing broadcastr (CMO)",
          broadcast: "New York",
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
          name: "Caesar Vance",
          created_at: "Pre-Sales Support",
          broadcast: "New York",
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
          name: "Doris Wilder",
          created_at: "Sales Assistant",
          broadcast: "Sidney",
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
          name: "Angelica Ramos",
          created_at: "Chief Executive broadcastr (CEO)",
          broadcast: "London",
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
          name: "Gavin Joyce",
          created_at: "Developer",
          broadcast: "Edinburgh",
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
          name: "Jennifer Chang",
          created_at: "Regional Director",
          broadcast: "Singapore",
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
          name: "Brenden Wagner",
          created_at: "Software Engineer",
          broadcast: "San Francisco",
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
          name: "Fiona Green",
          created_at: "Chief Operating broadcastr (COO)",
          broadcast: "San Francisco",
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
          name: "Shou Itou",
          created_at: "Regional Marketing",
          broadcast: "Tokyo",
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
          name: "Michelle House",
          created_at: "Integration Specialist",
          broadcast: "Sidney",
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
          name: "Suki Burks",
          created_at: "Developer",
          broadcast: "London",
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
          name: "Prescott Bartlett",
          created_at: "Technical Author",
          broadcast: "London",
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
          name: "Gavin Cortez",
          created_at: "Team Leader",
          broadcast: "San Francisco",
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
          name: "Martena Mccray",
          created_at: "Post-Sales support",
          broadcast: "Edinburgh",
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
          name: "Unity Butler",
          created_at: "Marketing Designer",
          broadcast: "San Francisco",
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
          name: "Howard Hatfield",
          created_at: "broadcast Manaddressr",
          broadcast: "San Francisco",
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
          name: "Hope Fuentes",
          created_at: "Secretary",
          broadcast: "San Francisco",
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
          name: "Vivian Harrell",
          created_at: "Financial Controller",
          broadcast: "San Francisco",
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
          name: "Timothy Mooney",
          created_at: "broadcast Manaddressr",
          broadcast: "London",
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
          name: "Jackson Bradshaw",
          created_at: "Director",
          broadcast: "New York",
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
          name: "Olivia Liang",
          created_at: "Support Engineer",
          broadcast: "Singapore",
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
          name: "Bruno Nash",
          created_at: "Software Engineer",
          broadcast: "London",
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
          name: "Sakura Yamamoto",
          created_at: "Support Engineer",
          broadcast: "Tokyo",
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
          name: "Thor Walton",
          created_at: "Developer",
          broadcast: "New York",
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
          name: "Finn Camacho",
          created_at: "Support Engineer",
          broadcast: "San Francisco",
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
          name: "Serge Baldwin",
          created_at: "Data Coordinator",
          broadcast: "Singapore",
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
          name: "Zenaida Frank",
          created_at: "Software Engineer",
          broadcast: "New York",
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
          name: "Zorita Serrano",
          created_at: "Software Engineer",
          broadcast: "San Francisco",
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
          name: "Jennifer Acosta",
          created_at: "Junior Javascript Developer",
          broadcast: "Edinburgh",
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
          name: "Cara Stevens",
          created_at: "Sales Assistant",
          broadcast: "New York",
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
          name: "Hermione Butler",
          created_at: "Regional Director",
          broadcast: "London",
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
          name: "Lael Greer",
          created_at: "Systems Administrator",
          broadcast: "London",
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
          name: "Jonas Alexander",
          created_at: "Developer",
          broadcast: "San Francisco",
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
          name: "Shad Decker",
          created_at: "Regional Director",
          broadcast: "Edinburgh",
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
          name: "Michael Bruce",
          created_at: "Javascript Developer",
          broadcast: "Singapore",
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
          name: "Donna Snider",
          created_at: "Customer Support",
          broadcast: "New York",
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
          style={{ backgroundColor: "#f7f7f7", padding: "100px 0 1px 0" }}
        >
          {/* name */}
          <MDBBox className="d-flex align-items-center mx-5 pb-3">
            <span
              className="text-left"
              style={{
                fontWeight: "600",
                color: "#192e35",
                fontSize: "28px",
              }}
            >
              Dashboard Staff
            </span>
          </MDBBox>
          {/* end name */}
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
export default DashboardStaff;
