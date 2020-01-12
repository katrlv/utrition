
import React from "react"
import { Link } from "gatsby"
import "../components/styles.css";

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Food Stats" />
    <h1>
        Panera Bread Bowl
    </h1>
    
    <div className="timeLocation">
      <div className="time">01/07/20</div>
      <div className="location">McLean, VA</div>
    </div>

    <div className="SCORE" style={{ 
      width: `1fr`, 
      height: `240px`, 
      backgroundColor: `#BC9CFF`, 
      marginBottom: `1.45rem`,
      borderRadius: `5px`,
      }}>
    </div>

    <h3 style={{ textAlign: `center`}}>
        Nutrition Facts
    </h3>

    <div className="nutritionHighlights">
      <div className="carbs" style={{ textAlign: `center` }}>
        <h4>150g</h4>
        <p>CARBS</p>
      </div>
      <div className="proteins" style={{ textAlign: `center` }}>
        <h4>150g</h4>
        <p>PROTEINS</p>
      </div>
      <div className="fats" style={{ textAlign: `center` }}>
        <h4>150g</h4>
        <p>FATS</p>
      </div>
    </div> 

    <div className="facts">
      <div className="nutrient">Calories</div>
      <div className="nutrient-amount">500cal</div>
      <div className="nutrient-dv"></div>

      <div className="nutrient">Fat</div>
      <div className="nutrient-amount">4.9g</div>
      <div className="nutrient-dv">8%</div>

      <div className="nutrient">Cholestersol</div>
      <div className="nutrient-amount">0g</div>
      <div className="nutrient-dv">0%</div>

      <div className="nutrient">Sodium</div>
      <div className="nutrient-amount">1217g</div>
      <div className="nutrient-dv">51%</div>

      <div className="nutrient">Carbohydrates</div>
      <div className="nutrient-amount">105g</div>
      <div className="nutrient-dv">35%</div>

      <div className="nutrient">Protein</div>
      <div className="nutrient-amount">22g</div>
      <div className="nutrient-dv"></div>

      <div className="nutrient">Vitamin A</div>
      <div className="nutrient-amount"></div>
      <div className="nutrient-dv">0%</div>

      <div className="nutrient">Vitamin C</div>
      <div className="nutrient-amount"></div>
      <div className="nutrient-dv">0%</div>

      <div className="nutrient">Calcium</div>
      <div className="nutrient-amount">8g</div>
      <div className="nutrient-dv">8.1%</div>

      <div className="nutrient">Iron</div>
      <div className="nutrient-amount">8g</div>
      <div className="nutrient-dv">44%</div>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
