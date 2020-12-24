import React from 'react'
import {default as Page} from '../../../components/pageData'
import { GetStaticProps, GetStaticPaths } from 'next'
import { staticPaths, staticProps } from '../../../lib/postData'

/**
  * Major thanks to this Dev.to post:
  * https://dev.to/sagar/building-a-blog-with-next-js-253
  *
  */

function ProjectPage(props) {
    return(
        <>
            <Page title={props.blog.title} description={props.blog.description} content={props.blog.content} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    return staticProps(context, 'other')
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    return staticPaths(context, 'other')
}

export default ProjectPage
