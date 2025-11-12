const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Caffeine Compass. All rights reserved.</p>
        <p className="mt-2">
          Disclaimer: This tool is for educational purposes only and is not medical advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
