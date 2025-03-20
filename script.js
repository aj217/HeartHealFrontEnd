// Navbar component with navigation for Home and Login.
function Navbar({ onNavigate }) {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">HeartHeal</div>
        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            className="text-gray-700 hover:text-blue-500 px-3"
          >
            Home
          </a>
          <a href="/login" className="text-gray-700 hover:text-blue-500 px-3">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

// Highlight key features on the landing page.
function FeaturesSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Daily Journaling</h3>
          <p>Express your thoughts and track your emotional journey</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Calming Music</h3>
          <p>Discover peaceful melodies to soothe your mind</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Daily Quotes</h3>
          <p>Find inspiration in a variety of curated quotes</p>
        </div>
      </div>
    </section>
  );
}

// Landing Page component with a Get Started button + FeaturesSection.
function LandingPage() {
  const handleGetStarted = () => {
    window.location.href = "/login";
  };

  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to HeartHeal</h1>
      <p className="text-lg mb-8">
        At HeartHeal, our mission is to support you in your journey to emotional
        recovery and well-being. Explore expert advice, community support, and
        personalized resources to help you heal your heart.
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Get Started
      </button>

      {/* New Features Section */}
      <FeaturesSection />
    </main>
  );
}

// Privacy Policy 
function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          At HeartHeal, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you use our website or services. By using
          HeartHeal, you agree to the practices described in this policy. If you
          do not agree with any part, please discontinue use of our website.
        </p>
        <p className="mb-4">
          We collect personal information that you provide voluntarily, such as
          your name, email address, and any other details you choose to share.
          We may also gather usage data (e.g., pages visited, time spent) to
          analyze site performance and enhance user experience. Cookies or
          similar technologies may be used to remember your preferences and
          improve site functionality.
        </p>
        <p className="mb-4">
          Your information is used to personalize your experience, send relevant
          updates, analyze trends, and improve our services. We do not sell or
          share your data with third parties except as required by law. While we
          implement industry-standard security measures to protect your data,
          please note that no method of transmission or storage is completely
          secure.
        </p>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page. By continuing to use HeartHeal after any
          modifications, you acknowledge and accept those changes.
        </p>
      </div>
    </main>
  );
}

// Terms of Service 
function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
        <p className="mb-4">
          By accessing or using HeartHeal, you agree to be bound by these Terms
          of Service. If you do not agree with any part of these terms, please
          discontinue use of our website immediately. HeartHeal is provided for
          informational and supportive purposes only and should not be
          considered professional or medical advice. We reserve the right to
          modify or discontinue any part of our services at any time without
          prior notice.
        </p>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account. You agree to use our website only for lawful purposes and to
          refrain from any conduct that could harm HeartHeal or other users. We
          also reserve the right to update or modify these Terms of Service at
          any time. Continued use of our website signifies your acceptance of
          any updated terms.
        </p>
        <p className="mb-4">
          HeartHeal and its affiliates are not liable for any direct, indirect,
          incidental, or consequential damages arising from your use of our
          website. The content provided is for general informational purposes
          only, and we cannot guarantee that our services will meet your
          requirements or be uninterrupted, timely, secure, or error-free.
        </p>
      </div>
    </main>
  );
}

// Contact Us component for user inquiries.
function ContactUs() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions or concerns, please feel free to reach out
          to us at{" "}
          <a
            href="mailto:support@heartheal.com"
            className="text-blue-500 hover:underline"
          >
            support@heartheal.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}

// Footer component with quick links 
function Footer({ onNavigate }) {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("privacy");
            }}
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("terms");
            }}
            className="hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contact");
            }}
            className="hover:underline"
          >
            Contact Us
          </a>
        </div>
        <p>© {new Date().getFullYear()} HeartHeal. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Main App component 
function App() {
  const [page, setPage] = React.useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <LandingPage />;
      case "privacy":
        return <PrivacyPolicy />;
      case "terms":
        return <TermsOfService />;
      case "contact":
        return <ContactUs />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={setPage} />
      <div className="flex-grow">{renderPage()}</div>
      <Footer onNavigate={setPage} />
    </div>
  );
}

// Render the App component to the root div.
ReactDOM.render(<App />, document.getElementById("root"));
