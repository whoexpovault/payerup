import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import './Home.css'; // Import custom styles

function Home() {
  return (
    <div>
      <Navbar />
      <Banner
        title="Payerup India"
        subtitle="Payerup"
      />
      <div className="container pt-4">
        <h2 className="section-title">Welcome</h2>
        <div className="section-content">
          <p>
            According to “THE HINDU Business Line”, INDIA’s hunger statistics are poorest in the world and nearly 40 per cent of the food produced in India is wasted every year.
          </p>
          <p>
            A study in 2010 co-authored by Ramandeep Arora, a consultant pediatric oncologist at Max Super Specialty Hospital in New Delhi, estimated that about 40,000-50,000 new cases of childhood cancer occur in India every year. Showed that parents of 45% of children abandoned treatment. Researchers found that more than 95% of the treatment abandonment cases occurred for lack of money. This is just one case, there are many cases like this in India. A lot of people would like to help, they try to do visit trust or donate money. Often the money is misused. So here we have the “Payerup INDIA App”. Here you can directly help the needy through this. And the government can verify if the poor are being benefited or not.
          </p>
          <p>
            Till now We don’t have online donation app on this theme where you can directly donate money to needy ones. Previously For food donation, We have a food bank to donate food but this also delays the help of the needy people. But with the help of “Payerup INDIA”, we can reach people quickly with good food.
          </p>
        </div>
      </div>
      <div className="container pt-4">
      <h3>Our Founders </h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-body">
              <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">John Dee</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-body">
              <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Marcus Labusane</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-body">
              <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Steve Smith</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
