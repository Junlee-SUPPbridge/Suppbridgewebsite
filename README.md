# SuppBridge - Nutrition Supplement Solutions

SuppBridge is a modern, multilingual website for a nutrition supplement manufacturing and branding company. The website is built using Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Multilingual support (English, Chinese, Spanish)
- Integration with Notion for blog content management
- Contact form integration with NoteForm
- Modern UI with custom animations and transitions
- SEO optimized with Next SEO

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/suppbridge.git
cd suppbridge
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/components` - React components
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and API clients
- `/locales` - Translation files
- `/pages` - Next.js pages
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration

## Deployment

The website can be deployed to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/suppbridge)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Notion API](https://developers.notion.com/)
- [NoteForm](https://noteforms.com/)