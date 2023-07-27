import  { useEffect } from 'react'


const useTitle = (title) => {
 useEffect(() => {
    document.title = `${title} | shopping cart`
 }, [title]);
    return null;
}

export default useTitle
