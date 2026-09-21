export const TELECOM_GUIDES_DATA = [
  {
    slug: "identifying-spam-and-fraud-calls-india",
    title: "How to Identify and Protect Yourself Against Spam, KYC & Banking Scam Calls in India",
    subtitle: "A practical guide to detecting impersonation schemes, fake electricity disconnections, and unauthorized OTP requests.",
    category: "Cyber Safety & Fraud Prevention",
    readTime: "6 min read",
    updatedDate: "March 2026",
    author: "Goutam Septa",
    excerpt:
      "Cyber fraud in India has evolved from simple lottery SMS to sophisticated voice-phishing (vishing) schemes. Learn how scammers operate, red flags to watch for, and the immediate steps to take if you suspect a scam call.",
    sections: [
      {
        heading: "1. The Changing Landscape of Telecom Fraud in India",
        paragraphs: [
          "India has the second-largest telecommunication network in the world, with over 1.15 billion active mobile telephone connections. While mobile connectivity has powered UPI payments, e-governance, and digital services, it has also provided bad actors with an expansive attack surface.",
          "According to reports published by the Indian Cyber Crime Coordination Centre (I4C) under the Ministry of Home Affairs, voice phishing (vishing) accounts for a major share of financial fraud reported on the National Cyber Crime Reporting Portal (1930). Fraudsters leverage social engineering and panic-inducing scripts to trick users into transferring money or compromising credentials.",
        ],
      },
      {
        heading: "2. The Most Common Voice Scams Targeting Indian Citizens",
        paragraphs: [
          "The 'Urgent Bank Account / SIM KYC Suspension' Trap: You receive an automated or live call claiming your SIM card or bank account will be blocked within 2 hours unless you update your KYC by clicking an SMS link or downloading a remote access application (such as AnyDesk or TeamViewer). Genuine banks and telecom operators (Jio, Airtel, Vi, BSNL) never mandate immediate remote app installations.",
          "The 'Electricity Bill Disconnection' Threat: Often sent via SMS followed by an urgent voice call stating that your electricity meter will be disconnected tonight at 9:30 PM due to an unpaid previous month bill. The victim is instructed to call a 10-digit mobile number instead of the official DISCOM portal.",
          "The 'Digital Arrest' and Law Enforcement Impersonation: Posing as officials from the Central Bureau of Investigation (CBI), Enforcement Directorate (ED), or Mumbai Police Crime Branch, scammers claim that an illegal parcel containing contraband has been intercepted in your name, threatening immediate arrest unless a security bond is transferred.",
        ],
      },
      {
        heading: "3. Red Flags: How to Spot a Fraudulent Call in Real Time",
        paragraphs: [
          "Unsolicited calls from standard 10-digit personal mobile numbers claiming to represent banks or telecom customer care. Legitimate corporate banks utilize verified SMS shortcodes (e.g., AD-HDFCBK) or toll-free prefixes (1800-series).",
          "Pressure tactics emphasizing urgency, legal punishment, or immediate disconnection to prevent you from consulting family or verifying with official hotlines.",
          "Requests for any one-time password (OTP), UPI PIN, card CVV, or instructions to install screen-sharing software.",
        ],
      },
      {
        heading: "4. What to Do If You Receive or Fall Victim to a Scam",
        paragraphs: [
          "Immediately disconnect the call. Do not argue or press any key combinations (like *401* which enables call forwarding).",
          "Report the incident immediately on the National Cyber Crime Reporting Portal at https://cybercrime.gov.in or dial the National Helpline 1930 within the golden hour to freeze fraudulent fund transfers.",
          "Report suspect numbers through the Department of Telecommunications (DoT) Sanchar Saathi Chakshu portal (sancharsaathi.gov.in) to assist authorities in blacklisting fraudulent SIM cards.",
        ],
      },
    ],
  },
  {
    slug: "understanding-indian-telecom-circles-and-number-series",
    title: "Understanding Indian Mobile Number Series, Telecom Circles & Carrier Allocation",
    subtitle: "How the Department of Telecommunications (DoT) structures India's 10-digit National Numbering Plan.",
    category: "Telecom Architecture",
    readTime: "7 min read",
    updatedDate: "March 2026",
    author: "Goutam Septa",
    excerpt:
      "Ever wondered why Indian mobile numbers start with 9, 8, 7, or 6? Explore the architecture of the National Numbering Plan (NNP), licensed telecom service areas (LSAs), and how Mobile Number Portability (MNP) works.",
    sections: [
      {
        heading: "1. The Evolution of India's National Numbering Plan (NNP)",
        paragraphs: [
          "Every telephone call made in India is routed according to the National Numbering Plan (NNP) administered by the Department of Telecommunications (DoT). In 2003, the DoT implemented the 10-digit numbering structure to accommodate explosive subscriber growth.",
          "Under the current plan, mobile subscriber numbers are 10 digits in length, with initial prefixes 9, 8, 7, and 6 designated exclusively for cellular mobile telephone services (CMTS). Landline fixed services utilize regional STD area codes followed by 6 to 8 digit local numbers.",
        ],
      },
      {
        heading: "2. The 22 Licensed Telecom Circles (LSAs)",
        paragraphs: [
          "For telecommunications licensing and spectrum allocation, India is divided into 22 distinct Telecom Circles (Licensed Service Areas), broadly classified into Metros and Categories A, B, and C based on revenue potential and geography:",
          "Metro Circles: Delhi, Mumbai, Kolkata.",
          "Category A: Maharashtra & Goa, Gujarat, Andhra Pradesh & Telangana, Karnataka, Tamil Nadu (including Chennai).",
          "Category B: Kerala, Punjab, Haryana, Uttar Pradesh (East), Uttar Pradesh (West), Rajasthan, Madhya Pradesh & Chhattisgarh, West Bengal.",
          "Category C: Bihar & Jharkhand, Odisha, Assam, North East, Jammu & Kashmir, Himachal Pradesh.",
        ],
      },
      {
        heading: "3. How Carrier Number Series Are Allocated",
        paragraphs: [
          "When a telecom operator (such as Reliance Jio, Bharti Airtel, Vodafone Idea, or BSNL) expands network capacity in a circle, the DoT issues a block of 1 million numbers (known as an MSC or Mobile Switching Centre code). For instance, a series like 98200-XXXXX was historically allocated to Vodafone in Mumbai.",
          "Telecom directories inspect the first 4 to 5 digits of a mobile number to determine the original licensing circle and issuing operator.",
        ],
      },
      {
        heading: "4. The Impact of Mobile Number Portability (MNP)",
        paragraphs: [
          "In 2011, the Telecom Regulatory Authority of India (TRAI) introduced Mobile Number Portability (MNP), allowing subscribers to retain their 10-digit phone number when switching carriers. In 2015, Nationwide MNP (Full MNP) went live, allowing portability across different circles.",
          "Because of MNP, a number that was originally allocated to Airtel Delhi may today be active on Jio Karnataka. Real-time network routing relies on centralized MNP Clearinghouse databases operated by Syniverse and MNP Interconnection Telecom Solutions.",
        ],
      },
    ],
  },
  {
    slug: "how-caller-id-and-telecom-directories-work",
    title: "How Caller ID, Telecom Gateway Lookups & Number Verification Systems Work",
    subtitle: "The engineering behind caller name identification, HLR lookups, and decentralized directory indexing.",
    category: "Technical Explainer",
    readTime: "8 min read",
    updatedDate: "March 2026",
    author: "Goutam Septa",
    excerpt:
      "A technical walkthrough of how caller identification works: from traditional SS7 CNAM databases to modern carrier HLR signaling, crowdsourced contact sync, and public directory lookups.",
    sections: [
      {
        heading: "1. The Anatomy of a Cellular Call Setup",
        paragraphs: [
          "When you place a phone call, your mobile handset does not simply transmit audio over the airwaves. It initiates a complex cryptographic handshake with the nearest Base Transceiver Station (BTS), communicating with the operator's Core Network via Signaling System 7 (SS7) or Diameter protocols.",
          "The calling party's identity is passed as Calling Line Identification (CLI) or Calling Party Number (CPN) in the Initial Address Message (IAM). In traditional networks, this packet contains only the numerical phone number, not the subscriber's textual name.",
        ],
      },
      {
        heading: "2. The Role of the Home Location Register (HLR) and VLR",
        paragraphs: [
          "Every SIM card is permanently tied to an entry in the carrier's Home Location Register (HLR). The HLR maintains subscriber identity (IMSI), subscribed services, current routing address, and the Mobile Station International Subscriber Directory Number (MSISDN).",
          "When a lookup query is performed, an HLR dip verifies whether the SIM card is currently active on the cellular network, whether it is roaming in a Visitor Location Register (VLR), and which carrier network currently holds the subscriber routing profile.",
        ],
      },
      {
        heading: "3. CNAM Databases vs. Crowdsourced Address Books",
        paragraphs: [
          "In countries like the United States, carriers operate centralized Calling Name (CNAM) databases where text names associated with telephone billing accounts are queried for a fee per call. In India, TRAI has mandated the phased rollout of CNAP (Calling Name Presentation) based on verified KYC records.",
          "Prior to official CNAP implementations, commercial caller ID applications relied on crowdsourced address book syncing. When millions of users grant access to their device phonebooks, proprietary servers build a massive composite directory of names associated with numbers.",
        ],
      },
      {
        heading: "4. The Privacy-First Architecture of TrueCallCheck",
        paragraphs: [
          "Unlike commercial apps that harvest and re-upload your personal phonebook contacts, TrueCallCheck is built on strict privacy principles: zero contact syncing, zero logging of incoming search queries, and reliance on public telecom circle allocation matrices and carrier metadata gateways.",
        ],
      },
    ],
  },
  {
    slug: "trai-dnd-national-customer-preference-register",
    title: "TRAI DND (Do Not Disturb) Guide: How to Stop Unwanted Telemarketing in India",
    subtitle: "How to register your number on the NCPR (1909), manage preference categories, and report spam SMS & calls.",
    category: "Consumer Rights & Telecom Regulations",
    readTime: "5 min read",
    updatedDate: "March 2026",
    author: "Goutam Septa",
    excerpt:
      "Tired of continuous telemarketing calls for loans, credit cards, and real estate? Here is the step-by-step procedure to activate Full DND on Jio, Airtel, Vi, and BSNL using the National Customer Preference Register.",
    sections: [
      {
        heading: "1. What is the National Customer Preference Register (NCPR)?",
        paragraphs: [
          "The National Customer Preference Register (NCPR), formerly known as the National Do Not Call (NDNC) Registry, is a government-mandated database regulated by the Telecom Regulatory Authority of India (TRAI).",
          "Under the Telecom Commercial Communications Customer Preference Regulations (TCCCPR, 2018), registered telemarketers are legally prohibited from contacting numbers enrolled on the DND registry for promotional purposes.",
        ],
      },
      {
        heading: "2. How to Activate Full DND via SMS or Call to 1909",
        paragraphs: [
          "The fastest way to activate Do Not Disturb is through the standardized toll-free shortcode 1909 available across all Indian telecom networks:",
          "To block ALL promotional commercial communications (Fully Blocked Category), send an SMS from your mobile number with the text: 'START 0' to 1909.",
          "Alternatively, you can dial 1909 from your phone and follow the Interactive Voice Response (IVR) prompts to choose your preferences.",
        ],
      },
      {
        heading: "3. Partial DND Categories You Can Customize",
        paragraphs: [
          "If you want to receive certain promotional updates (such as discounts from your favorite retail brands) while blocking real estate or loan calls, you can selectively block or allow specific categories by texting 'START <Category Number>' to 1909:",
          "1. Banking / Insurance / Financial Products / Credit Cards",
          "2. Real Estate",
          "3. Education",
          "4. Health",
          "5. Consumer Goods & Automobiles",
          "6. Communication / Entertainment / IT",
          "7. Tourism & Leisure",
        ],
      },
      {
        heading: "4. How to Report Unregistered Telemarketers (UCC)",
        paragraphs: [
          "If you continue to receive promotional calls from regular 10-digit mobile numbers after 7 days of DND activation, you can register a formal complaint under TRAI regulations within 3 days of receiving the call:",
          "Send an SMS to 1909 in this exact format: 'COMP TEL NO XXXXXXXXXX, dd/mm/yy, Time hh:mm, Brief Description'.",
          "The telecom operator is mandated to investigate the complaint, issue warnings to the originating number, and disconnect telecom resources for repeated offenders.",
        ],
      },
    ],
  },
  {
    slug: "privacy-and-phone-lookup-in-india",
    title: "Phone Number Privacy in India: Digital Personal Data Protection (DPDP) & User Rights",
    subtitle: "Understanding your data privacy rights, public directories, and how to request unlisting of your personal records.",
    category: "Legal & Data Privacy",
    readTime: "6 min read",
    updatedDate: "March 2026",
    author: "Goutam Septa",
    excerpt:
      "With the enactment of India's Digital Personal Data Protection (DPDP) Act 2023, personal telecommunication metadata is subject to strict consent frameworks. Learn about your privacy rights and our commitment to zero-log lookups.",
    sections: [
      {
        heading: "1. The Digital Personal Data Protection (DPDP) Act 2023 Overview",
        paragraphs: [
          "Passed by the Parliament of India in August 2023, the DPDP Act establishes a modern comprehensive legal framework governing the processing of digital personal data within India. It recognizes the right of individuals to protect their personal data and the need to process data for lawful purposes.",
          "Under the Act, a telephone number linked to an identifiable individual is classified as personal data. Data Fiduciaries must ensure transparency, specify lawful processing grounds, and implement reasonable security safeguards.",
        ],
      },
      {
        heading: "2. The Problem with Invasive Caller ID Apps",
        paragraphs: [
          "Many conventional caller identification applications require users to grant blanket permissions to access their device contacts, call history, and SMS inbox. These contacts are aggregated onto centralized cloud servers without the explicit consent of the people whose contact cards were uploaded.",
          "This practice has led to severe privacy concerns, as individuals who have never installed these apps find their names, secondary emails, and residential addresses publicly searchable.",
        ],
      },
      {
        heading: "3. TrueCallCheck's Architectural Commitment to Privacy",
        paragraphs: [
          "TrueCallCheck operates on a fundamentally different, ethical ethos:",
          "Zero Contact Book Syncing: TrueCallCheck is a pure web platform. It never asks for, accesses, or uploads your device contacts.",
          "Zero Query Logging: We do not maintain server logs of which phone numbers you search. Once a lookup query is resolved in your browser session, the query is purged from memory.",
          "No User Tracking: We do not require accounts, logins, passwords, or credit card details to use the service.",
        ],
      },
      {
        heading: "4. Your Right to Unlisting and Removal",
        paragraphs: [
          "If your contact details or phone number appear in public telecom directories and you wish to request verification, correction, or delisting, you can contact our privacy officer directly at hello@imgoutam.dev.",
          "We honor verified unlisting requests within 24 to 48 hours without requiring payment or administrative fees.",
        ],
      },
    ],
  },
];
