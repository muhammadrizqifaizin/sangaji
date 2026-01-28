import { createFileRoute } from '@tanstack/react-router'
import lofoSangajiImg from '../assets/img/lofo sangaji.png'
import img1Img from '../assets/img/img1.png'
import video1 from '../assets/video/video1.mp4'
import video2 from '../assets/video/video2.mp4'
import video3 from '../assets/video/video 3.mp4'
import video4 from '../assets/video/video4.mp4'
import video5 from '../assets/video/video5.mp4'
import video6 from '../assets/video/video6.mp4'
import video7 from '../assets/video/video7.mp4'
import video8 from '../assets/video/8.mp4'

export const Route = createFileRoute('/content')({
  component: Content,
})

export function Content() {
  function playVideo(imgElement: HTMLImageElement) {
    const videoElement = imgElement.nextElementSibling as HTMLVideoElement // Ambil elemen video
    imgElement.style.display = 'none' // Sembunyikan gambar
    videoElement.style.display = 'block' // Tampilkan video
    videoElement.play() // Putar video
  }

  return (
    <>
      <div
        className='container-fluid page-header py-5 mb-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <div className='container text-center py-5'>
          <h1 className='display-3 text-white text-uppercase mb-3 animated slideInDown'>
            Content Barber Sangaji
          </h1>
          <nav aria-label='breadcrumb animated slideInDown'>
            <ol className='breadcrumb justify-content-center text-uppercase mb-0'>
              <li className='breadcrumb-item'>
                <a className='text-white' href='#'>
                  Home
                </a>
              </li>
              <li className='breadcrumb-item'>
                <a className='text-white' href='#'>
                  Pages
                </a>
              </li>
              <li
                className='breadcrumb-item text-primary active'
                aria-current='page'
              >
                Content Barber Sangaji
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto mb-5 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '600px' }}
          >
            <h1 className='text-uppercase'>
              video of the result of barber sangaji
            </h1>
          </div>
          <div className='row g-4'>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src={lofoSangajiImg}
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src={video1} type='video/mp4' />
                    Browser Anda tidak mendukung video tag.
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='link_ke_video_lengkap.mp4'
                    >
                      <i className='fas fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src={lofoSangajiImg}
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src={video2} type='video/mp4' />
                    Browser Anda tidak mendukung video tag.
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.5s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src={lofoSangajiImg}
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src={video3} type='video/mp4' />
                    Browser Anda tidak mendukung video tag.
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src={lofoSangajiImg}
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src={video4} type='video/mp4' />
                    Browser Anda tidak mendukung video tag.
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src={lofoSangajiImg}
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src={video5} type='video/mp4' />
                    Browser Anda tidak mendukung video tag.
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src={lofoSangajiImg}
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src={video6} type='video/mp4' />
                    Browser Anda tidak mendukung video tag.
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src={lofoSangajiImg}
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src={video7} type='video/mp4' />
                    Browser Anda tidak mendukung video tag.
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src={lofoSangajiImg}
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src={video8} type='video/mp4' />
                    Browser Anda tidak mendukung video tag.
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto mb-5 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '600px' }}
          >
            <h1 className='text-uppercase'>
              Photo of the result of Barber Sangaji
            </h1>
          </div>
          <div className='row g-4'>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='team-item'>
                <div className='team-img position-relative overflow-hidden'>
                  <img
                    className='img-fluid'
                    src={img1Img}
                    alt='Result 1 Image'
                  />
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>back to the process</h5>
                  <span className='text-primary'>Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
