import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TalentAI Labs | Blockchain & AI Development Agency | Lithuania EU',
  description: 'TalentAI Labs is a blockchain and AI development agency with 36+ combined years of experience. We build smart contracts, DeFi protocols, AI platforms, trading bots, and enterprise solutions. Creators of TalentAI. Hedera Foundation backed. Based in Vilnius, Lithuania.',
  keywords: [
    'blockchain development agency',
    'AI development company',
    'smart contract development',
    'Hedera developer',
    'Solana development',
    'Ethereum development',
    'DeFi development',
    'Web3 agency Lithuania',
    'blockchain consulting Europe',
    'AI recruitment platform',
    'trading bot development',
    'supply chain blockchain',
    'lending protocol development',
    'dApp development',
    'crypto wallet development',
  ],
  authors: [{ name: 'TalentAI Labs' }],
  creator: 'TalentAI Labs',
  publisher: 'TalentAI Labs',
  metadataBase: new URL('https://talentailabs.com'),
  openGraph: {
    title: 'TalentAI Labs | We Build What Others Can\'t',
    description: 'Blockchain & AI development agency. 36+ years combined experience. Smart contracts, DeFi, AI platforms, trading bots. Hedera Foundation backed.',
    url: 'https://talentailabs.com',
    siteName: 'TalentAI Labs',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TalentAI Labs - Blockchain & AI Development Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentAI Labs | We Build What Others Can\'t',
    description: 'Blockchain & AI development agency. 36+ years combined experience. Smart contracts, DeFi, AI platforms, trading bots.',
    images: ['/images/og-image.jpg'],
    creator: '@talentailabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TalentAI Labs',
              legalName: 'TalentAI Labs UAB',
              url: 'https://talentailabs.com',
              logo: 'https://talentailabs.com/icons/talentai.png',
              foundingDate: '2020',
              founders: [
                {
                  '@type': 'Person',
                  name: 'Hatem Azaiez',
                  jobTitle: 'Co-Founder & CTO',
                  sameAs: 'https://www.linkedin.com/in/hatem-azaiez-1327a25a/',
                },
                {
                  '@type': 'Person',
                  name: 'Mohamed Mnif',
                  jobTitle: 'Co-Founder & Lead Engineer',
                  sameAs: 'https://www.linkedin.com/in/mohamed-mnif-3b8b9698/',
                },
                {
                  '@type': 'Person',
                  name: 'Jaafer Saied',
                  jobTitle: 'Co-Founder & Lead Developer',
                  sameAs: 'https://www.linkedin.com/in/jaafar--saied/',
                },
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Vilnius',
                addressCountry: 'LT',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'hello@talentailabs.com',
              },
              sameAs: [
                'https://www.linkedin.com/company/talentailabs',
                'https://twitter.com/talentailabs',
                'https://github.com/talentailabs',
              ],
              description: 'Blockchain and AI development agency with 36+ combined years of experience',
              serviceType: [
                'Blockchain Development',
                'Smart Contract Development',
                'DeFi Protocol Development',
                'AI Platform Development',
                'Trading Bot Development',
                'Web3 Consulting',
                'Supply Chain Solutions',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#F8FAFC] text-[#0F172A]">{children}</body>
    </html>
  );
}
