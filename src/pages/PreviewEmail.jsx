import React, { Component } from "react";
import { MDBDataTable, MDBBox, MDBRow, MDBCol, MDBInput } from "mdbreact";

import Navbar from "../components/Navbar";

class PreviewEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      modalFormDatabase: false,
      modalNewDatabase: false,
    };
    this.toggle = this.toggle.bind(this);
    this.data = {
      columns: [
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 150,
          color: "pink",
        },
        {
          label: "Open",
          field: "open",
          sort: "asc",
          width: 200,
        },
      ],
      rows: [
        {
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
          email: "Tiger Nixon",
          open: <i class="fas fa-check"></i>,
          position: "Edinburgh",
        },
        {
          email: "Garrett Winters",
          open: <i class="fas fa-times"></i>,
          position: "Tokyo",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Ashton Cox",
          open: "Junior Technical Author",
          position: "San Francisco",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Cedric Kelly",
          open: "Senior Javascript Developer",
          position: "Edinburgh",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Airi Satou",
          open: "Accountant",
          position: "Tokyo",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Brielle Williamson",
          open: "Integration Specialist",
          position: "New York",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Herrod Chandler",
          open: "Sales Assistant",
          position: "San Francisco",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Rhona Davidson",
          open: "Integration Specialist",
          position: "Tokyo",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Colleen Hurst",
          open: "Javascript Developer",
          position: "San Francisco",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Sonya Frost",
          open: "Software Engineer",
          position: "Edinburgh",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Jena Gaines",
          open: "position Mancheckr",
          position: "London",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Quinn Flynn",
          open: "Support Lead",
          position: "Edinburgh",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Charde Marshall",
          open: "Regional Director",
          position: "San Francisco",
          check: (
            <form>
              <label class="checkbox-inline">
                <input type="checkbox" value="" />
              </label>
            </form>
          ),
        },
        {
          email: "Haley Kennedy",
          open: "Senior Marketing Designer",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2012/12/18",
          company: "$313",
        },
        {
          email: "Tatyana Fitzpatrick",
          open: "Regional Director",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/03/17",
          company: "$385",
        },
        {
          email: "Michael Silva",
          open: "Marketing Designer",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2012/11/27",
          company: "$198",
        },
        {
          email: "Paul Byrd",
          open: "Chief Financial positionr (CFO)",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/06/09",
          company: "$725",
        },
        {
          email: "Gloria Little",
          open: "Systems Administrator",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2009/04/10",
          company: "$237",
        },
        {
          email: "Bradley Greer",
          open: "Software Engineer",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2012/10/13",
          company: "$132",
        },
        {
          email: "Dai Rios",
          open: "Personnel Lead",
          position: "Edinburgh",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2012/09/26",
          company: "$217",
        },
        {
          email: "Jenette Caldwell",
          open: "Development Lead",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2011/09/03",
          company: "$345",
        },
        {
          email: "Yuri Berry",
          open: "Chief Marketing positionr (CMO)",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2009/06/25",
          company: "$675",
        },
        {
          email: "Caesar Vance",
          open: "Pre-Sales Support",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2011/12/12",
          company: "$106",
        },
        {
          email: "Doris Wilder",
          open: "Sales Assistant",
          position: "Sidney",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/09/20",
          company: "$85",
        },
        {
          email: "Angelica Ramos",
          open: "Chief Executive positionr (CEO)",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2009/10/09",
          company: "$1",
        },
        {
          email: "Gavin Joyce",
          open: "Developer",
          position: "Edinburgh",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/12/22",
          company: "$92",
        },
        {
          email: "Jennifer Chang",
          open: "Regional Director",
          position: "Singapore",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/11/14",
          company: "$357",
        },
        {
          email: "Brenden Wagner",
          open: "Software Engineer",
          position: "San Francisco",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2011/06/07",
          company: "$206",
        },
        {
          email: "Fiona Green",
          open: "Chief Operating positionr (COO)",
          position: "San Francisco",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/03/11",
          company: "$850",
        },
        {
          email: "Shou Itou",
          open: "Regional Marketing",
          position: "Tokyo",
          check: "20",
          phone: "2011/08/14",
          company: "$163",
        },
        {
          email: "Michelle House",
          open: "Integration Specialist",
          position: "Sidney",
          check: <i class="fas fa-times"></i>,
          phone: "2011/06/02",
          company: "$95",
        },
        {
          email: "Suki Burks",
          open: "Developer",
          position: "London",
          check: <i class="fas fa-times"></i>,
          phone: "2009/10/22",
          company: "$114",
        },
        {
          email: "Prescott Bartlett",
          open: "Technical Author",
          position: "London",
          check: <i class="fas fa-times"></i>,
          phone: "2011/05/07",
          company: "$145",
        },
        {
          email: "Gavin Cortez",
          open: "Team Leader",
          position: "San Francisco",
          check: "22",
          phone: "2008/10/26",
          company: "$235",
        },
        {
          email: "Martena Mccray",
          open: "Post-Sales support",
          position: "Edinburgh",
          check: "46",
          phone: "2011/03/09",
          company: "$324",
        },
        {
          email: "Unity Butler",
          open: "Marketing Designer",
          position: "San Francisco",
          check: "47",
          phone: "2009/12/09",
          company: "$85",
        },
        {
          email: "Howard Hatfield",
          open: "position Mancheckr",
          position: "San Francisco",
          check: "51",
          phone: "2008/12/16",
          company: "$164",
        },
        {
          email: "Hope Fuentes",
          open: "Secretary",
          position: "San Francisco",
          check: "41",
          phone: "2010/02/12",
          company: "$109",
        },
        {
          email: "Vivian Harrell",
          open: "Financial Controller",
          position: "San Francisco",
          check: "62",
          phone: "2009/02/14",
          company: "$452",
        },
        {
          email: "Timothy Mooney",
          open: "position Mancheckr",
          position: "London",
          check: "37",
          phone: "2008/12/11",
          company: "$136",
        },
        {
          email: "Jackson Bradshaw",
          open: "Director",
          position: "New York",
          check: "65",
          phone: "2008/09/26",
          company: "$645",
        },
        {
          email: "Olivia Liang",
          open: "Support Engineer",
          position: "Singapore",
          check: "64",
          phone: "2011/02/03",
          company: "$234",
        },
        {
          email: "Bruno Nash",
          open: "Software Engineer",
          position: "London",
          check: "38",
          phone: "2011/05/03",
          company: "$163",
        },
        {
          email: "Sakura Yamamoto",
          open: "Support Engineer",
          position: "Tokyo",
          check: "37",
          phone: "2009/08/19",
          company: "$139",
        },
        {
          email: "Thor Walton",
          open: "Developer",
          position: "New York",
          check: "61",
          phone: "2013/08/11",
          company: "$98",
        },
        {
          email: "Finn Camacho",
          open: "Support Engineer",
          position: "San Francisco",
          check: "47",
          phone: "2009/07/07",
          company: "$87",
        },
        {
          email: "Serge Baldwin",
          open: "Data Coordinator",
          position: "Singapore",
          check: "64",
          phone: "2012/04/09",
          company: "$138",
        },
        {
          email: "Zenaida Frank",
          open: "Software Engineer",
          position: "New York",
          check: "63",
          phone: "2010/01/04",
          company: "$125",
        },
        {
          email: "Zorita Serrano",
          open: "Software Engineer",
          position: "San Francisco",
          check: "56",
          phone: "2012/06/01",
          company: "$115",
        },
        {
          email: "Jennifer Acosta",
          open: "Junior Javascript Developer",
          position: "Edinburgh",
          check: "43",
          phone: "2013/02/01",
          company: "$75",
        },
        {
          email: "Cara Stevens",
          open: "Sales Assistant",
          position: "New York",
          check: "46",
          phone: "2011/12/06",
          company: "$145",
        },
        {
          email: "Hermione Butler",
          open: "Regional Director",
          position: "London",
          check: "47",
          phone: "2011/03/21",
          company: "$356",
        },
        {
          email: "Lael Greer",
          open: "Systems Administrator",
          position: "London",
          check: "21",
          phone: "2009/02/27",
          company: "$103",
        },
        {
          email: "Jonas Alexander",
          open: "Developer",
          position: "San Francisco",
          check: "30",
          phone: "2010/07/14",
          company: "$86",
        },
        {
          email: "Shad Decker",
          open: "Regional Director",
          position: "Edinburgh",
          check: "51",
          phone: "2008/11/13",
          company: "$183",
        },
        {
          email: "Michael Bruce",
          open: "Javascript Developer",
          position: "Singapore",
          check: "29",
          phone: "2011/06/27",
          company: "$183",
        },
        {
          email: "Donna Snider",
          open: "Customer Support",
          position: "New York",
          check: "27",
          phone: "2011/01/25",
          company: "$112",
        },
      ],
    };
  }
  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
  };
  render() {
    return (
      <MDBBox style={{ backgroundColor: "#f7f7f7" }}>
        <Navbar
          isLogin={this.state.isLogin}
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          style={{ open: "fixed" }}
        />
        <MDBBox
          style={{
            padding: "100px 0 1px 0",
          }}
        >
          {/* judul */}
          <MDBBox className="d-flex justify-content-between align-items-center mx-5 pb-3">
            <span
              className="text-left"
              style={{
                fontWeight: "600",
                color: "#192e35",
                fontSize: "28px",
              }}
            >
              Nama Broadcast
            </span>
          </MDBBox>
          {/* tabel */}
          <MDBRow
            style={{
              margin: "20px",
            }}
          >
            {/* create new segment */}
            <MDBCol size="6" className="text-left">
              <MDBBox
                className="py-4 pl-3"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                isi email
              </MDBBox>
            </MDBCol>
            {/* end create new segment */}
            {/* table */}
            <MDBCol size="6">
              <p style={{ fontWeight: "500" }}>nama segment</p>
              <MDBDataTable
                hover
                btn
                fixed
                data={this.data}
                style={{
                  backgroundColor: "white",
                }}
              />
            </MDBCol>
            {/* end table */}
          </MDBRow>
        </MDBBox>
      </MDBBox>
    );
  }
}

export default PreviewEmail;
