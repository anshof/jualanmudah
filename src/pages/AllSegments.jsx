import React, { Component } from "react";
import { MDBDataTable, MDBBox, MDBRow, MDBCol, MDBModal } from "mdbreact";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";
import DownloadFormDatabase from "../components/DownloadFormModal";
import NewDatabase from "../components/NewDatabaseModal";

class AllSegments extends Component {
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
          label: "Segment",
          field: "segment",
          sort: "asc",
          width: 150,
          color: "pink",
        },
        {
          label: "Jumlah customer",
          field: "jumlahCustomer",
          sort: "asc",
          width: 200,
        },
        {
          label: "Created at",
          field: "created_at",
          sort: "asc",
          width: 270,
        },
      ],
      rows: [
        {
          segment: "Woman",
          jumlahCustomer: "10",
          created_at: "2011/04/25",
          address: "61",
          phone: "2011/04/25",
          company: "$320",
        },
        {
          segment: "Man",
          jumlahCustomer: "12",
          created_at: "2011/04/25",
          address: "63",
          phone: "2011/07/25",
          company: "$170",
        },
        {
          segment: "Ashton Cox",
          jumlahCustomer: "Junior Technical Author",
          created_at: "San Francisco",
          address: "66",
          phone: "2009/01/12",
          company: "$86",
        },
        {
          segment: "Cedric Kelly",
          jumlahCustomer: "Senior Javascript Developer",
          created_at: "Edinburgh",
          address: "22",
          phone: "2012/03/29",
          company: "$433",
        },
        {
          segment: "Airi Satou",
          jumlahCustomer: "Accountant",
          created_at: "Tokyo",
          address: "33",
          phone: "2008/11/28",
          company: "$162",
        },
        {
          segment: "Brielle Williamson",
          jumlahCustomer: "Integration Specialist",
          created_at: "New York",
          address: "61",
          phone: "2012/12/02",
          company: "$372",
        },
        {
          segment: "Herrod Chandler",
          jumlahCustomer: "Sales Assistant",
          created_at: "San Francisco",
          address: "59",
          phone: "2012/08/06",
          company: "$137",
        },
        {
          segment: "Rhona Davidson",
          jumlahCustomer: "Integration Specialist",
          created_at: "Tokyo",
          address: "55",
          phone: "2010/10/14",
          company: "$327",
        },
        {
          segment: "Colleen Hurst",
          jumlahCustomer: "Javascript Developer",
          created_at: "San Francisco",
          address: "39",
          phone: "2009/09/15",
          company: "$205",
        },
        {
          segment: "Sonya Frost",
          jumlahCustomer: "Software Engineer",
          created_at: "Edinburgh",
          address: "23",
          phone: "2008/12/13",
          company: "$103",
        },
        {
          segment: "Jena Gaines",
          jumlahCustomer: "created_at Manaddressr",
          created_at: "London",
          address: "30",
          phone: "2008/12/19",
          company: "$90",
        },
        {
          segment: "Quinn Flynn",
          jumlahCustomer: "Support Lead",
          created_at: "Edinburgh",
          address: "22",
          phone: "2013/03/03",
          company: "$342",
        },
        {
          segment: "Charde Marshall",
          jumlahCustomer: "Regional Director",
          created_at: "San Francisco",
          address: "36",
          phone: "2008/10/16",
          company: "$470",
        },
        {
          segment: "Haley Kennedy",
          jumlahCustomer: "Senior Marketing Designer",
          created_at: "London",
          address: "43",
          phone: "2012/12/18",
          company: "$313",
        },
        {
          segment: "Tatyana Fitzpatrick",
          jumlahCustomer: "Regional Director",
          created_at: "London",
          address: "19",
          phone: "2010/03/17",
          company: "$385",
        },
        {
          segment: "Michael Silva",
          jumlahCustomer: "Marketing Designer",
          created_at: "London",
          address: "66",
          phone: "2012/11/27",
          company: "$198",
        },
        {
          segment: "Paul Byrd",
          jumlahCustomer: "Chief Financial bodr (CFO)",
          created_at: "New York",
          address: "64",
          phone: "2010/06/09",
          company: "$725",
        },
        {
          segment: "Gloria Little",
          jumlahCustomer: "Systems Administrator",
          created_at: "New York",
          address: "59",
          phone: "2009/04/10",
          company: "$237",
        },
        {
          segment: "Bradley Greer",
          jumlahCustomer: "Software Engineer",
          created_at: "London",
          address: "41",
          phone: "2012/10/13",
          company: "$132",
        },
        {
          segment: "Dai Rios",
          jumlahCustomer: "Personnel Lead",
          created_at: "Edinburgh",
          address: "35",
          phone: "2012/09/26",
          company: "$217",
        },
        {
          segment: "Jenette Caldwell",
          jumlahCustomer: "Development Lead",
          created_at: "New York",
          address: "30",
          phone: "2011/09/03",
          company: "$345",
        },
        {
          segment: "Yuri Berry",
          jumlahCustomer: "Chief Marketing bodr (CMO)",
          created_at: "New York",
          address: "40",
          phone: "2009/06/25",
          company: "$675",
        },
        {
          segment: "Caesar Vance",
          jumlahCustomer: "Pre-Sales Support",
          created_at: "New York",
          address: "21",
          phone: "2011/12/12",
          company: "$106",
        },
        {
          segment: "Doris Wilder",
          jumlahCustomer: "Sales Assistant",
          created_at: "Sidney",
          address: "23",
          phone: "2010/09/20",
          company: "$85",
        },
        {
          segment: "Angelica Ramos",
          jumlahCustomer: "Chief Executive bodr (CEO)",
          created_at: "London",
          address: "47",
          phone: "2009/10/09",
          company: "$1",
        },
        {
          segment: "Gavin Joyce",
          jumlahCustomer: "Developer",
          created_at: "Edinburgh",
          address: "42",
          phone: "2010/12/22",
          company: "$92",
        },
        {
          segment: "Jennifer Chang",
          jumlahCustomer: "Regional Director",
          created_at: "Singapore",
          address: "28",
          phone: "2010/11/14",
          company: "$357",
        },
        {
          segment: "Brenden Wagner",
          jumlahCustomer: "Software Engineer",
          created_at: "San Francisco",
          address: "28",
          phone: "2011/06/07",
          company: "$206",
        },
        {
          segment: "Fiona Green",
          jumlahCustomer: "Chief Operating bodr (COO)",
          created_at: "San Francisco",
          address: "48",
          phone: "2010/03/11",
          company: "$850",
        },
        {
          segment: "Shou Itou",
          jumlahCustomer: "Regional Marketing",
          created_at: "Tokyo",
          address: "20",
          phone: "2011/08/14",
          company: "$163",
        },
        {
          segment: "Michelle House",
          jumlahCustomer: "Integration Specialist",
          created_at: "Sidney",
          address: "37",
          phone: "2011/06/02",
          company: "$95",
        },
        {
          segment: "Suki Burks",
          jumlahCustomer: "Developer",
          created_at: "London",
          address: "53",
          phone: "2009/10/22",
          company: "$114",
        },
        {
          segment: "Prescott Bartlett",
          jumlahCustomer: "Technical Author",
          created_at: "London",
          address: "27",
          phone: "2011/05/07",
          company: "$145",
        },
        {
          segment: "Gavin Cortez",
          jumlahCustomer: "Team Leader",
          created_at: "San Francisco",
          address: "22",
          phone: "2008/10/26",
          company: "$235",
        },
        {
          segment: "Martena Mccray",
          jumlahCustomer: "Post-Sales support",
          created_at: "Edinburgh",
          address: "46",
          phone: "2011/03/09",
          company: "$324",
        },
        {
          segment: "Unity Butler",
          jumlahCustomer: "Marketing Designer",
          created_at: "San Francisco",
          address: "47",
          phone: "2009/12/09",
          company: "$85",
        },
        {
          segment: "Howard Hatfield",
          jumlahCustomer: "created_at Manaddressr",
          created_at: "San Francisco",
          address: "51",
          phone: "2008/12/16",
          company: "$164",
        },
        {
          segment: "Hope Fuentes",
          jumlahCustomer: "Secretary",
          created_at: "San Francisco",
          address: "41",
          phone: "2010/02/12",
          company: "$109",
        },
        {
          segment: "Vivian Harrell",
          jumlahCustomer: "Financial Controller",
          created_at: "San Francisco",
          address: "62",
          phone: "2009/02/14",
          company: "$452",
        },
        {
          segment: "Timothy Mooney",
          jumlahCustomer: "created_at Manaddressr",
          created_at: "London",
          address: "37",
          phone: "2008/12/11",
          company: "$136",
        },
        {
          segment: "Jackson Bradshaw",
          jumlahCustomer: "Director",
          created_at: "New York",
          address: "65",
          phone: "2008/09/26",
          company: "$645",
        },
        {
          segment: "Olivia Liang",
          jumlahCustomer: "Support Engineer",
          created_at: "Singapore",
          address: "64",
          phone: "2011/02/03",
          company: "$234",
        },
        {
          segment: "Bruno Nash",
          jumlahCustomer: "Software Engineer",
          created_at: "London",
          address: "38",
          phone: "2011/05/03",
          company: "$163",
        },
        {
          segment: "Sakura Yamamoto",
          jumlahCustomer: "Support Engineer",
          created_at: "Tokyo",
          address: "37",
          phone: "2009/08/19",
          company: "$139",
        },
        {
          segment: "Thor Walton",
          jumlahCustomer: "Developer",
          created_at: "New York",
          address: "61",
          phone: "2013/08/11",
          company: "$98",
        },
        {
          segment: "Finn Camacho",
          jumlahCustomer: "Support Engineer",
          created_at: "San Francisco",
          address: "47",
          phone: "2009/07/07",
          company: "$87",
        },
        {
          segment: "Serge Baldwin",
          jumlahCustomer: "Data Coordinator",
          created_at: "Singapore",
          address: "64",
          phone: "2012/04/09",
          company: "$138",
        },
        {
          segment: "Zenaida Frank",
          jumlahCustomer: "Software Engineer",
          created_at: "New York",
          address: "63",
          phone: "2010/01/04",
          company: "$125",
        },
        {
          segment: "Zorita Serrano",
          jumlahCustomer: "Software Engineer",
          created_at: "San Francisco",
          address: "56",
          phone: "2012/06/01",
          company: "$115",
        },
        {
          segment: "Jennifer Acosta",
          jumlahCustomer: "Junior Javascript Developer",
          created_at: "Edinburgh",
          address: "43",
          phone: "2013/02/01",
          company: "$75",
        },
        {
          segment: "Cara Stevens",
          jumlahCustomer: "Sales Assistant",
          created_at: "New York",
          address: "46",
          phone: "2011/12/06",
          company: "$145",
        },
        {
          segment: "Hermione Butler",
          jumlahCustomer: "Regional Director",
          created_at: "London",
          address: "47",
          phone: "2011/03/21",
          company: "$356",
        },
        {
          segment: "Lael Greer",
          jumlahCustomer: "Systems Administrator",
          created_at: "London",
          address: "21",
          phone: "2009/02/27",
          company: "$103",
        },
        {
          segment: "Jonas Alexander",
          jumlahCustomer: "Developer",
          created_at: "San Francisco",
          address: "30",
          phone: "2010/07/14",
          company: "$86",
        },
        {
          segment: "Shad Decker",
          jumlahCustomer: "Regional Director",
          created_at: "Edinburgh",
          address: "51",
          phone: "2008/11/13",
          company: "$183",
        },
        {
          segment: "Michael Bruce",
          jumlahCustomer: "Javascript Developer",
          created_at: "Singapore",
          address: "29",
          phone: "2011/06/27",
          company: "$183",
        },
        {
          segment: "Donna Snider",
          jumlahCustomer: "Customer Support",
          created_at: "New York",
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
          style={{ jumlahCustomer: "fixed" }}
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
              All Segments
            </span>
            <MDBBox className="d-flex">
              <button
                color="transparent"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #f14c59",
                  color: "#f14c59",
                  boxShadow: "none",
                  borderRadius: "40px",
                  fontSize: "16px",
                  height: "40px",
                }}
                className="text-capitalize px-3"
                onClick={this.toggle("NewDatabase")}
              >
                <i class="fas fa-plus-circle mr-1"></i> New Database
              </button>
              <MDBModal
                isOpen={this.state.modalNewDatabase}
                toggle={this.toggle("NewDatabase")}
                size="md"
              >
                <NewDatabase toggle={this.toggle} />
              </MDBModal>
              <button
                color="transparent"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #f14c59",
                  color: "#f14c59",
                  boxShadow: "none",
                  borderRadius: "40px",
                  fontSize: "16px",
                  height: "40px",
                }}
                className="text-capitalize px-3 mx-3"
                onClick={this.toggle("FormDatabase")}
              >
                <i class="fas fa-download mr-1"></i> Download Form
              </button>
              <MDBModal
                isOpen={this.state.modalFormDatabase}
                toggle={this.toggle("FormDatabase")}
                size="md"
              >
                <DownloadFormDatabase toggle={this.toggle} />
              </MDBModal>
            </MDBBox>
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

export default AllSegments;
