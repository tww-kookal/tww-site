import Script from "next/script";
import { GA_TRACKING_ID } from "@/lib/constants";

export default function GoogleAnalytics() {
  // Don't render if tracking ID is not set
  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      
      {/* Initialize Google Analytics */}
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
}
