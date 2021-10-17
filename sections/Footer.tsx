const Footer = () => {
  return (
    <div className="bg-secondary-default py-12">
      <div className="container">
        <div className="text-center border-t border-primary-default py-12">
          <a
            className="text-primary-default text-base"
            href="mailto:me@franger.dev"
          >
            me@franger.dev
          </a>
          <div className="flex justify-center items-center mt-2">
            <div className="rounded-full w-6 h-6 ml-2">
              <a
                href="https://www.linkedin.com/in/franger-centeno/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/social_media/linkedin.svg"
                  alt="linkenid"
                  className="w-full h-full"
                />
              </a>
            </div>
            <div className="rounded-full w-6 h-6 ml-2">
              <a
                href="https://www.instagram.com/franger.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/social_media/instagram.svg"
                  alt="instagram"
                  className="w-full h-full"
                />
              </a>
            </div>
            <div className="rounded-full w-6 h-6 ml-2">
              <a
                href="https://twitter.com/frangerdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/social_media/twitter.svg"
                  alt="twitter"
                  className="w-full h-full"
                />
              </a>
            </div>
            <div className="rounded-full w-6 h-6 ml-2">
              <a
                href="https://github.com/frangercenteno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/social_media/github.svg"
                  alt="github"
                  className="w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
