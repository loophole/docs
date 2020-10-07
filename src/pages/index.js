import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/home/header"
import Features from "../components/home/features"
import Pricing from "../components/home/pricing"
//import terms from "../components/home/terms"
import Usecases from "../components/home/usecases"
import Footer from "../components/common/footer/footer"
import GetStarted from "../components/common/footer/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation isIndex={true} />
    <Header />
    <Features />
    <Usecases />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
