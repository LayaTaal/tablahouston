import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import PageImage from '../components/PageImage'
import SEO from '../components/seo'
import PageContent from '../components/PageContent'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageContent>
      <h1>Learn Tabla in the tradition of the Guru-Shishya Parampara</h1>
      <p>
        Tabla Houston is the premiere Tabla school in Houston, TX under the
        banner of the Indian Music Society of Houston. Our Guru, Pandit
        Shantilal Shah, is a leading Tabla player and educator with a performing
        and teaching career of more than 30 years.
      </p>
      <p>
        We offer Tabla classes across the Greater Houston area for students of
        all skill levels an ages across. To learn more about our class
        locations, please visit our classes page.
      </p>
      <p>
        If you are interested in learning Tabla, or would like to enroll your
        child, please visit the enrollment page.
      </p>
    </PageContent>
    <PageImage
      filename="tabla-graphic.png"
      alt="Tabla Houston | The school of Tabla Guru Pandit Shantilal Shah."
      className="page-image"
    />
  </Layout>
)

export default IndexPage
