import ogs from 'ts-open-graph-scraper'
import {useState, useEffect} from 'react'
export function useMetadata(url) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState("false")
    useEffect(() => {
        async function fetchMetaData() {
            try {
                setLoading("true")
                const options = {url: `https://cors-anywhere.herokuapp.com/${url}`}
                const response = await ogs(options)
                setData(response)
                setLoading('false')
            } catch(e){
                throw e
            }
        }
        if(url !== '' && url !== undefined && url.length > 1) {
            fetchMetaData()
        }
    }, [url])
    return [data, loading]
}