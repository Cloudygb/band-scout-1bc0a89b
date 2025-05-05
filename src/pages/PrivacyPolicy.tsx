import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-12 px-4 mb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Band-it Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Effective Date: April 29, 2025</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            Band-it (the "Platform"), operated by its parent company Whiskey River Studios ("we," "us," or "our"), 
            is a musician-finding service connecting clients with musicians and bands. We are committed to 
            protecting your privacy and ensuring we handle your personal information in a lawful and transparent manner. 
            This Privacy Policy describes the information we collect from our users, how we use and share it, and your 
            rights regarding that information. We comply with applicable U.S. privacy laws, including the California 
            Consumer Privacy Act (CCPA), to safeguard your data.
          </p>
          <p>
            By using Band-it, you consent to the collection and use of your information as outlined in this policy. 
            If you do not agree with these practices, please do not use the Platform. If you have any questions or 
            concerns about our Privacy Policy, you can contact us using the information provided at the end of this document.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect from General Users (Clients)</h2>
          <p>
            When you sign up or use Band-it as a client seeking to find and book musicians or bands, we collect 
            a minimal amount of personal information necessary to provide and secure our services. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>Name:</strong> Your first and last name (used for your account and to address you).
            </li>
            <li>
              <strong>Email Address:</strong> Used for account login, verification, and communication 
              (e.g., booking confirmations, password recovery).
            </li>
            <li>
              <strong>Location:</strong> General location information such as city and state or ZIP code, 
              which you may provide to help us show you nearby bands and musicians.
            </li>
          </ul>
          
          <p className="font-semibold mt-4">How We Use This Information (General Users):</p>
          <p>
            We use your personal details only for purposes of providing our services to you and ensuring account security:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              Your name and email are used to create and secure your account, allow you to log in, and to 
              communicate with you about Platform-related matters (for example, sending a password reset link or booking notifications).
            </li>
            <li>
              Your location is used to customize your experience by finding local artists in your area for discovery. 
              For example, we may show you bands or events near the city or region you provide.
            </li>
            <li>
              We may send you promotional or newsletter emails about Band-it (such as updates or offers), 
              but only if you explicitly opt-in to receive them. You can unsubscribe from these at any time.
            </li>
            <li>
              <strong>Account Security:</strong> We might use your email or phone (if provided) for multi-factor 
              authentication or to alert you of unusual account activity for your protection.
            </li>
          </ul>
          
          <p>
            We do not sell the personal information of general users, and we do not share it with third parties for 
            marketing or any purposes unrelated to providing the Band-it service. We also do not use your personal 
            data for profiling or advertising. The information collected from you as a client is kept private and used 
            strictly as described above. The only time we might use it beyond these purposes is if required for password 
            recovery assistance or if you request a specific service that involves using your information (such as 
            receiving an email alert for a new feature).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect from Bands and Musicians</h2>
          <p>
            If you register on Band-it as a band or musician to offer your services, we collect a broader range 
            of information to build your public profile and facilitate connections with clients. This information, 
            typically provided by you, may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>Contact Information:</strong> Your name or band representative's name and contact email/phone 
              number (for account creation and client communications).
            </li>
            <li>
              <strong>Band/Musician Profile Details:</strong> Your band or stage name, a description or bio, 
              genre of music, and other public-facing details about your act.
            </li>
            <li>
              <strong>Location and Service Area:</strong> The city/region where you are based and the areas 
              you are willing to travel to for performances.
            </li>
            <li>
              <strong>Pricing Information:</strong> Your typical price range or fees for gigs, which helps clients 
              understand the cost of booking you.
            </li>
            <li>
              <strong>Media and Links:</strong> Short music samples (audio clips) you upload, links to your songs or 
              videos on other platforms, photos or logos of your band, and any upcoming show listings or past gig 
              highlights you choose to share.
            </li>
            <li>
              <strong>Gig Details:</strong> Any other information about your services, such as availability, 
              equipment provided, set length, or special requirements.
            </li>
            <li>
              <strong>Account and Payment Information:</strong> We record information related to gigs booked through 
              Band-it, such as the date and fee of each gig. Band-it takes a 5% commission from each completed booking. 
              Payment processing details (e.g., bank account or payment service information for receiving payouts) are handled 
              securely by our external payment processor (see Third-Party Services below).
            </li>
          </ul>
          
          <p className="font-semibold mt-4">How We Use This Information (Bands/Musicians):</p>
          <p>
            The data collected from bands and musicians is used solely to operate the Platform's core function of 
            showcasing your profile to potential clients and facilitating bookings:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              Your profile information (band name, bio, genre, service area, pricing, etc.) and any media/content you 
              provide are displayed on Band-it for general users to view. This allows clients to discover your act and 
              reach out to book performances.
            </li>
            <li>
              We use your contact information (e.g., email or phone) to verify and manage your account and to communicate 
              with you about bookings or inquiries. Clients may also receive your contact details when you engage in a booking 
              or conversation with them through the Platform (if applicable).
            </li>
            <li>
              <strong>Gig and Transaction Data:</strong> Information like your listed prices and booking history is used to 
              facilitate the booking process (for example, calculating the 5% commission fee, tracking completed gigs, and 
              enabling secure payments through our payment partner). We maintain records of transactions for accounting and 
              to ensure you receive your payments.
            </li>
            <li>
              We do not use band/musician data for any purpose outside of our Platform's functionality. This means we do not 
              sell your information or use it for third-party advertising. Any analytics involving band data (such as tracking 
              how often your profile is viewed or how many bookings you receive) are used only to improve our service or to 
              provide you with feedback about your performance on the Platform. Such analytics are generally presented in 
              aggregate form.
            </li>
            <li>
              <strong>No Ownership of Content:</strong> Band-it does not claim any ownership rights over the music, recordings, 
              images, or other content you provide to us. You retain all copyright and ownership of your content. By submitting 
              content to Band-it, you grant us a license to use, reproduce, and display that content on our Platform for the 
              purpose of promoting your band and connecting you with clients. This license ends when you remove the content or 
              delete your account. We will never sell your music or creative content, and it remains yours to use as you wish 
              outside our Platform.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>
            Band-it uses cookies and similar tracking technologies to provide and enhance our services. Cookies are 
            small text files placed on your device that help our website function properly and remember your preferences. 
            Here is how we use them:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>Session Cookies:</strong> We use session cookies to manage your login session. This allows you to stay 
              logged in as you navigate the site and keeps track of things like your authentication status. These cookies are 
              temporary and typically expire when you close your browser.
            </li>
            <li>
              <strong>Preference and Location Cookies:</strong> If you provide a location or set certain preferences on the site, 
              we may use cookies or local storage to remember these settings. For example, a cookie might store the city or region 
              you last searched for bands in, so we can automatically show you relevant local results when you return.
            </li>
            <li>
              <strong>Geo-Location Services:</strong> With your permission, we might use your browser's geolocation to suggest 
              nearby musicians. We do not continually track your location; any location data is used in the moment to populate 
              search results and is not stored long-term, except perhaps as a general location setting as described above.
            </li>
            <li>
              <strong>Performance and Caching:</strong> We utilize a content delivery network (CDN) and other performance 
              optimizations (sometimes called edge caching). These services may use cookies or similar mechanisms to route you to 
              the nearest server and quickly load content (such as music samples or images) from a server close to your region. 
              This improves site speed and reliability.
            </li>
            <li>
              <strong>Analytics:</strong> We use basic analytics tools to understand how users interact with Band-it (for example, 
              which band profiles are most viewed or how users navigate the site). These analytics may use their own cookies to 
              distinguish repeat visits. The information collected through analytics cookies is generally statistical and not 
              personally identifying. For instance, we might track that a particular band's page was visited 100 times in a month, 
              but this does not tell us who specifically viewed it.
            </li>
          </ul>
          
          <p className="font-semibold mt-4">Your Choices:</p>
          <p>
            Most web browsers automatically accept cookies, but you have the option to disable or remove cookies through your 
            browser settings. However, please note that if you disable essential cookies (like session cookies), certain features 
            of Band-it may not function properly – for example, you might not remain logged in or some location-based features 
            may be unavailable. We do not use cookies for advertising purposes or to track you across other websites.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services and Data Sharing</h2>
          <p>
            To run the Band-it Platform efficiently, we rely on a few trusted third-party services. Whenever we share data with 
            these service providers, it is only to the extent necessary for them to perform their functions, and they are 
            contractually obligated to protect your information and use it only for the purposes we specify. The key third-party 
            partners we work with include:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>Website Hosting and Data Storage:</strong> Band-it is hosted on robust infrastructure provided by Amazon Web 
              Services (AWS). All your data, including personal information and uploaded content, is stored on secure AWS servers in 
              the United States. AWS implements high security standards to safeguard data, and we in turn apply our own encryption 
              and access controls on top of their services.
            </li>
            <li>
              <strong>Analytics Services:</strong> We use basic analytics tools (for example, Google Analytics or a similar service) 
              to gather information about site traffic and usage patterns. This helps us understand which artists are getting the most 
              views, how users are finding bands, and what features are most popular. The analytics provider may collect information 
              such as your browser type, device, pages visited, and time spent, but this information is used in aggregate form for 
              statistics. We do not receive personal details like your name or email from analytics, only aggregated data. The analytics 
              data helps us improve Band-it's features and user experience.
            </li>
            <li>
              <strong>Payment Processing:</strong> All payments for bookings (such as when a client pays a band for a gig through our 
              Platform) are handled by a certified third-party payment processor (e.g., Stripe, PayPal, or a similar payment service). 
              When you enter credit card information or bank details, you are actually interacting with our payment partner's secure 
              system, which is compliant with PCI-DSS (the Payment Card Industry Data Security Standard). Band-it itself does not 
              store your sensitive payment details (like full credit card numbers). The payment processor will share with us only the 
              information needed to record and complete the transaction – for example, confirmation that a payment was made, the amount, 
              and to attribute the payment to the correct user(s) (client and band). Our payment partner may have its own privacy policy 
              which governs the use of your payment data, and we encourage you to review that when providing payment information.
            </li>
            <li>
              <strong>Communications Tools:</strong> We may use third-party services to send out emails or platform notifications 
              (for instance, an email service provider to send verification emails or booking confirmations). These providers only 
              receive your email address and the content of the message that needs to be sent. They are not permitted to use your 
              email for any other purpose.
            </li>
          </ul>
          
          <p className="font-semibold mt-4">No Sale of Personal Data:</p>
          <p>
            Band-it does not sell personal information to third parties. "Selling" in this context means sharing personal data with 
            third parties for monetary or other valuable consideration, as defined by laws like CCPA. We also do not share your personal 
            information with third parties for their independent marketing or advertising purposes.
          </p>
          
          <p className="font-semibold mt-4">Limited Sharing:</p>
          <p>
            The instances in which we might share personal information are limited to the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>With your consent:</strong> If you explicitly ask us to share information with a third party, or consent to a 
              specific sharing (for example, participating in a promotional event with a partner), we will share accordingly.
            </li>
            <li>
              <strong>With service providers:</strong> As detailed above, we share information with vendors who perform necessary 
              operations for Band-it (hosting, analytics, payment, communications). They process data only under our instructions 
              and for our purposes.
            </li>
            <li>
              <strong>For legal reasons:</strong> If we are required by law to disclose information, we will do so. This may happen, 
              for example, in response to a court order, subpoena, or other legal process, or to comply with government reporting 
              obligations. We may also share information if necessary to enforce our terms of service or to protect the rights, property, 
              or safety of Whiskey River Studios, our users, or the public. This could include sharing information with law enforcement 
              or authorities if a user is engaged in harmful or illegal activities on the Platform.
            </li>
            <li>
              <strong>Business transfers:</strong> In the event that Band-it or Whiskey River Studios is involved in a merger, 
              acquisition, reorganization, or sale of assets, your information may be transferred to the successor entity as part of 
              that transaction. If such a transfer occurs, we will ensure that your personal information remains subject to the protections 
              of this Privacy Policy (unless you are notified otherwise and consent to a new policy).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We take the security of your personal information seriously. Band-it implements a variety of security measures to protect 
            data from unauthorized access, alteration, disclosure, or destruction:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>Encryption:</strong> We use encryption protocols (such as HTTPS/TLS) to protect data transmitted between your device 
              and our servers. For example, when you log in or upload content, that data is encrypted in transit. Sensitive information 
              (like passwords) is stored encrypted or hashed in our database.
            </li>
            <li>
              <strong>Access Controls:</strong> Personal data is accessible only to authorized personnel who need it to operate or support 
              the service. Whiskey River Studios restricts access to personal information on a need-to-know basis and ensures those with 
              access are bound by confidentiality obligations.
            </li>
            <li>
              <strong>Security Policies:</strong> We maintain internal security policies and regularly train our staff on proper handling 
              of user data. We also monitor our systems for possible vulnerabilities and attacks, and we update our defenses as needed.
            </li>
            <li>
              <strong>Third-Party Security:</strong> Our service providers (such as AWS and payment processors) are reputable companies 
              that implement their own strong security practices. We choose partners that maintain high standards of security compliance 
              (for example, AWS's data centers have numerous certifications and Stripe is PCI-compliant).
            </li>
          </ul>
          
          <p>
            Despite our efforts, please note that no method of transmission over the internet or electronic storage is completely secure. 
            While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security. 
            It is important that you also play a role in keeping your account secure — for instance, by choosing a strong password and keeping 
            your login credentials confidential. If you suspect any unauthorized access or security breach related to your account, please 
            contact us immediately so we can assist.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention and Deletion</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer 
            retention period is required or permitted by law. In practice:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              If you are a general user (client), we will keep your account information (name, email, location) for as long as your account 
              is active so that you can continue to use the Platform.
            </li>
            <li>
              If you are a band/musician, we retain your profile and related content for as long as you choose to keep your account active, 
              so that potential clients can find and contact you.
            </li>
            <li>
              We may retain certain information after account deletion if required for legal obligations or legitimate business purposes – 
              for example, records of transactions (gigs booked and payments) may be kept to comply with tax, accounting, or fraud prevention 
              laws. However, such data will no longer be associated with your personal profile, and we will only keep what is necessary.
            </li>
          </ul>
          
          <p className="font-semibold mt-4">Account Deletion by User:</p>
          <p>
            You have the ability to delete your account at any time using the account settings on the Platform. Deleting your account will 
            remove your personal information and any content you have provided from our active databases. This includes your profile information, 
            contact details, and (for bands) any media or descriptions you uploaded. We will also disassociate you from any listings or search 
            records on the site.
          </p>
          
          <p className="font-semibold mt-4">Data Deletion Requests:</p>
          <p>
            Additionally, whether you are a client or a musician, you may send us a request to delete all personal data we have stored about you. 
            Upon receiving a verified deletion request, we will erase your personal information from our systems (and instruct our service providers 
            to do the same) within a reasonable timeframe, unless retention is required by law as noted above. Verification may involve confirming 
            your identity (to protect against unauthorized deletion requests).
          </p>
          
          <p>
            Once deleted, your data (aside from possible minimal records required for legal compliance) cannot be recovered. Keep in mind that if 
            you delete your band account, your profile will no longer be visible to clients and you will not be able to recover your content or 
            booking history through the Platform. If you are a client and delete your account, you will lose access to any saved preferences or 
            booking records on Band-it.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Privacy Rights</h2>
          <p>
            Band-it respects your rights to control your personal information. Depending on where you live, these rights may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>Access and Portability:</strong> You have the right to request a copy of the personal information we hold about you, and to 
              receive it in a portable format. For example, you can request that we provide details on the data you provided to us (such as your 
              profile information and any booking history).
            </li>
            <li>
              <strong>Correction:</strong> If any of your personal information is inaccurate or outdated, you have the right to correct or 
              update it. You can do most of this through your account profile page (for example, updating your email or changing your band 
              description), or by contacting us for assistance.
            </li>
            <li>
              <strong>Deletion:</strong> As described above, you have the right to request deletion of your personal data. This is also sometimes 
              called the "right to be forgotten." We will honor such requests to the extent we are not legally required to retain the information.
            </li>
          </ul>
          
          <p className="font-semibold mt-4">California Privacy Rights (CCPA):</p>
          <p>
            If you are a resident of California, you have specific rights under the California Consumer Privacy Act (and its amendments):
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>Right to Know:</strong> You can request that we disclose the categories and specific pieces of personal information we have 
              collected about you, the categories of sources for that information, the business purpose for collecting it, and the categories of 
              third parties with whom we share it.
            </li>
            <li>
              <strong>Right to Delete:</strong> You can request that we delete any personal information about you that we collected from you, 
              subject to certain exceptions (for example, if we need to retain certain data for legal compliance).
            </li>
            <li>
              <strong>Right to Opt-Out of Sale:</strong> You have the right to opt out of the sale of your personal information. As noted, 
              Band-it does not sell personal data, so we do not engage in any data sales that you would need to opt out of. We treat browser 
              signals such as the Global Privacy Control (GPC) as opt-out requests if applicable.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights. This means 
              we will not deny you our services, charge you a different price, or provide a different level of quality because you exercised your 
              privacy rights.
            </li>
          </ul>
          
          <p className="font-semibold mt-4">Opt-Out of Marketing:</p>
          <p>
            Even outside of California-specific rights, all users of Band-it can choose to opt out of receiving promotional emails from us. 
            You can do this by not opting in to begin with, or by unsubscribing via the link in any promotional email. Service-related 
            communications (like booking confirmations or policy updates) are not considered promotional and may still be sent as needed to 
            operate the service.
          </p>
          
          <p>
            To exercise any of your rights or make inquiries about your privacy, please contact us (see Contact Information below). For certain 
            requests, such as access or deletion, we will need to verify your identity to ensure the security of your account. Verification might 
            involve confirming your email address or other information you provided to us. If you are a California resident making a CCPA request, 
            please indicate that in your request. You may also designate an authorized agent to make a request on your behalf, in which case we will 
            require written proof of the agent's permission and also verify your identity directly.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy and Content Guidelines</h2>
          <p>
            Band-it is intended for users aged 16 and older. We do not knowingly collect personal information from anyone under the age of 16. 
            If you are under 16, you are not permitted to create an account or use the Platform. Parents or guardians who become aware that a 
            child under 16 has created an account should contact us immediately so we can remove the child's information.
          </p>
          
          <p>
            For teenagers who are 16 or 17 years old, we advise using Band-it with caution and ideally under parental guidance. While we welcome 
            musicians and fans of music of all ages over 16, users should be aware that the Platform may contain uncensored musical content. 
            This means that some music, band names, or descriptions could include explicit lyrics or mature themes. Band-it does not typically 
            censor or filter the audio content or language that artists choose to share, as we aim to allow creative expression.
          </p>
          
          <p>
            However, we do have community standards and a content moderation process in place, especially regarding visual and graphic content:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              We review images and profile pictures uploaded to the Platform. Content that contains nudity, pornography, excessive violence, or 
              other graphic imagery is strictly not allowed. If such content is discovered, it will be removed, and the user may face suspension 
              or banning from the Platform.
            </li>
            <li>
              We encourage all users to report any inappropriate content or misuse of the Platform. Our team will investigate and take action as 
              necessary to maintain a safe and welcoming environment.
            </li>
            <li>
              Keep in mind that music and text content (like lyrics or band bios) are user-generated and might include adult themes. If you are 
              sensitive to such content or under 18, please use discretion when browsing or listening.
            </li>
          </ul>
          
          <p>
            By using Band-it, you affirm that you are at least 16 years old. If we learn that we have collected personal information from a 
            user under 16, we will take prompt steps to delete that information from our records.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update or modify this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or other factors. 
            When we make changes, we will revise the "Effective Date" at the top of this policy. If the changes are significant, we will provide a 
            more prominent notice, such as via email notification to our users or a notice on our website.
          </p>
          
          <p>
            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. If you 
            continue to use Band-it after a Privacy Policy update, it signifies your acceptance of the revised terms. If you do not agree with 
            any changes to the policy, you should stop using the Platform and, if applicable, delete your account or contact us to remove your data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us. We are here 
            to help and will respond to your inquiry as soon as reasonably possible.
          </p>
          
          <p className="font-semibold mt-4">Contact Methods:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <strong>Email:</strong> privacy@whiskeyriverstudios.com (Please include "Band-it Privacy" in the subject line for faster routing.)
            </li>
            <li>
              <strong>Mailing Address:</strong> Whiskey River Studios, Attn: Privacy Department, 1234 Music Avenue, Austin, TX 78701, USA
            </li>
            <li>
              <strong>Online Contact Form:</strong> You may also reach out to us through the contact form on our website at Band-it Contact Page 
              (if available).
            </li>
          </ul>
          
          <p>
            By contacting us, you can inquire about our privacy practices, request access to or deletion of your data, or ask any questions about 
            how your information is handled.
          </p>
          
          <p className="mt-8">
            Thank you for trusting Band-it with your musical journey. We value your privacy and are committed to safeguarding your personal 
            information.
          </p>
          
          <div className="mt-12 flex justify-center">
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
