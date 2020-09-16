import React, {useState} from 'react'

import {CardStyle, Button, PostBody, PostHeader} from "../Styles/Components"
import {useMetadata} from "../Hooks/Hooks"
import styled from 'styled-components'


export interface CardDetails {
    id?: Number
    article_id?: String
    deleted?: Boolean
    type?: String
    by?: String
    time?: String
    text?: String
    dead?: Boolean
    parent?: String
    poll?: String
    kids?: Number
    url?: String
    score?: Number
    title?: String
    parts?: Number
    descendants?: Number
}


export const Card = (details) => {
    const [cardDetails] = useState(details.details)
    const [data] = useMetadata(cardDetails.url)
    let CardBody
    if(data["ogImage"] !== undefined){
        CardBody = styled(PostBody) `
            background: url("${data["ogImage"][0].url}") center center / cover no-repeat;
        `
    } else {
        CardBody = styled(PostBody) `
            background-image: url(https://source.unsplash.com/random});
        `
    }
    return (
        <CardStyle>
            <CardBody>
                <PostHeader>{cardDetails.title}</PostHeader>
            </CardBody>
            <Button href = {cardDetails.url || "https://sterahi.com"}>Visit!</Button>
        </CardStyle>
    )
}
