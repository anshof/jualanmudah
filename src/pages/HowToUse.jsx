import React, { Component } from "react";

import { MDBBox, MDBContainer } from "mdbreact";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";

import "../css/style.css";
import {
  doLogOut,
  doRefershSignin,
  getUserBio,
} from "../stores/actions/userAction";
class HowToUse extends Component {
  state = {};

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    this.props.getUserBio();
  };
  render() {
    return (
      <MDBBox>
        <Navbar
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          style={{ position: "fixed" }}
          logout={() => this.props.doLogOut()}
          bio={this.props.bio}
        />
        <MDBBox
          style={{
            padding: "20px 0 1px 0",
          }}
        >
          <h3
            className="text-left ml-5 mb-4"
            style={{ fontWeight: "600", color: "#192e35" }}
          >
            Mulai dari sini
          </h3>
          <MDBContainer>
            <p
              style={{
                fontSize: "18px",
                color: "#1b2e35",
                textAlign: "left",
              }}
            >
              <ol>
                <li>
                  <p className="font-weight-bold">
                    Memasukkan daftar data pelanggan
                  </p>
                  <p>Pilih menu "Database" di sebelah kiri halaman.</p>
                  <p>
                    Download format database pada tombol "Download Form". Anda
                    akan mendapatkan file .csv dimana di dalamnya terdapat kolom
                    yang telah diberi nama. Data pelanggan yang dimasukkan harus
                    sesuai dengan format tersebut.
                  </p>
                  <p>
                    Setelah Anda memasukkan data pelanggan ke dalam file .csv,
                    unggah file tersebut dengan cara klik tombol "New Database".
                    Akan muncul halaman baru &#40;seperti halaman di bawah&#41;,
                    klik pada bagian bertuliskan "Drop CSV disini...", kemudian
                    klik tombol "Upload Database".
                  </p>
                  <MDBBox className="text-center">
                    <img
                      src={require("../images/csv.png")}
                      alt="dashboard"
                      className="w-50 mx-auto"
                    />
                  </MDBBox>
                </li>
                <br />
                <br />
                <li>
                  <p className="font-weight-bold">Membuat grup</p>
                  <p>Pilih tombol "Buat Grup" di sebelah kiri halaman.</p>
                  <p>
                    Jika Anda ingin membuat grup baru, centang pilihan pertama,
                    dan beri nama. Selanjutnya, jika ingin membuat grup dalam
                    grup pilih "grup yang sudah ada". Centang data pelanggan
                    disamping yang ingin dimasukkan ke dalam grup baru.
                  </p>
                  <p>
                    Pilihan "Semua kontak" dapat dipilih jika Anda ingin membuat
                    grup yang benar-benar baru.
                  </p>
                  <img
                    src={require("../images/new-segment.png")}
                    alt="dashboard"
                    className="w-100"
                  />
                </li>
                <br />
                <br />
                <li>
                  <p className="font-weight-bold">Membuat siaran baru</p>
                  <p>Pilih tombol "Buat Broadcast" di sebelah kiri halaman.</p>
                  <p>
                    Di halaman pertama pilih alamat email dan segment. Klik
                    Next. Masukkan email subject dan content email. Klik Next.
                    Jika Anda ingin mengirim saat itu juga pilih "Kirim
                    Sekarang".
                  </p>
                  <p>
                    Jika Anda ingin menjadwalkan pengiriman di lain waktu,
                    masukkan tanggal dan waktu &#40; masukkan juga AM atau PM di
                    akhir bagian waktu &#41;. Klik "Jadwalkan Pengiriman".
                  </p>
                  <p>
                    Jika Anda ingin menyimpannya sebagai draft, klik "Simpan
                    Sebagai Draft"
                  </p>
                  <img
                    src={require("../images/penerima.png")}
                    alt="dashboard"
                    className="w-100"
                  />
                </li>
              </ol>
            </p>
          </MDBContainer>
        </MDBBox>
      </MDBBox>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bio: state.userState.bio,
    username: state.userState.username,
    password: state.userState.password,
  };
};
const mapDispatchToProps = {
  doLogOut,
  doRefershSignin,
  getUserBio,
};
export default connect(mapStateToProps, mapDispatchToProps)(HowToUse);
