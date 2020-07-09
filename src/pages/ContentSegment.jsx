import React, { Component } from "react";
import { MDBDataTable, MDBBox, MDBRow, MDBCol } from "mdbreact";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";

class ContentSegment extends Component {
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
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
          color: "pink",
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 200,
        },
        {
          label: "BOD",
          field: "bod",
          sort: "asc",
          width: 270,
        },
        {
          label: "Address",
          field: "address",
          sort: "asc",
          width: 100,
        },
        {
          label: "Phone",
          field: "phone",
          sort: "asc",
          width: 150,
        },
        {
          label: "Company",
          field: "company",
          sort: "asc",
          width: 100,
        },
      ],
      rows: [
        {
          name: "Tiger Nixon",
          email: "System Architect",
          bod: "Edinburgh",
          address: "61",
          phone: "2011/04/25",
          company: "$320",
        },
        {
          name: "Garrett Winters",
          email: "Accountant",
          bod: "Tokyo",
          address: "63",
          phone: "2011/07/25",
          company: "$170",
        },
        {
          name: "Ashton Cox",
          email: "Junior Technical Author",
          bod: "San Francisco",
          address: "66",
          phone: "2009/01/12",
          company: "$86",
        },
        {
          name: "Cedric Kelly",
          email: "Senior Javascript Developer",
          bod: "Edinburgh",
          address: "22",
          phone: "2012/03/29",
          company: "$433",
        },
        {
          name: "Airi Satou",
          email: "Accountant",
          bod: "Tokyo",
          address: "33",
          phone: "2008/11/28",
          company: "$162",
        },
        {
          name: "Brielle Williamson",
          email: "Integration Specialist",
          bod: "New York",
          address: "61",
          phone: "2012/12/02",
          company: "$372",
        },
        {
          name: "Herrod Chandler",
          email: "Sales Assistant",
          bod: "San Francisco",
          address: "59",
          phone: "2012/08/06",
          company: "$137",
        },
        {
          name: "Rhona Davidson",
          email: "Integration Specialist",
          bod: "Tokyo",
          address: "55",
          phone: "2010/10/14",
          company: "$327",
        },
        {
          name: "Colleen Hurst",
          email: "Javascript Developer",
          bod: "San Francisco",
          address: "39",
          phone: "2009/09/15",
          company: "$205",
        },
        {
          name: "Sonya Frost",
          email: "Software Engineer",
          bod: "Edinburgh",
          address: "23",
          phone: "2008/12/13",
          company: "$103",
        },
        {
          name: "Jena Gaines",
          email: "bod Manaddressr",
          bod: "London",
          address: "30",
          phone: "2008/12/19",
          company: "$90",
        },
        {
          name: "Quinn Flynn",
          email: "Support Lead",
          bod: "Edinburgh",
          address: "22",
          phone: "2013/03/03",
          company: "$342",
        },
        {
          name: "Charde Marshall",
          email: "Regional Director",
          bod: "San Francisco",
          address: "36",
          phone: "2008/10/16",
          company: "$470",
        },
        {
          name: "Haley Kennedy",
          email: "Senior Marketing Designer",
          bod: "London",
          address: "43",
          phone: "2012/12/18",
          company: "$313",
        },
        {
          name: "Tatyana Fitzpatrick",
          email: "Regional Director",
          bod: "London",
          address: "19",
          phone: "2010/03/17",
          company: "$385",
        },
        {
          name: "Michael Silva",
          email: "Marketing Designer",
          bod: "London",
          address: "66",
          phone: "2012/11/27",
          company: "$198",
        },
        {
          name: "Paul Byrd",
          email: "Chief Financial bodr (CFO)",
          bod: "New York",
          address: "64",
          phone: "2010/06/09",
          company: "$725",
        },
        {
          name: "Gloria Little",
          email: "Systems Administrator",
          bod: "New York",
          address: "59",
          phone: "2009/04/10",
          company: "$237",
        },
        {
          name: "Bradley Greer",
          email: "Software Engineer",
          bod: "London",
          address: "41",
          phone: "2012/10/13",
          company: "$132",
        },
        {
          name: "Dai Rios",
          email: "Personnel Lead",
          bod: "Edinburgh",
          address: "35",
          phone: "2012/09/26",
          company: "$217",
        },
        {
          name: "Jenette Caldwell",
          email: "Development Lead",
          bod: "New York",
          address: "30",
          phone: "2011/09/03",
          company: "$345",
        },
        {
          name: "Yuri Berry",
          email: "Chief Marketing bodr (CMO)",
          bod: "New York",
          address: "40",
          phone: "2009/06/25",
          company: "$675",
        },
        {
          name: "Caesar Vance",
          email: "Pre-Sales Support",
          bod: "New York",
          address: "21",
          phone: "2011/12/12",
          company: "$106",
        },
        {
          name: "Doris Wilder",
          email: "Sales Assistant",
          bod: "Sidney",
          address: "23",
          phone: "2010/09/20",
          company: "$85",
        },
        {
          name: "Angelica Ramos",
          email: "Chief Executive bodr (CEO)",
          bod: "London",
          address: "47",
          phone: "2009/10/09",
          company: "$1",
        },
        {
          name: "Gavin Joyce",
          email: "Developer",
          bod: "Edinburgh",
          address: "42",
          phone: "2010/12/22",
          company: "$92",
        },
        {
          name: "Jennifer Chang",
          email: "Regional Director",
          bod: "Singapore",
          address: "28",
          phone: "2010/11/14",
          company: "$357",
        },
        {
          name: "Brenden Wagner",
          email: "Software Engineer",
          bod: "San Francisco",
          address: "28",
          phone: "2011/06/07",
          company: "$206",
        },
        {
          name: "Fiona Green",
          email: "Chief Operating bodr (COO)",
          bod: "San Francisco",
          address: "48",
          phone: "2010/03/11",
          company: "$850",
        },
        {
          name: "Shou Itou",
          email: "Regional Marketing",
          bod: "Tokyo",
          address: "20",
          phone: "2011/08/14",
          company: "$163",
        },
        {
          name: "Michelle House",
          email: "Integration Specialist",
          bod: "Sidney",
          address: "37",
          phone: "2011/06/02",
          company: "$95",
        },
        {
          name: "Suki Burks",
          email: "Developer",
          bod: "London",
          address: "53",
          phone: "2009/10/22",
          company: "$114",
        },
        {
          name: "Prescott Bartlett",
          email: "Technical Author",
          bod: "London",
          address: "27",
          phone: "2011/05/07",
          company: "$145",
        },
        {
          name: "Gavin Cortez",
          email: "Team Leader",
          bod: "San Francisco",
          address: "22",
          phone: "2008/10/26",
          company: "$235",
        },
        {
          name: "Martena Mccray",
          email: "Post-Sales support",
          bod: "Edinburgh",
          address: "46",
          phone: "2011/03/09",
          company: "$324",
        },
        {
          name: "Unity Butler",
          email: "Marketing Designer",
          bod: "San Francisco",
          address: "47",
          phone: "2009/12/09",
          company: "$85",
        },
        {
          name: "Howard Hatfield",
          email: "bod Manaddressr",
          bod: "San Francisco",
          address: "51",
          phone: "2008/12/16",
          company: "$164",
        },
        {
          name: "Hope Fuentes",
          email: "Secretary",
          bod: "San Francisco",
          address: "41",
          phone: "2010/02/12",
          company: "$109",
        },
        {
          name: "Vivian Harrell",
          email: "Financial Controller",
          bod: "San Francisco",
          address: "62",
          phone: "2009/02/14",
          company: "$452",
        },
        {
          name: "Timothy Mooney",
          email: "bod Manaddressr",
          bod: "London",
          address: "37",
          phone: "2008/12/11",
          company: "$136",
        },
        {
          name: "Jackson Bradshaw",
          email: "Director",
          bod: "New York",
          address: "65",
          phone: "2008/09/26",
          company: "$645",
        },
        {
          name: "Olivia Liang",
          email: "Support Engineer",
          bod: "Singapore",
          address: "64",
          phone: "2011/02/03",
          company: "$234",
        },
        {
          name: "Bruno Nash",
          email: "Software Engineer",
          bod: "London",
          address: "38",
          phone: "2011/05/03",
          company: "$163",
        },
        {
          name: "Sakura Yamamoto",
          email: "Support Engineer",
          bod: "Tokyo",
          address: "37",
          phone: "2009/08/19",
          company: "$139",
        },
        {
          name: "Thor Walton",
          email: "Developer",
          bod: "New York",
          address: "61",
          phone: "2013/08/11",
          company: "$98",
        },
        {
          name: "Finn Camacho",
          email: "Support Engineer",
          bod: "San Francisco",
          address: "47",
          phone: "2009/07/07",
          company: "$87",
        },
        {
          name: "Serge Baldwin",
          email: "Data Coordinator",
          bod: "Singapore",
          address: "64",
          phone: "2012/04/09",
          company: "$138",
        },
        {
          name: "Zenaida Frank",
          email: "Software Engineer",
          bod: "New York",
          address: "63",
          phone: "2010/01/04",
          company: "$125",
        },
        {
          name: "Zorita Serrano",
          email: "Software Engineer",
          bod: "San Francisco",
          address: "56",
          phone: "2012/06/01",
          company: "$115",
        },
        {
          name: "Jennifer Acosta",
          email: "Junior Javascript Developer",
          bod: "Edinburgh",
          address: "43",
          phone: "2013/02/01",
          company: "$75",
        },
        {
          name: "Cara Stevens",
          email: "Sales Assistant",
          bod: "New York",
          address: "46",
          phone: "2011/12/06",
          company: "$145",
        },
        {
          name: "Hermione Butler",
          email: "Regional Director",
          bod: "London",
          address: "47",
          phone: "2011/03/21",
          company: "$356",
        },
        {
          name: "Lael Greer",
          email: "Systems Administrator",
          bod: "London",
          address: "21",
          phone: "2009/02/27",
          company: "$103",
        },
        {
          name: "Jonas Alexander",
          email: "Developer",
          bod: "San Francisco",
          address: "30",
          phone: "2010/07/14",
          company: "$86",
        },
        {
          name: "Shad Decker",
          email: "Regional Director",
          bod: "Edinburgh",
          address: "51",
          phone: "2008/11/13",
          company: "$183",
        },
        {
          name: "Michael Bruce",
          email: "Javascript Developer",
          bod: "Singapore",
          address: "29",
          phone: "2011/06/27",
          company: "$183",
        },
        {
          name: "Donna Snider",
          email: "Customer Support",
          bod: "New York",
          address: "27",
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
          style={{ email: "fixed" }}
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
              Woman
            </span>
          </MDBBox>
          {/* tabel */}
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
        </MDBBox>
      </MDBBox>
    );
  }
}

export default ContentSegment;
