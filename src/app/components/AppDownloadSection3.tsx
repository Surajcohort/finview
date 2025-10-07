import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/style/AppDownloadSection3.css';

export default function AppDownloadSection() {
  return (
    <div className="container-fluid app-download-section">
      <div className="container content-container">
        <div className="row align-items-center">
          {/* Left side - Mobile phones image */}
          <div className="col-lg-6 col-md-6  mb-md-0">
            <div className="position-relative">
              <Image
                src="/images/Frame-5462.webp"
                alt="Mobile App Preview"
                width={600}
                height={500}
                className="img-fluid"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="col-lg-6 col-md-6">
            <h1 className="title">Get Download Our Apps</h1>
            
            <p className="description">
              Take advantage of our convenient mobile apps to access our services anytime, anywhere.
              Download our apps today.
            </p>

            {/* Stats and Features */}
            <div className="row mb-4 stats">
              <div className="col-md-6 mb-4">
                <h5>Active Users</h5>
                <h2>
                  20<span>M</span>
                </h2>
              </div>

              <div className="col-md-6 features">
                <div className="mb-3">
                    {/* <span className="check">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="#FCB650"><path d="M11.076 21.7696C11.0123 21.7696 10.9493 21.7564 10.891 21.7309C10.8327 21.7054 10.7803 21.6681 10.737 21.6213L1.59918 11.7368C1.53827 11.6709 1.49788 11.5887 1.48298 11.5002C1.46807 11.4117 1.47928 11.3208 1.51524 11.2385C1.55121 11.1563 1.61036 11.0864 1.68546 11.0372C1.76056 10.9881 1.84835 10.962 1.93809 10.962H6.33655C6.40259 10.962 6.46786 10.9761 6.52796 11.0035C6.58805 11.0309 6.64158 11.0709 6.68492 11.1207L9.73883 14.6341C10.0689 13.9286 10.7078 12.7539 11.829 11.3225C13.4864 9.20631 16.5694 6.09411 21.8441 3.28463C21.946 3.23034 22.0646 3.21625 22.1764 3.24514C22.2883 3.27403 22.3852 3.34381 22.4481 3.44068C22.511 3.53756 22.5353 3.6545 22.5162 3.76841C22.497 3.88232 22.4359 3.98492 22.3448 4.05595C22.3247 4.07169 20.291 5.67323 17.9504 8.60672C15.7963 11.3063 12.9329 15.7204 11.5238 21.419C11.4991 21.5191 11.4415 21.6081 11.3603 21.6717C11.2791 21.7352 11.1789 21.7698 11.0758 21.7698L11.076 21.7696Z" fill="#074C3E"></path></svg>
                  </span> */}
                   <span className="check">✓</span>
                  <span className="text">User-Friendly Interface</span>
                </div>
                <div className="mb-3">
                  <span className="check">✓</span>
                  <span className="text">Secure and Reliable</span>
                </div>
                <div className="mb-3">
                  <span className="check">✓</span>
                  <span className="text">Sync Across Devices</span>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="d-flex flex-wrap gap-3 download-buttons">
             
                <Image
                  src="/images/googleplay.webp"
                  alt="Google Play"
                  width={180}
                  height={52}
                  className="me-2"
                />
               

              
                <Image
                 src="/images/appstore.webp"
                  alt="App Store"
                  width={180}
                  height={52}
                  className="me-2"
                />
               
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
