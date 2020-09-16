import React, {useState, useEffect} from 'react';
import Spinner from 'react-spinkit'

import { Header, Grid, Hero, LoaderContainer, Button } from "../Styles/Components"
import { Card } from '../Card/Card';

import { gql, useQuery } from "@apollo/client"

const App = () => {
  const [pageCount, setPageCount] = useState(1)
  const [articles, setArticles] = useState({allItems:[]})
  /**
   * Gets first 30 items
   */
  const ARTICLES = gql`
    query GetItems {
      allItems{
        id
        title
        url
        type
      }
    }
  `
  /**
   * @param page page we want to retrieve.
   */
  const PAGINATED_ARTICLES = gql`
    query getPage {
      getPage(page: ${pageCount}) {
        title
        url
      }
    }
  `
  /**
   * Apollo hooks
   */
  const {loading,error,data, fetchMore} = useQuery(ARTICLES)
  useEffect(() => {
    if(data) {
      setArticles(data)
      setPageCount(pageCount +1)
    }
  }, [data])
  if (loading) { 
    return (
      <>
        <Hero>
          <Header>Hello World</Header>
        </Hero>
        <Grid>
          <LoaderContainer>
            <Spinner name = "folding-cube" color ="white" />
          </LoaderContainer>
        </Grid>
      </>
    )
  }
  if (error) {
    return <div>Error! { error.message}</div>
  }
  return (
    <>
      <Hero>
        <Header>Hello World</Header>
      </Hero>
      <Grid>
        {
          (articles.allItems || []).map((item: {CardDetails}, id) => {
            return (
              <Card details = {item} key = {id}/>
            )
          })
        }
        {/* 
          This was meant to load more, however due to laptop problems I was not able to complete it.
          <Button>View More?</Button> 
        */}
      </Grid>
    </>
  )
}

export default App