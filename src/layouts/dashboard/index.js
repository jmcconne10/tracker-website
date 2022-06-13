/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";

//
import QueryTracks from "js/QueryTracks";
//import CompleteTrack from "js/CompleteTrack;"

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={1}>

          <Grid xs={8} md={8} lg={12}>
            <QueryTracks />
          </Grid>

        </Grid>

        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={12}>
              <Projects />
            </Grid>

          </Grid>
        </MDBox>
      </MDBox>
      <Footer />

    </DashboardLayout>
  );
}

export default Dashboard;
