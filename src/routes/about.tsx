import { createFileRoute } from '@tanstack/react-router'
import { useI18n } from '../lib/i18n'
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'

export const Route = createFileRoute('/about')({
  component: About,
})

export function About() {
  const { t } = useI18n()

  return (
    <>
      {/* Header */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
            {t('about.title')}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  {t('breadcrumb.home')}
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  {t('breadcrumb.pages')}
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                {t('about.title')}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column position-relative">
                <img
                  className="img-fluid w-75 align-self-end"
                  src={team1}
                  alt="About Image"
                  style={{
                    minHeight: '300px',
                    objectFit: 'cover',
                    backgroundColor: '#343a40',
                  }}
                />
                <div
                  className="w-50 bg-secondary p-5"
                  style={{
                    marginTop: '-25%',
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  <h1 className="text-uppercase text-primary mb-3">
                    {t('about.experience.years')}
                  </h1>
                  <h2 className="text-uppercase mb-0">
                    {t('about.experience.title')}
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="d-inline-block bg-secondary text-primary py-1 px-4">
                {t('about.us')}
              </p>
              <h1 className="text-uppercase mb-4">
                {t('about.heading')}
              </h1>
              <p>{t('about.desc1')}</p>
              <p className="mb-4">{t('about.desc2')}</p>

              <div className="row g-4">
                <div className="col-md-6">
                  <h3 className="text-uppercase mb-3">
                    {t('about.since.title')}
                  </h3>
                  <p className="mb-0">{t('about.since.desc')}</p>
                </div>
                <div className="col-md-6">
                  <h3 className="text-uppercase mb-3">
                    {t('about.clients.title')}
                  </h3>
                  <p className="mb-0">{t('about.clients.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '600px' }}
          >
            <p className="d-inline-block bg-secondary text-primary py-1 px-4">
              {t('about.our.barber')}
            </p>
            <h1 className="text-uppercase">
              {t('about.meet.barber')}
            </h1>
          </div>

          {/* 🔥 CARD CENTER RESPONSIVE */}
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
              <div className="team-item text-center">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src={team1} alt="Team 1" />
                  <div className="team-social">
                    <a className="btn btn-square" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5 className="text-uppercase mb-1">Mr. Z</h5>
                  <span className="text-primary">Capster</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
              <div className="team-item text-center">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src={team2} alt="Team 2" />
                  <div className="team-social">
                    <a className="btn btn-square" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5 className="text-uppercase mb-1">Arif</h5>
                  <span className="text-primary">Capster</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
              <div className="team-item text-center">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src={team3} alt="Team 3" />
                  <div className="team-social">
                    <a className="btn btn-square" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5 className="text-uppercase mb-1">Karol</h5>
                  <span className="text-primary">Capster</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
