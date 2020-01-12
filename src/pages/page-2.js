import React from "react"
import { Link } from "gatsby"
import "../components/styles.css";

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Food Stats" />
    <div style={{
      width: `fr`,
      border: `1px solid grey`,
      borderRadius: `5px`,
      padding: `10px 20px 10px 20px`,
      marginBottom: `30px`
    }}>Search</div>

    <div className="foodStats">
      <div className="stat1"></div>
      <div className="stat2"></div>
      <div className="stat3"></div>
      <div className="stat4"></div>
      <div className="stat5"></div>
      <div className="stat6"></div>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
