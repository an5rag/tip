import * as React from "react";
import {
  BbContent,
  BbHeadingThree,
  BbPage,
  BbParagraph,
  BbSection,
  BbText,
  BbTitle
} from "../../building-blocks/bb-page-elements";
import { TipLink } from "../../building-blocks/tip-link";

export class Privacy extends React.Component<any, any> {

  // pressElementMapper = (props: IPressElementProps, index) => {
  //   return (
  //     <PressElement {...props} key={index} />
  //   );
  // }

  render() {
    return (
      <BbPage documentTitle="Privacy Policy" classes="tip-privacy"
        meta={
          {
            description: "Privacy Policy",
            url: `${this.props.match.url}`
          }
        }>
        <BbTitle classes="title center">
          Privacy Policy
        </BbTitle>
        <BbContent>
          <BbText>


            <BbSection>
              <BbParagraph>
                Your privacy is very important to us. We have developed this Policy in order for you to understand how we collect, use, communicate, and disclose and make use of data. Rest assured, we never collect any personally identifable information, and all the data we collect is secured as we transmit and store it.
              </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                What personal information do we collect from the people that visit our website?
              </BbHeadingThree>
              <BbParagraph>
                When ordering or registering on our site, as appropriate, you may be asked to enter your or other details to help you with your experience.
              </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                When do we collect information?
              </BbHeadingThree>
              <BbParagraph>
                We collect information from you when you subscribe to a newsletter or enter information on our site.
              </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                How do we use your information?
              </BbHeadingThree>
              <BbParagraph>
                We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
              </BbParagraph>
              <ul>
                <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                <li>To improve our website in order to better serve you.</li>
                <li> To allow us to better service you in responding to your customer service requests.</li>
              </ul>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                How do we protect your information?
              </BbHeadingThree>
              <BbParagraph>
                We do not use vulnerability scanning and/or scanning to PCI standards.
                We only provide articles and information. We never ask for credit card numbers.
                We do not use Malware Scanning.
              </BbParagraph>
              <BbParagraph>

                Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
              </BbParagraph>
              <BbParagraph>

                We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.
              </BbParagraph>
              <BbParagraph>

                All transactions are processed through a gateway provider and are not stored or processed on our servers.
              </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                Do we use 'cookies'?
              </BbHeadingThree>
              <BbParagraph>
                Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
              </BbParagraph>
              <BbParagraph>
                We use cookies to understand and save user's preferences for future visits.
              </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                When do we collect information?
              </BbHeadingThree>
              <BbParagraph>
                We collect information from you when you subscribe to a newsletter or enter information on our site.
              </BbParagraph>
              <BbParagraph>
                You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
                              </BbParagraph>
              <BbParagraph>
                If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.It won't affect the user's experience that make your site experience more efficient and may not function properly.
                </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                Third-party disclosure
              </BbHeadingThree>
              <BbParagraph>
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
              </BbParagraph>
              <BbParagraph>
                However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
              </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                Third-party links
              </BbHeadingThree>
              <BbParagraph>
                We do not include or offer third-party products or services on our website.
              </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                Google
              </BbHeadingThree>
              <BbParagraph>
                We use Google Analytics on our website.
               The tracking information allows us to better understand the kind of people who come to our website and what content they’re reading. This allows me to make better decisions about design and content.
              </BbParagraph>
              <BbParagraph>
                Occasionally, we will compile aggregate statistics about the number of visitors this site receives and browsers being used. No personally identifying data is included in this type of reporting.
              </BbParagraph>
              <BbParagraph>
                We've implemented the following: Demographics and Interests Reporting.
              </BbParagraph>
              <BbParagraph>
                All of our activity falls within the bounds of the <TipLink to="https://www.google.com/analytics/terms/us.html" external={true}>Google Analytics Terms of Service.</TipLink>
              </BbParagraph>
              <BbParagraph>
                Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, they can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.
              </BbParagraph>
            </BbSection>

            <BbSection>
              <BbHeadingThree>
                Contacting us
              </BbHeadingThree>
              <BbParagraph>
                If there are any questions regarding this privacy policy, don't hesitate to contact us <TipLink to="contact"> here.</TipLink>
              </BbParagraph>
            </BbSection>
            <BbSection>
              <BbParagraph>
                <strong>Last updated:</strong> January 13, 2018
                </BbParagraph>
            </BbSection>
          </BbText>
        </BbContent>
      </BbPage>
    );
  }
}
