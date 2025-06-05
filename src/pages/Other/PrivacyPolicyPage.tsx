import React from 'react';
import styles from './PrivacyPolicyPage.module.css';
import Layout from '../../components/Layout/Layout';


const PrivacyPolicyPage: React.FC = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h2 className={styles.main_title}>Privacy Policy</h2>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Introduction</h2>
                    <p className={styles.paragraph_text}>
                        Welcome to Posts. We respect your privacy and are committed to 
                        protecting your personal information. This Privacy Policy explains 
                        what information we collect when you visit our site and use our services, 
                        including uploading posts (photos, titles and text), how we use that 
                        information and with whom we may share it.
                    </p>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Information We Collect</h2>
                    <p className={styles.paragraph_text}>
                        Information you provide:
                    </p>
                    <ul className={styles.paragraph_list}>
                        <li>
                            Account data: If you register (login, email, password, username).
                        </li>
                        <li>
                            User content: Photos, post titles, post text that you upload to the Posts. 
                            Please note: Photos you upload may contain metadata (EXIF), including 
                            GPS coordinates. You can remove them before uploading.
                        </li>
                        <li>
                            Profile information: Any additional information you add to your 
                            profile (bio, avatar, etc.).
                        </li>
                        <li>
                            Communication: Information you provide when contacting our support or 
                            through other forms of communication.
                        </li>
                    </ul>
                    <p className={styles.paragraph_text}>
                        Information collected automatically:
                    </p>
                    <ul className={styles.paragraph_list}>
                        <li>
                            Usage data: Information about how you interact with the Posts 
                            (pages viewed, time of visit, links clicked, actions on the Posts).
                        </li>
                        <li>
                            Device data: Device type, operating system, browser version, IP address, 
                            unique device identifiers.
                        </li>
                        <li>
                            Cookies and similar technologies: We use cookies and similar technologies 
                            to collect information about how you use the Posts, remember your preferences, 
                            and improve the Posts. You can manage your cookie settings in your browser.
                        </li>
                    </ul>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>How We Use Your Information</h2>
                    <p className={styles.paragraph_text}>
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className={styles.paragraph_list}>
                        <li>
                            Providing and operating the Posts (publishing your posts, managing your account).
                        </li>
                        <li>
                            Improving, developing and personalizing the Posts.
                        </li>
                        <li>
                            Understanding how users interact with the Posts.
                        </li>
                        <li>
                            Communicating with you (responding to support requests, important notices 
                            about changes to the Posts).
                        </li>
                        <li>
                            Ensuring the security and integrity of the Posts (preventing fraud, abuse).
                        </li>
                        <li>
                            Complying with our legal obligations.
                        </li>
                    </ul>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Sharing Your Information</h2>
                    <p className={styles.paragraph_text}>
                        We may share your information in the following situations:
                    </p>
                    <ul className={styles.paragraph_list}>
                        <li>
                            With your consent: We will share your personal information when you give us 
                            explicit consent to do so.
                        </li>
                        <li>
                            Service providers: We may share information with trusted third parties who provide 
                            services to us (e.g. hosting, analytics, database maintenance, payment 
                            processing - if applicable). These parties are required to protect your information 
                            and use it only to provide services to us.
                        </li>
                        <li>
                            By law: If we are required to do so by law, court order, or in response to a valid 
                            governmental request.
                        </li>
                        <li>
                            To protect the rights and safety: To protect the rights, property, or safety of 
                            our company, our users, or the public.
                        </li>
                        <li>
                            Business reorganization: In connection with a merger, sale of company assets, 
                            financing, or acquisition of all or a portion of our business by another company.
                        </li>
                    </ul>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Your Posts (User Content)</h2>
                    <p className={styles.paragraph_text}>
                        Remember that the posts (photo, title, text) that you upload to the Site are public 
                        by default. Any visitor to the Site can view this content. We cannot control the 
                        actions of other users or third parties who may copy, store or distribute your 
                        public content.
                    </p>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Data Retention</h2>
                    <p className={styles.paragraph_text}>
                        We retain your personal information only for as long as it is necessary for the 
                        purposes set out in this Policy, unless a longer retention period is required or 
                        permitted by law (for example, for tax, accounting or security purposes). User 
                        content (posts) may be retained indefinitely unless you delete it or delete your account, 
                        unless otherwise provided by the functionality of the Site.
                    </p>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Your Rights (especially relevant for GDPR/CCPA)</h2>
                    <p className={styles.paragraph_text}>
                        Depending on your location, you may have certain rights in relation to your personal data, 
                        such as:
                    </p>
                    <ul className={styles.paragraph_list}>
                        <li>
                            The right to access your data.
                        </li>
                        <li>
                            The right to have inaccurate data corrected.
                        </li>
                        <li>
                            The right to have your data erased ("right to be forgotten").
                        </li>
                        <li>
                            The right to restriction of processing.
                        </li>
                        <li>
                            The right to data portability.
                        </li>
                        <li>
                            The right to object to processing.
                        </li>
                        <li>
                            The right to withdraw consent (if processing is based on consent).
                        </li>
                        <li>
                            To exercise these rights, please contact us at posts123@gmail.com.
                        </li>
                    </ul>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Security</h2>
                    <p className={styles.paragraph_text}>
                        We use reasonable technical and organizational measures to protect your 
                        information from unauthorized access, use, modification or destruction. 
                        However, no method of transmission over the Internet or method of electronic 
                        storage is completely secure, and we cannot guarantee absolute security.
                    </p>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Links to Other Sites</h2>
                    <p className={styles.paragraph_text}>
                        Our Site may contain links to other websites that are not operated by us. 
                        We are not responsible for the content or privacy policies of these 
                        third party sites.
                    </p>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Children</h2>
                    <p className={styles.paragraph_text}>
                        Our Site is not directed to individuals under 14 years old. 
                        We do not knowingly collect personal information from children. 
                        If you are a parent or guardian and believe that your child has provided us with 
                        personal information, please contact us.
                    </p>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Changes to Privacy Policy</h2>
                    <p className={styles.paragraph_text}>
                        We may update our Privacy Policy from time to time. We will notify you of any 
                        changes by posting the new Privacy Policy on this page and updating the 
                        "Last updated" date. You are advised to review this Privacy Policy 
                        periodically for changes.
                    </p>
                </section>
                <section className={styles.paragraph}>
                    <h2 className={styles.paragraph_title}>Contacting Us</h2>
                    <p className={styles.paragraph_text}>
                        If you have any questions or comments about this Privacy Policy, please 
                        contact us at: posts123@gmail.com.
                    </p>
                </section>
            </div>
        </Layout>
    )
}


export default PrivacyPolicyPage;
