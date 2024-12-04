import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
 return (
   <>
     <Head>
       <title>About - æwa Official Website</title>
       <meta name="description" content="Learn about æwa, a Japanese pop artist and singer-songwriter born in 2000." />
       <meta property="og:title" content="About - æwa Official Website" />
       <meta property="og:description" content="Learn about æwa, a Japanese pop artist and singer-songwriter born in 2000." />
     </Head>
     <Layout>
       <div className="container mx-auto px-4 flex-grow">
         <main className="min-h-screen bg-black text-white font-bricolage">
           <div className="container mx-auto px-4 max-w-2xl">
             <h1 className="text-4xl font-bold py-10">ABOUT</h1>
             <div className="space-y-6 text-lg">
               <p>
                 aewa (æwa) is a Japanese pop artist, singer-songwriter, and musician. (Born January 15, 2000) 
               </p>
               <p>
                 Although he can&apos;t play an instrument, for the most part, he makes music by adding raps and vocals to the beats he makes himself. The recording is done at his home, and he also mixes and masters his own music.
               </p>
               <p>
                 The music genre he produces ranges from narrative music to dance music. The main sites for uploading songs are SoundCloud and youtube.
               </p>
               <p>
                 His artist name is based on the romanization of his real name.
               </p>
             </div>
           </div>
         </main>
       </div>
     </Layout>
   </>
 )
}