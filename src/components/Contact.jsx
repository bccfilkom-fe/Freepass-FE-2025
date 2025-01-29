import React from 'react'

function Contact() {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container mx-auto">
        <div className="w-full px-4">
          {/* ini untuk bagian header di section ini */}
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold text-3xl text-amber-700 mb-2">Kritik dan Saran</h4>
            <p className="font-medium text-md text-amber-700 md:text-lg">
              Terima kasih telah mengunjungi website kami. Jika ada yang ingin disampaikan, tuliskan di bawah. See you soon!
            </p>
          </div>
        </div>

        {/* ini untuk form nya */}
        <form className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 max-w-xl mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base font-bold text-amber-700">Nama</label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-amber-700 p-3 rounded-md focus:outline-none"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base font-bold text-amber-700">Email</label>
              <input
                type="text"
                id="email"
                className="w-full bg-slate-200 text-amber-700 p-3 rounded-md focus:outline-none"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="pesan" className="text-base font-bold text-amber-700">Pesan</label>
              <textarea
                id="pesan"
                className="w-full bg-slate-200 text-amber-700 p-3 rounded-md focus:outline-none h-32"
              />
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold text-white bg-amber-700 py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
