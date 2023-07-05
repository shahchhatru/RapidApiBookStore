import Image from 'next/image'
import Hero from '@/components/Hero'
import { CustomFilter, SearchBar } from '@/components'
import { fetchBooks } from '@/utils';
import {BookCard} from '@/components';

export default async function Home() {

  const allbooks = await fetchBooks();
  console.log(allbooks,allbooks.length);
  const isDataEmpty = !Array.isArray(allbooks) ||  allbooks.length<1 || !allbooks;


  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-24 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Book  Catalogue</h1>
          <p>
            Books that might change your life
          </p>

        </div>
        <div className='home__filters'>
          <SearchBar />
        
          <div className='home__filter-container'>
            <CustomFilter  title="fuel" />
            <CustomFilter  title="year" />
          </div>
        </div>
        {
          !isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {
                  allbooks?.map((book)=>(<BookCard book={book}/>))
                }
              </div>
            </section>
          ):(
            <div className='home__error-container'>
                <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                <p>{allbooks?.message}</p>
            </div>
          )
        }
      </div>
    </main>
  )
}
