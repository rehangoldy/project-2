import React from 'react'
import Layout from '../Layout';
import Sticky from '../features/stickydownload/Sticky';

////
import Minimalist from '../img/minimalist.jpg'
import Adidas from '../imgstyle/adidas.png'
import Nike from '../imgstyle/Nike.png'
import Apple from '../imgstyle/apple.png'
import Puma from '../imgstyle/puma.png'
import Samsung from '../imgstyle/samsung.png'
import Komunitas from '../imgstyle/komunitas.jpg'



export default function Home() {
    return (
        <Layout>
            <Sticky />
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img className='img-minimalist shadow rounded' src={Minimalist} alt="" />
                        </div>
                        <div class="col intro">
                            <h1 className='intro'> Kebahagiaan tidak selalu bisa digunakan. Kebahagiaan datang dari apa yang anda lakukan
                            </h1>
                            <p className='intro'>Kebahagiaan bisa anda dapatkan dengan berbelanja. Maka dari itu, Anda bisa berbelanja disini untuk mendapatkan kebahagiaan</p>
                            <button className='btn btn-dark'  >
                                <a className='text-decoration-none text-white' href='/list-menu'>Lets Go Shopping !</a>
                            </button>
                        </div>

                    </div>
<div className="container text-sp">
<h4 className='text-center list-font'>Kami bekerjasama dengan</h4>
</div>
                    <div class="container text-center sponsor bg-light rounded ">
                        
                        <div class="row">
                            <div class="col mt-4 mb-4">
                                <img className='img-sponsor' src={Adidas} alt="" />
                            </div>
                            <div class="col mt-4 mb-4">
                            <img className='img-sponsor' src={Nike} alt="" />
                            </div>
                            <div class="col mt-4 mb-4">
                            <img className='img-sponsor' src={Apple} alt="" />
                            </div>
                            <div class="col mt-4 mb-4">
                            <img className='img-sponsor' src={Puma} alt="" />
                            </div>
                            <div class="col mt-4 mb-4">
                            <img className='img-sponsor' src={Samsung} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-4 container'>
                    <h4 className='text-center list-font text-sp'>Pelayanan Kami</h4>
                    <h1 className='text-center list-font'>Tips seputar lifestye dan shopping</h1>
                    <p className='text-center '> Selain memberikan tip seputar gaya hidup, kami juga menjual beberapa item yang digunakan pada kehidupan sehari hari. Maka dari itu, anda dapat melihat tips dari kami dan langsung bisa membeli barang yanng kami rekomendasikan serta barang yang anda inginkan</p>
                </div>


                <div class="container kerjasama">
                    <div class="row">
                        <div class="col btn-kerjasama">
                            <h1 className='intro'> Mari bergabung dengan komunitas kami
                            </h1>
                            <p>Komutitas adalah suatu perkumpulan yang memberikan informasi. Komunitas kami selalu memberian informasi mengenai gaya hidup yang relevan</p>
                            <button className='btn btn-dark '  >
                                <a className='text-decoration-none text-white' href='#'>Let's get in touch!</a>
                            </button>
                        </div>
                        <div class="col">
                            <img className='img-minimalist shadow rounded' src={Komunitas} alt="" />
                        </div>
                        </div>
                    </div>
            </section>

        </Layout >
    )
}
