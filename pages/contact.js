import Head from 'next/head';
import Layout from '../components/Layout'

export default function Page() {
  return (
    <>
      <Head>
        <title>Contact - æwa Official Website</title>
        <meta name="description" content="Get in touch with æwa. Contact for music inquiries, collaborations, and business opportunities." />
        <meta property="og:title" content="Contact - æwa Official Website" />
        <meta property="og:description" content="Get in touch with æwa. Contact for music inquiries, collaborations, and business opportunities." />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <div className="container mx-auto px-4 flex-grow">
          <main className="min-h-screen bg-black text-white font-bricolage">
            <div className="container mx-auto px-4 max-w-xl">
              <h1 className="text-4xl font-bold py-10 text-center">CONTACT</h1>
              <form className="space-y-6" action="mailto:aewaoiui@gmail.com" method="post">
                <div>
                  <label className="block mb-2">NAME</label>
                  <input type="text" required className="w-full p-2 bg-gray-800 rounded font-bricolage" />
                </div>
                <div>
                  <label className="block mb-2">E-MAIL</label>
                  <input type="email" required className="w-full p-2 bg-gray-800 rounded font-bricolage" />
                </div>
                <div>
                  <label className="block mb-2">SUBJECT</label>
                  <input type="text" required className="w-full p-2 bg-gray-800 rounded font-bricolage" />
                </div>
                <div>
                  <label className="block mb-2">MESSAGE</label>
                  <textarea required className="w-full p-2 bg-gray-800 rounded h-32 font-bricolage"></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-gray-200">
                  SEND
                </button>
              </form>
            </div>
          </main>
        </div>
      </Layout>
    </>
  )
}