const QuickSupport = () => {
  return (
    <div className="quick-support">
      <div className="quick-support-heading">
        <h2>
          Quick
          Support
        </h2>
        <p>CONTACT</p>
      </div>
      <p>YOU CAN GET ALL THE CONTACT INFORMATION.</p>
      <div className="quick-support-cards">
        <div className="quick-support-card">
          <div className="quick-support-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#f9e802"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <p>Visit Us</p>
          </div>
          <p className="quick-support-card-value">
            SodlanTech, STPI building, IT park, Shestradhara Road, Dehradun, 248001
          </p>
        </div>

        <div className="quick-support-card">
          <div className="quick-support-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#f9e802"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <p>Call Us</p>
          </div>
          <p className="quick-support-card-value">
            +91 9876543201 <br /> +91 9876543201
          </p>
        </div>

        <div className="quick-support-card">
          <div className="quick-support-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#f9e802"
              class="bi bi-envelope-open-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z" />
            </svg>
            <p>Email Us</p>
          </div >
          <p className="quick-support-card-value">emailone@gmail.com <br/> emailtwo@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default QuickSupport;
