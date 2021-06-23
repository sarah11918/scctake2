/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={{ 
        margin: `0 auto`,
        backgroundColor: `#f4f4f4`, 
        padding: `1em 1.5em`, 
        letterSpacing: `0.5px`,
        textAlign: `center`, 
        fontWeight: `300`,
        fontSize: `1.15rem`,
        lineHeight: `1.6em`,
        marginBottom: `1em`
        }}> Summerside Community Choir is the longest-running community choir on PEI!</div>  
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        </div>
      
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
