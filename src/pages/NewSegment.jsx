import React, { Component } from "react";
import {
  MDBDataTable,
  MDBBox,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdbreact";

import Navbar from "../components/Navbar";

class NewSegment extends Component {
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
          label: "Check",
          field: "check",
          sort: "asc",
          width: 150,
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
          color: "pink",
        },
        {
          label: "Gender",
          field: "gender",
          sort: "asc",
          width: 200,
        },
        {
          label: "Position",
          field: "position",
          sort: "asc",
          width: 270,
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
          name: "Tiger Nixon",
          gender: "System Architect",
          position: "Edinburgh",
        },
        {
          name: "Garrett Winters",
          gender: "Accountant",
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
          name: "Ashton Cox",
          gender: "Junior Technical Author",
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
          name: "Cedric Kelly",
          gender: "Senior Javascript Developer",
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
          name: "Airi Satou",
          gender: "Accountant",
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
          name: "Brielle Williamson",
          gender: "Integration Specialist",
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
          name: "Herrod Chandler",
          gender: "Sales Assistant",
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
          name: "Rhona Davidson",
          gender: "Integration Specialist",
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
          name: "Colleen Hurst",
          gender: "Javascript Developer",
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
          name: "Sonya Frost",
          gender: "Software Engineer",
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
          name: "Jena Gaines",
          gender: "position Mancheckr",
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
          name: "Quinn Flynn",
          gender: "Support Lead",
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
          name: "Charde Marshall",
          gender: "Regional Director",
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
          name: "Haley Kennedy",
          gender: "Senior Marketing Designer",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2012/12/18",
          company: "$313",
        },
        {
          name: "Tatyana Fitzpatrick",
          gender: "Regional Director",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/03/17",
          company: "$385",
        },
        {
          name: "Michael Silva",
          gender: "Marketing Designer",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2012/11/27",
          company: "$198",
        },
        {
          name: "Paul Byrd",
          gender: "Chief Financial positionr (CFO)",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/06/09",
          company: "$725",
        },
        {
          name: "Gloria Little",
          gender: "Systems Administrator",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2009/04/10",
          company: "$237",
        },
        {
          name: "Bradley Greer",
          gender: "Software Engineer",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2012/10/13",
          company: "$132",
        },
        {
          name: "Dai Rios",
          gender: "Personnel Lead",
          position: "Edinburgh",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2012/09/26",
          company: "$217",
        },
        {
          name: "Jenette Caldwell",
          gender: "Development Lead",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2011/09/03",
          company: "$345",
        },
        {
          name: "Yuri Berry",
          gender: "Chief Marketing positionr (CMO)",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2009/06/25",
          company: "$675",
        },
        {
          name: "Caesar Vance",
          gender: "Pre-Sales Support",
          position: "New York",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2011/12/12",
          company: "$106",
        },
        {
          name: "Doris Wilder",
          gender: "Sales Assistant",
          position: "Sidney",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/09/20",
          company: "$85",
        },
        {
          name: "Angelica Ramos",
          gender: "Chief Executive positionr (CEO)",
          position: "London",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2009/10/09",
          company: "$1",
        },
        {
          name: "Gavin Joyce",
          gender: "Developer",
          position: "Edinburgh",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/12/22",
          company: "$92",
        },
        {
          name: "Jennifer Chang",
          gender: "Regional Director",
          position: "Singapore",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/11/14",
          company: "$357",
        },
        {
          name: "Brenden Wagner",
          gender: "Software Engineer",
          position: "San Francisco",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2011/06/07",
          company: "$206",
        },
        {
          name: "Fiona Green",
          gender: "Chief Operating positionr (COO)",
          position: "San Francisco",
          check: <MDBInput type="checkbox" id="checkbox2" />,
          phone: "2010/03/11",
          company: "$850",
        },
        {
          name: "Shou Itou",
          gender: "Regional Marketing",
          position: "Tokyo",
          check: "20",
          phone: "2011/08/14",
          company: "$163",
        },
        {
          name: "Michelle House",
          gender: "Integration Specialist",
          position: "Sidney",
          check: "37",
          phone: "2011/06/02",
          company: "$95",
        },
        {
          name: "Suki Burks",
          gender: "Developer",
          position: "London",
          check: "53",
          phone: "2009/10/22",
          company: "$114",
        },
        {
          name: "Prescott Bartlett",
          gender: "Technical Author",
          position: "London",
          check: "27",
          phone: "2011/05/07",
          company: "$145",
        },
        {
          name: "Gavin Cortez",
          gender: "Team Leader",
          position: "San Francisco",
          check: "22",
          phone: "2008/10/26",
          company: "$235",
        },
        {
          name: "Martena Mccray",
          gender: "Post-Sales support",
          position: "Edinburgh",
          check: "46",
          phone: "2011/03/09",
          company: "$324",
        },
        {
          name: "Unity Butler",
          gender: "Marketing Designer",
          position: "San Francisco",
          check: "47",
          phone: "2009/12/09",
          company: "$85",
        },
        {
          name: "Howard Hatfield",
          gender: "position Mancheckr",
          position: "San Francisco",
          check: "51",
          phone: "2008/12/16",
          company: "$164",
        },
        {
          name: "Hope Fuentes",
          gender: "Secretary",
          position: "San Francisco",
          check: "41",
          phone: "2010/02/12",
          company: "$109",
        },
        {
          name: "Vivian Harrell",
          gender: "Financial Controller",
          position: "San Francisco",
          check: "62",
          phone: "2009/02/14",
          company: "$452",
        },
        {
          name: "Timothy Mooney",
          gender: "position Mancheckr",
          position: "London",
          check: "37",
          phone: "2008/12/11",
          company: "$136",
        },
        {
          name: "Jackson Bradshaw",
          gender: "Director",
          position: "New York",
          check: "65",
          phone: "2008/09/26",
          company: "$645",
        },
        {
          name: "Olivia Liang",
          gender: "Support Engineer",
          position: "Singapore",
          check: "64",
          phone: "2011/02/03",
          company: "$234",
        },
        {
          name: "Bruno Nash",
          gender: "Software Engineer",
          position: "London",
          check: "38",
          phone: "2011/05/03",
          company: "$163",
        },
        {
          name: "Sakura Yamamoto",
          gender: "Support Engineer",
          position: "Tokyo",
          check: "37",
          phone: "2009/08/19",
          company: "$139",
        },
        {
          name: "Thor Walton",
          gender: "Developer",
          position: "New York",
          check: "61",
          phone: "2013/08/11",
          company: "$98",
        },
        {
          name: "Finn Camacho",
          gender: "Support Engineer",
          position: "San Francisco",
          check: "47",
          phone: "2009/07/07",
          company: "$87",
        },
        {
          name: "Serge Baldwin",
          gender: "Data Coordinator",
          position: "Singapore",
          check: "64",
          phone: "2012/04/09",
          company: "$138",
        },
        {
          name: "Zenaida Frank",
          gender: "Software Engineer",
          position: "New York",
          check: "63",
          phone: "2010/01/04",
          company: "$125",
        },
        {
          name: "Zorita Serrano",
          gender: "Software Engineer",
          position: "San Francisco",
          check: "56",
          phone: "2012/06/01",
          company: "$115",
        },
        {
          name: "Jennifer Acosta",
          gender: "Junior Javascript Developer",
          position: "Edinburgh",
          check: "43",
          phone: "2013/02/01",
          company: "$75",
        },
        {
          name: "Cara Stevens",
          gender: "Sales Assistant",
          position: "New York",
          check: "46",
          phone: "2011/12/06",
          company: "$145",
        },
        {
          name: "Hermione Butler",
          gender: "Regional Director",
          position: "London",
          check: "47",
          phone: "2011/03/21",
          company: "$356",
        },
        {
          name: "Lael Greer",
          gender: "Systems Administrator",
          position: "London",
          check: "21",
          phone: "2009/02/27",
          company: "$103",
        },
        {
          name: "Jonas Alexander",
          gender: "Developer",
          position: "San Francisco",
          check: "30",
          phone: "2010/07/14",
          company: "$86",
        },
        {
          name: "Shad Decker",
          gender: "Regional Director",
          position: "Edinburgh",
          check: "51",
          phone: "2008/11/13",
          company: "$183",
        },
        {
          name: "Michael Bruce",
          gender: "Javascript Developer",
          position: "Singapore",
          check: "29",
          phone: "2011/06/27",
          company: "$183",
        },
        {
          name: "Donna Snider",
          gender: "Customer Support",
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
          style={{ gender: "fixed" }}
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
              Buat Grup Baru
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
                className="py-4"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                <MDBRow
                  className="mt-2"
                  style={{
                    margin: "0",
                  }}
                >
                  <MDBCol size="2">
                    <MDBBox
                      style={{
                        color: "#f14c59",
                      }}
                      className="ml-4 font-weight-bold"
                    >
                      1
                    </MDBBox>
                  </MDBCol>
                  <MDBCol size="10" className="ml-0">
                    <span style={{ fontWeight: "500" }}>
                      Apa nama grup ini?
                    </span>
                    <div className="input-group mb-3 mt-2">
                      <div className="input-group-prepend"></div>
                      <input
                        type="text"
                        className="form-control"
                        //   placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow
                  className="pt-2"
                  style={{
                    margin: "0",
                    backgroundColor: "white",
                    borderRadius: "20px",
                  }}
                >
                  <MDBCol size="2">
                    <MDBBox
                      style={{
                        color: "#f14c59",
                      }}
                      className="ml-4 font-weight-bold"
                    >
                      2
                    </MDBBox>
                  </MDBCol>
                  <MDBCol size="10" className="ml-0">
                    <span style={{ fontWeight: "500" }}>
                      Pilih grup pelanggan yang anda inginkan.
                    </span>
                    <br />
                    <div className="form-group form-check mt-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Semua kontak
                      </label>
                    </div>
                    <div className="form-group form-check mt-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Grup kontak yang sudah ada
                      </label>
                    </div>
                    <select class="browser-default custom-select">
                      <option selected>Grup kontak</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </MDBCol>
                </MDBRow>
                <MDBBox className="text-center">
                  <MDBBtn
                    color="transparent"
                    className="mt-4 text-capitalize"
                    style={{
                      boxShadow: "none",
                      color: "white",
                      backgroundColor: "#f14c59",
                      borderRadius: "40px",
                    }}
                  >
                    Simpan grup kontak
                  </MDBBtn>
                </MDBBox>
              </MDBBox>
            </MDBCol>
            {/* end create new segment */}
            {/* table */}
            <MDBCol size="6">
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

export default NewSegment;
