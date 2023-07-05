

export async function fetchBooks(){
    const options= {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '90281d1effmsh187dbd1e9975572p1e9d65jsn40b249f751f9',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    }

    const url = 'https://hapi-books.p.rapidapi.com/nominees/romance/2020';

    const response = await fetch(url,options);
    
    const result= await response.json();

    return result;

}  