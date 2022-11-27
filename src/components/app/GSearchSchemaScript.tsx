'use client'
// Components
import Script from 'next/script'
// Data
import googleSearchSchema from '../../modules/app/config/googleSearchSchema'

/**
 * Add the website JSON ID schema for Google Search to the script of this layout
 * @returns A Javascript object for dangerouslySetInnerHTML
 */
const addWebsiteJsonId = () => {
  return {
    __html: JSON.stringify(googleSearchSchema)
  }
}

/**
 * Script for structured data for google seacrh
 * @returns Script component for structured data for google seacrh
 */
export default function GSearchSquemaScript () {
  return (
    <Script
      type='application/ld+json'
      dangerouslySetInnerHTML={addWebsiteJsonId()}
      id='WebSite'
    />
  )
}
