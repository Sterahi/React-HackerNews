import styled from 'styled-components'

export const Button = styled.a `
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0 auto;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 16px;
    cursor: pointer;
    transition: ease all .3s;
    align-self: flex-end;
    text-align:center;
    position: relative;
    text-decoration:none;
    bottom: 5px;
    &:hover {
        background-color: white;
        color: #333;
        transition: ease all .3s;
    }
`

export const Grid = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    height:100%;
    justify-content: space-around;
    background-color:#333;
`

export const CardStyle = styled.div`
    width:30%;
    margin-top:25px;
    padding:10px 5px;
    height:250px;
    background-color: #292929;
    display:flex;
    flex-direction:column;
    align-items:center;
    color: white;
    text-align:center;
    overflow:hidden;
`

export const Hero = styled.div`
    width: 100vw;
    min-height:25vh;
    background-color:#d6d6d6;
    display: flex;
    align-items:center;
`
export const Header = styled.h1`
    display: block;
    margin: 0 auto;
    color: #333;
    align-self: center;
`
export const PostBody = styled.div`
    flex-grow:1;
    width:100%;
`
export const PostHeader = styled.span`
    display:block;
    height:100%;
    margin:auto;
    font-weight: bold;
    align-self:center;
    background-color: rgba(0,0,0,0.6);
`
export const LoaderContainer = styled.div`
    display: flex;
    width:100vw;
    height:75vh;
    background-color:#333;
    justify-content: center;
    align-items: center;
`