import {useEffect, useState} from "react";
const key = '3fb280c7'
export function  useMoves(query,callBack){
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState('')
    const [tempMovieData, setTempMovieData] = useState([])

    useEffect(
        function () {
            const controller = new AbortController();


            async function fetchMovies() {
                callBack?.()
                try {
                    setIsLoaded(true)
                    setError('')

                    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${query}`, {signal: controller.signal})
                    if (!res.ok) {
                        throw new Error('Something went wrong with fetching  movies')
                    }
                    const data = await res.json()
                    if (data.Response === 'False') {
                        throw new Error('Move not found')
                    }
                    setTempMovieData(data.Search)
                    setError("")
                    // setIsLoaded(false)
                } catch (err) {
                    console.error(err)
                    if (err.name !== "AbortError") {
                        setError(err.message)

                    }
                } finally {

                    setIsLoaded(false)
                }
            }

            if (query.length < 3) {
                setError('')
                setTempMovieData([])
                return;
            }
            // handleCloseMove()
            fetchMovies()
            return function () {
                controller.abort()
            }
        }, [query]
    )

    return {tempMovieData,isLoaded,error }
}